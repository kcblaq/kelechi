"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormState extends FormData {
  errors: FormErrors;
  isSubmitting: boolean;
  submitStatus: 'success' | 'error' | null;
}

const ContactForm = (): JSX.Element => {
  const initialState: FormState = {
    name: "",
    email: "",
    message: "",
    errors: {},
    isSubmitting: false,
    submitStatus: null
  };

  const [formState, setFormState] = useState<FormState>(initialState);

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formState.message.trim()) {
      errors.message = "Message is required";
    } else if (formState.message.length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }
    
    return errors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: "" // Clear error when field is edited
      }
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: null
    }));

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !userID) {
      console.error('Missing EmailJS configuration');
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'error'
      }));
      return;
    }

    try {
      const emailParams: Record<string, unknown> = {
        name: formState.name,
        email: formState.email,
        message: formState.message
      };

      console.log("@", formState)

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        setFormState({
          ...initialState,
          submitStatus: 'success'
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'error'
      }));
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        {formState.submitStatus === "success" && (
          <Alert className="mb-4 bg-green-50">
            <AlertDescription>
              Thank you for reaching out! I&apos;ll get back to you shortly.
            </AlertDescription>
          </Alert>
        )}
        
        {formState.submitStatus === "error" && (
          <Alert className="mb-4 bg-red-50">
            <AlertDescription>
              Failed to send message. Please try again later.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Name</label>
            <Input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={formState.errors.name ? "border-red-500" : ""}
              placeholder="John Doe"
              disabled={formState.isSubmitting}
            />
            {formState.errors.name && (
              <p className="text-sm text-red-500">{formState.errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Email</label>
            <Input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={formState.errors.email ? "border-red-500" : ""}
              placeholder="john@example.com"
              disabled={formState.isSubmitting}
            />
            {formState.errors.email && (
              <p className="text-sm text-red-500">{formState.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Message</label>
            <Textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              className={formState.errors.message ? "border-red-500" : ""}
              placeholder="How can we help you?"
              rows={4}
              disabled={formState.isSubmitting}
            />
            {formState.errors.message && (
              <p className="text-sm text-red-500">{formState.errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;