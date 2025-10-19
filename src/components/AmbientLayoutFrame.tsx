import type { ReactNode } from 'react';

import BackgroundLayers from '@/components/BackgroundLayers';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

type BackgroundLayersProps = React.ComponentProps<typeof BackgroundLayers>;

type AmbientVariant = NonNullable<BackgroundLayersProps['variant']>;

interface AmbientLayoutFrameProps {
  variant: AmbientVariant;
  backgroundClassName?: string;
  overlayClassName?: string;
  wrapperClassName?: string;
  innerClassName?: string;
  contentClassName?: string;
  hero?: ReactNode;
  children: ReactNode;
}

const BASE_WRAPPER_CLASS = 'relative min-h-screen overflow-hidden bg-slate-950 text-white';
const BASE_BACKGROUND_CLASS = 'mix-blend-screen';
const BASE_INNER_CLASS = 'relative z-10 flex flex-col gap-12';
const BASE_CONTENT_CLASS = 'relative';

export default function AmbientLayoutFrame({
  variant,
  backgroundClassName,
  overlayClassName,
  wrapperClassName,
  innerClassName,
  contentClassName,
  hero,
  children,
}: AmbientLayoutFrameProps) {
  return (
    <div className={cx(BASE_WRAPPER_CLASS, wrapperClassName)} data-ambient-variant={variant}>
      <BackgroundLayers
        variant={variant}
        className={cx(BASE_BACKGROUND_CLASS, backgroundClassName)}
      />
      {overlayClassName ? (
        <div aria-hidden className={cx('pointer-events-none absolute inset-0', overlayClassName)} />
      ) : null}
      <div className={cx(BASE_INNER_CLASS, innerClassName)}>
        {hero}
        <div className={cx(BASE_CONTENT_CLASS, contentClassName)}>{children}</div>
      </div>
    </div>
  );
}
