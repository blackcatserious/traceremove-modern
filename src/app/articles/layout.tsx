import type { ReactNode } from 'react';
import AmbientLayoutFrame from '@/components/AmbientLayoutFrame';
import ArticlesHero from '@/app/articles/ArticlesHero';

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  return (
    <AmbientLayoutFrame
      variant="articles"
      backgroundClassName="opacity-70"
      overlayClassName="bg-[radial-gradient(circle_at_20%_18%,rgba(251,146,60,0.18),transparent_60%),radial-gradient(circle_at_82%_14%,rgba(244,63,94,0.2),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.97)_0%,rgba(30,41,59,0.92)_52%,rgba(15,23,42,0.94)_100%)]"
      hero={<ArticlesHero />}
    >
      {children}
    </AmbientLayoutFrame>
  );
}
