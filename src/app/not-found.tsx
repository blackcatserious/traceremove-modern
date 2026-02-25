import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <div className="mb-4 text-7xl italic text-[#ef5044]">φ</div>
      <h1 className="text-4xl font-semibold">404 — Page not found</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300">The page you were looking for does not exist.</p>
      <Link href="/" className="mt-6 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
        Return home
      </Link>
    </div>
  );
}
