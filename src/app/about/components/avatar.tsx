"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Profile avatar.
 *
 * @returns The Avatar component.
 */
export const Avatar = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`
        relative h-40 w-40 overflow-hidden rounded-full
        sm:h-54 sm:w-54
        ${isLoading ? "animate-pulse bg-base-300" : ""}
      `}
    >
      <Image
        src="/avatar.webp"
        alt="Gleb Khaykin"
        fill
        sizes="(min-width: 640px) 216px, 160px"
        className={`
          rounded-full object-cover
          ${
            isLoading
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-300"
          }
        `}
        onLoad={(e) => {
          if (e.currentTarget.complete) {
            setIsLoading(false);
          }
        }}
      />
    </div>
  );
};
