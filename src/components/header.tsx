import Link from "next/link";
import { ReactNode } from "react";

interface HeaderProps {
  headerName: string;
  children?: ReactNode;
  backHref?: string;
}

/**
 * Page header with a back arrow and the page title.
 *
 * @param headerName - The page title to display.
 * @param children - Optional right-aligned content next to the page title.
 * @param backHref - Where the back arrow links to. Defaults to home.
 * @returns The Header component.
 */
export const Header = ({
  headerName,
  children,
  backHref = "/",
}: HeaderProps) => (
  <header
    className={`
      flex items-end justify-between gap-6 border-b border-base-content/10 pt-4
      pb-5
      sm:pt-6
    `}
  >
    <h1
      className={`
        flex items-baseline gap-3 font-heading text-[clamp(1.75rem,5vw,2.25rem)]
        leading-none font-medium tracking-[-0.02em]
      `}
    >
      <Link
        href={backHref}
        aria-label="Back"
        className={`
          transition-colors
          hover:text-base-content/60
        `}
      >
        &lt;
      </Link>
      <span>{headerName}</span>
    </h1>
    {children}
  </header>
);
