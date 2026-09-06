'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export default function PhotozenRegistration() {
  return (
    <section id="registration-form" className="section bg-muted/20 scroll-mt-20">
      <div className="section-inner">
        <div className="text-center stack-lg mb-12">
          <div className="stack">
            <p className="eyebrow">Registration</p>
            <h2 className="section-title">Register for The Big Church Conference Swansea 2026</h2>
          </div>
          <p className="section-lead max-w-3xl mx-auto">
            Join us on Saturday 28th November 2026, 4pm-7pm at Waterfront Church, Langdon Road Swansea. SA1 8QY.
            Complete the form below to register your attendance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border border-border/40 rounded-[var(--radius)] shadow-sm overflow-hidden">
            <CardContent className="p-0">
              {/* Google Form Registration */}
              <div className="bg-muted/30 p-4 sm:p-8 lg:p-12">
                <div className="w-full flex justify-center">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe4IPfivT22wa9g4yahoE-rwr_mDNrdSVEzV8KbPp6wkzQj0A/viewform?embedded=true"
                    title="Big Church Conference Swansea 2026 registration form"
                    width="640"
                    height="1151"
                    className="w-full max-w-[640px] min-h-[1151px] border-0"
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-background p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Need Help or Have Questions?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-[var(--radius)]">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:info@christcommunityglobal.org" 
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        info@christcommunityglobal.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-[var(--radius)]">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a 
                        href="tel:07428784005" 
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        07428 784005
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Or visit{' '}
                    <a 
                      href="https://christcommunityglobal.org" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground underline"
                    >
                      christcommunityglobal.org
                    </a>
                    {' '}to find out more or book a visit to the office.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
