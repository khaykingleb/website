import Link from "next/link";
import { Fragment } from "react";

import { Footer } from "@/components/footer";
import { GradientOrb } from "@/components/gradient-orb";

const links = [
  {
    href: "/writing",
    label: "Writing",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/Gleb_Khaykin.pdf",
    label: "CV",
    target: "_blank",
  },
];

/**
 * Home page component.
 *
 * @returns The Home page component.
 */
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -top-32 -right-48
          lg:top-1/2 lg:right-8 lg:-translate-y-1/2
          2xl:right-24
        `}
      >
        <GradientOrb />
      </div>

      <main
        className={`
          relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col
          justify-center px-6 py-16
          sm:px-10 sm:py-20
          lg:px-16 lg:py-24
        `}
      >
        <section
          className={`
            max-w-[44rem] space-y-2
            sm:space-y-3
          `}
        >
          <h1
            className={`
              -ml-[0.05em] font-heading text-5xl leading-[0.85] font-medium
              tracking-[-0.02em] text-balance
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            `}
          >
            Gleb Khaykin
          </h1>

          <nav
            aria-label="Primary"
            className={`
              flex flex-wrap items-center gap-x-2 gap-y-1.5 text-base
              text-base-content/70
              sm:gap-x-3 sm:text-lg
            `}
          >
            {links.map((link, index) => (
              <Fragment key={link.href}>
                {index > 0 && (
                  <span aria-hidden="true" className="text-base-content/25">
                    /
                  </span>
                )}
                <Link
                  href={link.href}
                  target={link.target}
                  className={`
                    underline-offset-4 transition-colors
                    hover:text-base-content hover:underline
                  `}
                >
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </nav>
        </section>
      </main>
      <Footer />
    </div>
  );
}
