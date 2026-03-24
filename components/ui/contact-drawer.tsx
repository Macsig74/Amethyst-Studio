"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { sendToDiscord } from "@/app/actions/contact";
import { Loader2, CheckCircle2 } from "lucide-react";

interface ContactDrawerProps {
  name: string;
  trigger: React.ReactNode;
  description?: string;
}

export function ContactDrawer({ name, trigger, description }: ContactDrawerProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await sendToDiscord({
        ...formData,
        recipient: name
      });

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        setError(result.error || "Failed to send.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer onOpenChange={(open) => { if (!open) { setIsSuccess(false); setError(null); } }}>
      <DrawerTrigger asChild>
        {trigger}
      </DrawerTrigger>

      <DrawerContent>
        <div className="flex flex-col items-center justify-center text-center py-8 px-4">
          <DrawerHeader className="max-w-md space-y-2">
            <DrawerTitle className="text-2xl font-bold tracking-tight">
              Contact {name}
            </DrawerTitle>
            <DrawerDescription className="text-base text-muted-foreground">
              {description || `Send a message to ${name} and we'll get back to you soon.`}
            </DrawerDescription>
          </DrawerHeader>

          {/* Form area */}
          <div className="w-full max-w-md space-y-5 mt-6">
            <div className="grid gap-2 text-left">
              <Label htmlFor="from_name" className="text-sm font-semibold">Your Name</Label>
              <Input 
                id="from_name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe" 
                className="bg-muted/30" 
              />
            </div>

            <div className="grid gap-2 text-left">
              <Label htmlFor="from_email" className="text-sm font-semibold">Your Email</Label>
              <Input 
                id="from_email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email" 
                placeholder="john@example.com" 
                className="bg-muted/30" 
              />
            </div>

            <div className="grid gap-2 text-left flex-1">
              <Label htmlFor="message" className="text-sm font-semibold">Your Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={`What would you like to discuss with ${name}?`}
                className="min-h-[120px] bg-muted/30 resize-none"
              />
            </div>
          </div>

          {/* Status Message */}
          {isSuccess && (
            <div className="mt-4 text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Message sent successfully!
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-600 dark:text-red-400 font-medium">
              {error}
            </div>
          )}

          {/* Footer */}
          <DrawerFooter className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-8 pb-10 justify-center items-center sm:justify-center">
            <Button 
              disabled={isSubmitting || isSuccess}
              onClick={handleSubmit}
              className="w-full sm:w-1/2 h-12 text-base font-bold bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg disabled:opacity-70"
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Message"}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full sm:w-1/2 h-12 text-base font-medium">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
