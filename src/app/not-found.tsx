import Link from "next/link";

export default function NotFound() {
  return (
    <main className="theme-travel flex min-h-[70vh] items-center pt-14">
      <div className="container-wide section-a">
        <p className="font-mono text-sm text-gold">404</p>
        <h1 className="subtitle mt-4 mb-4">Page not found</h1>
        <p className="copy measure mb-8">The URL may be wrong or the page was moved.</p>
        <Link href="/" className="link-underline text-sm">Home</Link>
      </div>
    </main>
  );
}
