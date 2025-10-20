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
      hero={<ContactHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}
