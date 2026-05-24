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
      flex items-end justify-between gap-6 border-b border-base-content/10 pt-8
      pb-5
      sm:pt-10
    `}
  >
    <h1
      className={`
        flex items-baseline gap-3 font-serif-display text-3xl leading-none
        font-medium tracking-[-0.02em]
        sm:text-4xl
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
