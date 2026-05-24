"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Top-level error boundary, rendered when an unrecoverable error escapes the
 * app. Replaces the default Next.js error screen with editorial styling.
 *
 * @param error - The captured error.
 * @param reset - Resets the error boundary and re-renders the segment.
 * @returns The error page.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <main
            className={`
              mx-auto flex w-full max-w-[56rem] flex-1 flex-col justify-center
              px-6
              sm:px-10
              lg:px-16
            `}
          >
            <p
              className={`
                font-sans-display text-sm tracking-wide text-base-content/45
                uppercase
              `}
            >
              Error
            </p>
            <h1
              className={`
                mt-2 font-serif-display text-4xl leading-none font-medium
                tracking-[-0.02em]
                sm:text-5xl
              `}
            >
              Something broke.
            </h1>
            <p
              className={`
                mt-4 max-w-[28rem] font-sans-display text-[15px] leading-[1.55]
                text-base-content/70
              `}
            >
              An unexpected error occurred. Try{" "}
              <button
                type="button"
                onClick={reset}
                className={`
                  cursor-pointer underline decoration-base-content/30
                  decoration-1 underline-offset-[3px] transition-colors
                  hover:decoration-base-content/70
                `}
              >
                reloading
              </button>
              , or head back{" "}
              <Link
                href="/"
                className={`
                  underline decoration-base-content/30 decoration-1
                  underline-offset-[3px] transition-colors
                  hover:decoration-base-content/70
                `}
              >
                home
              </Link>
              .
            </p>
          </main>
        </div>
      </body>
    </html>
  );
}
