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
  contentClassName?: string;
  children: ReactNode;
}

const BASE_WRAPPER_CLASS = 'relative min-h-screen overflow-hidden bg-slate-950 text-white';
const BASE_BACKGROUND_CLASS = 'mix-blend-screen';

export default function AmbientLayoutFrame({
  variant,
  backgroundClassName,
  overlayClassName,
  wrapperClassName,
  contentClassName,
  children,
}: AmbientLayoutFrameProps) {
  return (
    <div className={cx(BASE_WRAPPER_CLASS, wrapperClassName)}>
      <BackgroundLayers
        variant={variant}
        className={cx(BASE_BACKGROUND_CLASS, backgroundClassName)}
      />
      {overlayClassName ? (
        <div aria-hidden className={cx('pointer-events-none absolute inset-0', overlayClassName)} />
      ) : null}
      <div className={cx('relative z-10', contentClassName)}>{children}</div>
    </div>
  );
}
