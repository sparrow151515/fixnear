import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | FixNear",
  description: "Privacy policy and data handling details for FixNear.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-800">
      <div className="mx-auto flex max-w-3xl flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <Link href="/" className="text-sm font-medium text-blue-600 transition hover:underline">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-950">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-600">
          Last updated: July 16, 2026
        </p>

        <div className="mt-8 space-y-6 text-base leading-7 text-zinc-700">
          <section>
            <h2 className="text-xl font-semibold text-zinc-950">1. Information we collect</h2>
            <p className="mt-2">
              We may collect information you provide directly to us, such as your name,
              email address, and any message content you submit through our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-950">2. How we use your information</h2>
            <p className="mt-2">
              We use the information we collect to provide and improve our services, respond
              to inquiries, and maintain the security and reliability of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-950">3. Cookies and analytics</h2>
            <p className="mt-2">
              Our website may use cookies and similar tools to understand visitor activity,
              remember preferences, and improve performance. You can disable cookies in your
              browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-950">4. Sharing of information</h2>
            <p className="mt-2">
              We do not sell your personal information. We may share it with trusted service
              providers that help us operate the website, subject to appropriate
              confidentiality safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-950">5. Your choices</h2>
            <p className="mt-2">
              You may contact us at any time to request access to, correction of, or deletion
              of your personal information, where applicable by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-950">6. Contact us</h2>
            <p className="mt-2">
              If you have questions about this policy or how we handle your information, please
              contact us through the contact details published on this website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
