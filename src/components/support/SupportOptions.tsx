import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Bug, Lightbulb, Mail } from "lucide-react";

export const SupportOptions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network latency
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your submission has been received.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="feature-title">Feature Title</Label>
              <Input id="feature-title" placeholder="e.g. Add dark mode to the memory view" required className="rounded-xl" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="feature-desc">Description & Use Case</Label>
              <Textarea 
                id="feature-desc" 
                placeholder="How would this feature help you? Please be as detailed as possible." 
                className="min-h-[120px] rounded-xl"
                required 
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-full h-11">
              {isSubmitting ? "Submitting..." : "Submit Feature Request"}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="bug" className="space-y-4 animate-in fade-in-50 duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="bug-title">Bug Summary</Label>
              <Input id="bug-title" placeholder="e.g. The app crashes when I tap on..." required className="rounded-xl" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bug-steps">Steps to Reproduce</Label>
              <Textarea 
                id="bug-steps" 
                placeholder="1. Go to...&#10;2. Tap on...&#10;3. See error" 
                className="min-h-[120px] rounded-xl"
                required 
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bug-device">Device & OS Version</Label>
              <Input id="bug-device" placeholder="e.g. iPhone 15 Pro, iOS 17.2" required className="rounded-xl" />
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