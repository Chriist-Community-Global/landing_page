import { Metadata } from 'next';
import { Suspense } from 'react';
import PhotozenHero from './components/PhotozenHero';
import PhotozenInfo from './components/PhotozenInfo';
import PhotozenRegistration from './components/PhotozenRegistration';
import NewsletterSection from '@/components/NewsletterSection';
import EventMediaGallery from '@/components/EventMediaGallery';
import { getEventMedia } from '@/lib/event-media';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'The Big Church Conference Swansea 2026 | Christ Community',
    description: 'Register for The Big Church Conference Swansea 2026 — Saturday 28th November, 4pm-7pm at Waterfront Church. United in Mission: Different ways, one Purpose. View highlights from the 2025 conference.',
    keywords: 'big church conference, swansea, 2026, register, interdenominational, christian conference, south wales, church unity, gospel, united in mission',
};

export default async function PhotozenPage() {
  const mediaItems = await getEventMedia('BigChurch');

    return (
        <main>
            <PhotozenHero />
            <PhotozenInfo />
            <div id="registration-section" className="scroll-mt-20">
                <Suspense fallback={<div>Loading...</div>}>
                    <PhotozenRegistration />
                </Suspense>
            </div>
            <div id="conference-2025-highlights">
                <EventMediaGallery
                    title="2025 Conference Highlights"
                    subtitle="Photos and videos from worship, prayer, and fellowship at the inaugural Big Church Conference in November 2025."
                    items={mediaItems}
                />
            </div>
            <NewsletterSection config={{
                title: 'Stay Updated on Conference Details',
                subtitle: 'Receive updates and notifications about The Big Church Conference and other Christ Community events.',
                backgroundImage: '/worship-conference.jpeg'
            }} />
        </main>
    );
}
