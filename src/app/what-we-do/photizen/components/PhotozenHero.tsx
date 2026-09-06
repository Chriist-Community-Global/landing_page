'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

const defaultConfig = {
  title: "The Big Church Conference Swansea 2026",
  subtitle: "United in Mission: Different ways, one Purpose",
};

export default function PhotozenHero() {
  const { title, subtitle } = defaultConfig;

  return (
    <section className="section bg-muted/20">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="stack-lg text-center lg:text-left">
            <Badge className="bg-background/80 text-foreground border border-border/40 w-fit">Upcoming Event - November 2026</Badge>
            <div className="stack">
              <h1>{title}</h1>
              <p className="section-lead">{subtitle}</p>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Saturday 28th November 2026</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Clock className="w-5 h-5 text-primary" />
                <span>4:00 PM - 7:00 PM</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Waterfront Church, Langdon Road Swansea. SA1 8QY</span>
              </div>
            </div>
            <a
              href="#registration-form"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-lg font-semibold rounded-[var(--radius)] w-fit"
            >
              Register Now
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-[var(--radius)] overflow-hidden border border-border/40">
              <Image
                src="/Church-Conference.jpg"
                alt="The Big Church Conference Swansea"
                width={600}
                height={700}
                className="object-cover w-full h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
