import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center flex-1 px-4 py-20">
      <div className="w-full max-w-3xl text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
          My Docs
        </h1>

        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          A documentation site built with Fumadocs and Next.js, deployed to
          GitHub Pages.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/docs"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            Get Started
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
