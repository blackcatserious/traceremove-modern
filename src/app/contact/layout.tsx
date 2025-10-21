import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ContactHero from '@/app/contact/ContactHero';
import { CONTACT_BACKGROUND_CLASS, CONTACT_OVERLAY_CLASS } from '@/app/contact/ambientConfig';

export const metadata: Metadata = {
  title: 'Contact — Traceremove Research',
  description: 'Contact Traceremove Research for collaboration, mentorship, or research partnerships.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="contact"
      backgroundClassName={CONTACT_BACKGROUND_CLASS}
      overlayClassName={CONTACT_OVERLAY_CLASS}
      innerClassName="mx-auto w-full max-w-6xl gap-24"
      contentClassName="flex flex-col gap-24 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8"
      hero={<ContactHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}
