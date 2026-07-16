import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-800">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            FixNear
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            आपके शहर की सभी सेवाएं, एक जगह!
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            This Next.js site is now running locally and includes a dedicated privacy policy
            page so your website can present the essential legal information clearly.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/privacy"
            className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Read Privacy Policy
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100"
          >
            View Next.js Docs
          </a>
        </div>
      </div>
    </main>
  );
}
