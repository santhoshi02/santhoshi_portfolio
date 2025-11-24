"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    gsap.from(sectionRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
      },
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 sm:py-28 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for opportunities as a Java Developer & Full
            Stack Developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/20 transition-all dark:hover:bg-card/80">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:santhoshiderangula22@gmail.com"
                  className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-all cursor-pointer group hover:scale-105"
                >
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/25 transition-all group-hover:rotate-6">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground/70">Email</p>
                    <p className="text-base font-medium">
                      santhoshiderangula22@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5 text-muted-foreground">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground/70">Phone</p>
                    <p className="text-base font-medium">+91 8639536954</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 text-muted-foreground">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground/70">Location</p>
                    <p className="text-base font-medium">
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-base font-semibold text-foreground mb-6">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/santhoshi-derangula-399b362b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary/10 rounded-xl hover:bg-primary/25 transition-all cursor-pointer group hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/santhoshi02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary/10 rounded-xl hover:bg-primary/25 transition-all cursor-pointer group hover:scale-110"
                  >
                    <Github className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* Contact Email Button Instead of Form */}
          <div className="bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-center items-center gap-6 hover:shadow-xl hover:shadow-primary/20 transition-all dark:hover:bg-card/80">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Send Me an Email
            </h3>

            <p className="text-base text-muted-foreground text-center max-w-md">
              Click the button below to contact me directly through email.
            </p>

            <a
              href="mailto:santhoshiderangula22@gmail.com"
              className="w-full sm:w-auto cursor-pointer group bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center"
            >
              Send Email
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-24 pt-10 border-t border-border/50 text-center">
        <p className="text-base text-muted-foreground">
          © 2025 Santhoshi Derangula. Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
