import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

import Callout from '@/components/mdx/Callout';

export const mdxComponents: MDXComponents = {
  img: ({ src = '', alt = '', ...props }) => (
    <span className="my-6 block">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full rounded-xl border border-slate-200"
        unoptimized
        {...props}
      />
    </span>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4 text-sm text-slate-100">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-[#0f3460] pl-4 text-slate-700">{children}</blockquote>
  ),
  Callout,
};
