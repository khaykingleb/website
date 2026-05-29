import { Metadata } from "next";

import Posts from "@/app/writing/(list)/components/posts";
import { Footer } from "@/components/footer";
import { getPosts } from "@/utils/supabase";

const WRITING_DESCRIPTION =
  "Notes on distributed systems, ML platforms, AI infrastructure, and developer tooling.";

export const metadata: Metadata = {
  title: "Writing",
  description: WRITING_DESCRIPTION,
  alternates: {
    canonical: "https://khaykingleb.com/writing",
  },
  openGraph: {
    title: "Writing — Gleb Khaykin",
    description: WRITING_DESCRIPTION,
    type: "website",
    url: "https://khaykingleb.com/writing",
    images: ["/the-ancient-of-days.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing — Gleb Khaykin",
    description: WRITING_DESCRIPTION,
    images: ["/the-ancient-of-days.jpg"],
  },
};

/**
 * Blog page component.
 *
 * @returns The blog page component.
 */
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <div
        className={`
          mx-auto flex w-full max-w-[56rem] flex-1 flex-col px-6
          sm:px-10
          xl:px-16
        `}
      >
        <Posts posts={posts} />
      </div>
      <Footer />
    </div>
  );
}
