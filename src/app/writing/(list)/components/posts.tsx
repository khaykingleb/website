"use client";

import { useCallback, useState } from "react";

import { Carousel } from "@/app/writing/(list)/components/carousel";
import { Pagination } from "@/app/writing/(list)/components/pagination";
import { TagSearch } from "@/app/writing/(list)/components/tag-search";
import { Header } from "@/components/header";
import { Tables } from "@/integrations/supabase/database.types";

const POSTS_PER_PAGE = 8;

/**
 * Component to display blog posts with pagination and search functionality.
 *
 * @param posts - Array of post items to display.
 * @returns The rendered component.
 */
export default function Posts({ posts }: { posts: Tables<"posts">[] }) {
  const [displayedPosts, setDisplayedPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(0);

  const pagesInTotal = Math.ceil(displayedPosts.length / POSTS_PER_PAGE);
  const updateCurrentPage = useCallback(
    (pageIndex: number) => {
      if (pageIndex >= 0 && pageIndex < pagesInTotal) {
        setCurrentPage(pageIndex);
      }
    },
    [pagesInTotal],
  );
  const visiblePosts = displayedPosts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE,
  );

  return (
    <div className="flex flex-1 flex-col">
      <Header headerName="Writing">
        <TagSearch posts={posts} setDisplayedPosts={setDisplayedPosts} />
      </Header>
      <Carousel posts={visiblePosts} />
      {pagesInTotal > 1 && (
        <div className="mt-auto pt-12">
          <Pagination
            currentPage={currentPage}
            pagesInTotal={pagesInTotal}
            onPageChange={updateCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
