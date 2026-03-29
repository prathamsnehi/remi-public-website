import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Bug, Lightbulb, Mail } from "lucide-react";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const SupportOptions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const submitToWebhook = async (payload: any) => {
    const webhookUrl = import.meta.env.FIREBASE_WEBHOOK_URL || "https://us-central1-remi-public.cloudfunctions.net/submitFeedback";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error("API Error");
    return response;
  }

  const handleFeatureSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Cache form reference before await
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(form);
      const payload = {
        email: formData.get("email") || "",
        type: "Feature Request",
        description: `Title: ${formData.get("title")}\n\n${formData.get("desc")}`,
        fileUrl: ""
      };
      
      await submitToWebhook(payload);
      toast.success("Thank you! Your feature request has been received.");
      form.reset(); // Safely clear form since reference is cached
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit. Did you deploy the Webhook yet?");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBugSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Cache form reference before await
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(form);
      let fileUrl = "";
      
      if (file) {
        toast.info("Uploading file, please wait...");
        const storageRef = ref(storage, `bugs/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        fileUrl = await getDownloadURL(snapshot.ref);
      }

      const payload = {
        email: formData.get("email") || "",
        type: "Bug Report",
        description: `Title: ${formData.get("title")}\nDevice: ${formData.get("device")}\nSteps:\n${formData.get("steps")}`,
        fileUrl: fileUrl
      };
      
      await submitToWebhook(payload);
      toast.success("Thank you! Your bug report has been received.");
      form.reset(); // Safely clear form since reference is cached
      setFile(null);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit bug. Check Webhook URL and Firebase Config.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-surface border rounded-3xl shadow-sm">
      <Tabs defaultValue="feature" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-12 rounded-full p-1 bg-muted/50">
          <TabsTrigger value="feature" className="rounded-full text-sm font-medium">
            <Lightbulb className="w-4 h-4 mr-2" />
            Feature Request
          </TabsTrigger>
          <TabsTrigger value="bug" className="rounded-full text-sm font-medium">
            <Bug className="w-4 h-4 mr-2" />
            Bug Report
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feature" className="space-y-4 animate-in fade-in-50 duration-500">
          <form onSubmit={handleFeatureSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="feature-title">Feature Title</Label>
              <Input name="title" id="feature-title" placeholder="e.g. Add dark mode to the memory view" required className="rounded-xl" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="feature-desc">Description & Use Case</Label>
              <Textarea 
                name="desc"
                id="feature-desc" 
                placeholder="How would this feature help you? Please be as detailed as possible." 
                className="min-h-[120px] rounded-xl"
                required 
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="feature-email">Email (Optional)</Label>
              <Input name="email" id="feature-email" type="email" placeholder="you@example.com" className="rounded-xl" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-full h-11">
              {isSubmitting ? "Submitting..." : "Submit Feature Request"}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="bug" className="space-y-4 animate-in fade-in-50 duration-500">
          <form onSubmit={handleBugSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="bug-title">Bug Summary</Label>
              <Input name="title" id="bug-title" placeholder="e.g. The app crashes when I tap on..." required className="rounded-xl" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bug-steps">Steps to Reproduce</Label>
              <Textarea 
                name="steps"
                id="bug-steps" 
                placeholder="1. Go to...&#10;2. Tap on...&#10;3. See error" 
                className="min-h-[120px] rounded-xl"
                required 
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bug-device">Device & OS Version</Label>
              <Input name="device" id="bug-device" placeholder="e.g. iPhone 15 Pro, iOS 17.2" required className="rounded-xl" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bug-email">Email (Optional)</Label>
              <Input name="email" id="bug-email" type="email" placeholder="you@example.com" className="rounded-xl" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bug-file">Attachments (Image/Video, max 10MB)</Label>
              <Input 
                id="bug-file" 
                type="file" 
                accept="image/*,video/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    const selectedFile = e.target.files[0];
                    if (selectedFile.size > 10 * 1024 * 1024) {
                      toast.error("File is too large. Please select a file under 10MB.");
                      e.target.value = '';
                      setFile(null);
                      return;
                    }
                    if (!selectedFile.type.startsWith('image/') && !selectedFile.type.startsWith('video/')) {
                      toast.error("Invalid file type. Only images and videos are allowed.");
                      e.target.value = '';
                      setFile(null);
                      return;
                    }
                    setFile(selectedFile);
                  }
                }}
                className="rounded-xl cursor-pointer" 
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-full h-11">
              {isSubmitting ? "Submitting..." : "Submit Bug Report"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      <div className="mt-10 pt-8 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Prefer to reach out directly? We'd love to hear from you.
        </p>
        <a href="mailto:contact@prathamsnehi.com">
          <Button variant="outline" className="rounded-full shadow-sm">
            <Mail className="w-4 h-4 mr-2" />
            contact@prathamsnehi.com
          </Button>
        </a>
      </div>
    </div>
  );
};