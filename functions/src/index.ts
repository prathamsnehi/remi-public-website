import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { defineSecret } from "firebase-functions/params";
import rateLimit from "express-rate-limit";

// Define the secrets so Firebase knows to load them securely
const airtableApiKey = defineSecret("AIRTABLE_API_KEY");
const airtableBaseId = defineSecret("AIRTABLE_BASE_ID");
const airtableTableId = defineSecret("AIRTABLE_TABLE_ID");

// Set up the robust rate limiter (10 requests per hour per IP)
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 10, 
  message: { error: "Too many requests from this IP, please try again after an hour" },
  keyGenerator: (req: any) => {
    return req.headers['x-forwarded-for']?.toString() || req.ip || "unknown";
  }
});

export const submitFeedback = onRequest(
  { 
    cors: true, // Automatically handles Cross-Origin Resource Sharing for React
    secrets: [airtableApiKey, airtableBaseId, airtableTableId] 
  },
  (req, res) => {
    limiter(req as any, res as any, async () => {
      // Only accept POST requests
      if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
      }

      try {
        const { email, type, description, fileUrl } = req.body;
        
        const apiKey = airtableApiKey.value();
        const baseId = airtableBaseId.value();
        const tableId = airtableTableId.value();
        
        // Using the Airtable Table ID securely from Google Secret Manager
        const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

        // Use Node's native fetch to pass the data to Airtable securely
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  "Email": email || "",
                  "Type": type || "",
                  "Description": description || "",
                  ...(fileUrl ? { "Additional Info": fileUrl } : {})
                }
              }
            ]
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          logger.error("Airtable API Error", errorText);
          res.status(500).json({ error: "Failed to save feedback" });
          return;
        }

        res.status(200).json({ success: true, message: "Feedback submitted!" });
      } catch (error) {
        logger.error("Internal Webhook Error", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  }
);
