import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  HiCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";

import { Tables } from "@/integrations/supabase/database.types";

/**
 * TagSearch component for filtering posts by tags.
 *
 * @param posts - The list of posts to filter.
 * @param setDisplayedPosts - The function to update the displayed posts.
 * @returns The rendered TagSearch component.
 */
export const TagSearch = ({
  posts,
  setDisplayedPosts,
}: {
  posts: Tables<"posts">[];
  // eslint-disable-next-line no-unused-vars
  setDisplayedPosts: (filteredPosts: Tables<"posts">[]) => void;
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Get unique tags from all posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagSet.add(tag.toLowerCase()));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter tags based on search query
  const filteredTags = useMemo(() => {
    return allTags.filter((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allTags, searchQuery]);

  // Filter posts based on selected tags
  useEffect(() => {
    const filteredPosts =
      selectedTags.length === 0
        ? posts
        : posts.filter((post) =>
            selectedTags.every((selectedTag) =>
              post.tags
                .map((tag) => tag.toLowerCase())
                .includes(selectedTag.toLowerCase()),
            ),
          );
    setDisplayedPosts(filteredPosts);
  }, [posts, selectedTags, setDisplayedPosts]);

  // Handle click outside to close dropdown
  useEffect(() => {
    /**
     * Handle click outside to close the search dropdown.
     *
     * @param event - The mouse event.
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle tag selection logic
  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }, []);

  return (
    <div ref={searchRef} className="relative z-50">
      {searchOpen ? (
        <div className="flex flex-col">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tags..."
              className={`
                input h-10 w-56 rounded-lg border-base-300 pr-8
                focus:border-base-300 focus:shadow-none focus:outline-none
                sm:w-64
              `}
              spellCheck="false"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className={`
                absolute right-2 cursor-pointer transition-all
                md:hover:scale-105 md:hover:text-base-content
              `}
              aria-label="Clear search"
            >
              <HiOutlineXMark />
            </button>
          </div>
          {filteredTags.length > 0 && (
            <ul
              role="listbox"
              className={`
                absolute top-full right-0 left-0 mt-1 max-h-52 overflow-y-auto
                rounded-lg border border-base-300 bg-base-100 shadow-lg
                focus-within:outline-none
              `}
              onKeyDown={(e) => {
                const current = document.activeElement;
                if (!current?.parentElement) return;

                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  const currentLi = current.closest("li");
                  const list = currentLi?.parentElement;
                  const nextLi =
                    currentLi?.nextElementSibling ?? list?.firstElementChild;
                  const nextButton = nextLi?.querySelector("button");
                  if (nextButton instanceof HTMLElement) {
                    nextButton.focus();
                    nextButton.scrollIntoView({ block: "nearest" });
                  }
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  const currentLi = current.closest("li");
                  const list = currentLi?.parentElement;
                  const prevLi =
                    currentLi?.previousElementSibling ?? list?.lastElementChild;
                  const prevButton = prevLi?.querySelector("button");
                  if (prevButton instanceof HTMLElement) {
                    prevButton.focus();
                    prevButton.scrollIntoView({ block: "nearest" });
                  }
                }
              }}
            >
              {filteredTags.map((tag) => (
                <li key={tag}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selectedTags.includes(tag)}
                    onClick={() => toggleTag(tag)}
                    className={`
                      flex w-full cursor-pointer items-center px-4 py-2.5
                      text-left
                      hover:bg-base-200
                      focus:outline-none
                      focus-visible:bg-base-200
                    `}
                  >
                    <span
                      className={`
                        mr-2 flex h-5 w-5 items-center justify-center
                        rounded-full border transition-colors
                        md:hover:border-base-content
                        ${
                          selectedTags.includes(tag)
                            ? "border-base-content bg-base-content"
                            : "border-base-content/30"
                        }
                      `}
                    >
                      {selectedTags.includes(tag) && (
                        <HiCheck className="text-xs text-base-100" />
                      )}
                    </span>
                    <span className="text-sm text-base-content">{tag}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <button
          onClick={() => setSearchOpen(true)}
          className={`
            flex cursor-pointer text-lg transition-all
            sm:text-xl
            md:hover:scale-105
          `}
          aria-label="Search tags"
        >
          <HiOutlineMagnifyingGlass />
        </button>
      )}
    </div>
  );
};
