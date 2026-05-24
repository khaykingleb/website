import Link from "next/link";

/**
 * 404 page rendered for routes that don't resolve to a page.
 *
 * @returns The not-found page.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <main
        className={`
          mx-auto flex w-full max-w-[56rem] flex-1 flex-col justify-center px-6
          sm:px-10
          xl:px-16
        `}
      >
        <p
          className={`
            font-sans-display text-sm tracking-wide text-base-content/45
            uppercase
          `}
        >
          404
        </p>
        <h1
          className={`
            mt-2 font-serif-display text-4xl leading-none font-medium
            tracking-[-0.02em]
            sm:text-5xl
          `}
        >
          Page not found
        </h1>
        <div
          className={`
            mt-4 max-w-[28rem] space-y-2 font-sans-display text-[15px]
            leading-[1.55] text-base-content/70
          `}
        >
          <p>The link is broken, or the page has moved.</p>
          <p>
            <Link
              href="/"
              className={`
                underline decoration-base-content/30 decoration-1
                underline-offset-[3px] transition-colors
                hover:decoration-base-content/70
              `}
            >
              Head back home
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
