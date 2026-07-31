"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { NeoButton } from "./NeoButton";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 5000);
      } else {
        alert("Failed to send message. Please make sure your .env variables are set!");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 lg:py-32 z-10 text-black">
      <div className="mb-10 sm:mb-16 border-b-4 sm:border-b-8 border-black pb-4 sm:pb-6 relative flex items-center justify-between">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">Contact</h2>
        <div className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black font-black uppercase rotate-2 text-xs sm:text-sm md:text-xl shadow-[4px_4px_0px_#fff] hidden sm:block">
          Let&apos;s Talk
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 sm:mb-6 leading-none">
            Have an idea? <br />
            <span className="text-neo-accent">Let&apos;s build it.</span>
          </h3>
          <p className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-black">
            I&apos;m currently available for full-time opportunities or freelance projects. Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
          {/* Email card — forced white bg + black text so it works in both themes */}
          <div className="flex items-center gap-3 sm:gap-4 bg-neo-secondary text-black border-2 sm:border-4 border-black p-3 sm:p-4 shadow-neo-sm w-full sm:w-max -rotate-1 hover:rotate-0 transition-transform">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-black shrink-0" />
            <span className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wider break-all">rushabhshete188@gmail.com</span>
          </div>
        </div>

        <div className="bg-neo-muted border-2 sm:border-4 border-black p-6 sm:p-8 md:p-12 shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] rotate-1">
          <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label htmlFor="name" className="font-black uppercase text-lg sm:text-xl tracking-tight text-black">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                placeholder="John Doe"
                className="h-12 sm:h-14 px-3 sm:px-4 bg-white text-black placeholder:text-black/40 border-2 sm:border-4 border-black font-bold text-base sm:text-lg focus:bg-neo-secondary focus:outline-none focus:shadow-neo-sm transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label htmlFor="email" className="font-black uppercase text-lg sm:text-xl tracking-tight text-black">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                placeholder="john@example.com"
                className="h-12 sm:h-14 px-3 sm:px-4 bg-white text-black placeholder:text-black/40 border-2 sm:border-4 border-black font-bold text-base sm:text-lg focus:bg-neo-secondary focus:outline-none focus:shadow-neo-sm transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label htmlFor="message" className="font-black uppercase text-lg sm:text-xl tracking-tight text-black">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="p-3 sm:p-4 bg-white text-black placeholder:text-black/40 border-2 sm:border-4 border-black font-bold text-base sm:text-lg focus:bg-neo-secondary focus:outline-none focus:shadow-neo-sm transition-all resize-none"
              />
            </div>
            <NeoButton 
              type="submit" 
              variant="primary" 
              className="mt-2 sm:mt-4 w-full text-base sm:text-lg h-12 sm:h-16"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : (
                <>Send Message <Send className="ml-2 h-5 w-5 sm:h-6 sm:w-6" /></>
              )}
            </NeoButton>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[100] bg-neo-secondary border-4 border-black px-6 py-4 flex items-center gap-4 shadow-neo-md text-black"
          >
            <CheckCircle2 className="h-8 w-8 text-green-600 fill-white" />
            <div>
              <p className="font-black uppercase text-xl">Success!</p>
              <p className="font-bold">Message sent correctly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
