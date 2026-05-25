"use client";

import Link from "next/link";

import { Tables } from "@/integrations/supabase/database.types";

/**
 * Format a date as "27 Oct 2025" — editorial, day-first.
 *
 * @param iso - ISO timestamp string.
 * @returns The formatted date string.
 */
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

/**
 * Editorial list of blog posts.
 *
 * @param posts - Array of post items to display.
 * @returns The Carousel component.
 */
export const Carousel = ({ posts }: { posts: Tables<"posts">[] }) => {
  if (posts.length === 0) {
    return (
      <div className="flex flex-grow items-center justify-center py-24">
        <p className="text-base text-base-content/55">No posts found.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/writing/${post.slug}`}
            className={`
              group flex items-start justify-between gap-4 py-4
              sm:gap-8 sm:py-5
            `}
          >
            <h2
              className={`
                min-w-0 font-heading text-xl leading-tight font-medium
                tracking-[-0.01em] text-base-content decoration-base-content/30
                decoration-1 underline-offset-[6px] transition-[text-decoration]
                duration-200
                group-hover:underline
                sm:text-2xl
              `}
            >
              {post.title}
            </h2>
            <div
              className={`
                flex shrink-0 flex-col gap-0.5 text-right text-xs
                text-base-content/45
                sm:gap-1 sm:text-sm
              `}
            >
              <time className="tabular-nums">
                {formatDate(post.created_at)}
              </time>
              {post.tags.length > 0 && (
                <span className="flex flex-wrap justify-end gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
