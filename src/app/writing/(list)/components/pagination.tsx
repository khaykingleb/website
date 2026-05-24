"use client";

import React from "react";

const NUM_VISIBLE = 5;

const buttonClasses = `
  inline-flex h-8 w-8 cursor-pointer items-center justify-center
  font-sans-display text-xs tabular-nums text-base-content/55
  transition-colors
  hover:text-base-content
  disabled:cursor-not-allowed disabled:text-base-content/20
  disabled:hover:text-base-content/20
  sm:text-sm
`;

const activeClasses = `
  text-base-content underline underline-offset-[6px] decoration-1
  decoration-base-content/40
`;

/**
 * Editorial pagination button.
 *
 * @param children - Button content.
 * @param onClick - Click handler.
 * @param disabled - Whether the button is disabled.
 * @param isActive - Whether the button represents the current page.
 * @param ariaLabel - Optional aria-label for icon-only buttons.
 * @returns The PageButton component.
 */
const PageButton = ({
  children,
  onClick,
  disabled,
  isActive = false,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isActive?: boolean;
  ariaLabel?: string;
}) => (
  <button
    type="button"
    className={`
      ${buttonClasses}
      ${isActive ? activeClasses : ""}
    `}
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </button>
);

/**
 * Pagination component for navigating through pages of content.
 *
 * @param currentPage - The current page number.
 * @param pagesInTotal - The total number of pages.
 * @param onPageChange - The function to call when the page changes.
 * @returns The Pagination component.
 */
export const Pagination = ({
  currentPage,
  pagesInTotal,
  onPageChange,
}: {
  currentPage: number;
  pagesInTotal: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange?: (page: number) => void;
}) => {
  if (pagesInTotal <= 1) return null;

  const startPage = Math.floor(currentPage / NUM_VISIBLE) * NUM_VISIBLE;
  const endPage = Math.min(startPage + NUM_VISIBLE, pagesInTotal);
  const pages = Array.from(
    { length: endPage - startPage },
    (_, i) => startPage + i,
  );

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1"
    >
      <PageButton
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 0}
        ariaLabel="Previous page"
      >
        ←
      </PageButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange?.(page)}
          isActive={page === currentPage}
        >
          {page + 1}
        </PageButton>
      ))}

      <PageButton
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === pagesInTotal - 1}
        ariaLabel="Next page"
      >
        →
      </PageButton>
    </nav>
  );
};
