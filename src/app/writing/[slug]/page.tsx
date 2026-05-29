import type { Metadata } from "next";
import { Suspense } from "react";

import NotionPage from "@/app/writing/[slug]/components/notion-page";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getPostBySlug } from "@/utils/supabase";

/**
 * Generate metadata for the blog post.
 *
 * @param params - An object containing the slug of the blog post.
 * @returns A promise that resolves to the metadata of the blog post.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const publishedTime = new Date(post.created_at).toISOString();
  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const url = `https://khaykingleb.com/writing/${post.slug}`;
  const description = post.description ?? `Published on ${formattedDate}`;

  return {
    title: post.title,
    description,
    authors: [{ name: "Gleb Khaykin", url: "https://khaykingleb.com" }],
    keywords: Array.isArray(post.tags) ? post.tags : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      images: post.image_url ? [post.image_url] : ["/the-ancient-of-days.jpg"],
      publishedTime,
      authors: ["Gleb Khaykin"],
      tags: Array.isArray(post.tags) ? post.tags : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      creator: "@khaykingleb",
      site: "@khaykingleb",
      images: post.image_url ? [post.image_url] : ["/the-ancient-of-days.jpg"],
    },
    other: {
      "article:author": "Gleb Khaykin",
      "article:published_time": publishedTime,
      "article:tag": Array.isArray(post.tags) ? post.tags.join(", ") : "",
    },
  };
}

/**
 * Render the blog post page.
 *
 * @param slug - The slug of the blog post to render.
 * @returns The rendered blog post page.
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <div
        className={`
          mx-auto flex w-full max-w-[56rem] flex-1 flex-col px-6
          sm:px-10
          xl:px-16
        `}
      >
        <Header headerName={post.title} backHref="/writing" />
        <main className="flex flex-1 flex-col">
          <Suspense
            fallback={
              <div
                className={`
                  mt-2 -mb-2 flex-grow animate-pulse rounded-lg bg-base-200
                `}
              />
            }
          >
            <h2
              className={`
                mt-2 -mb-10 font-heading text-xl font-medium tracking-[-0.01em]
                sm:mt-4 sm:text-2xl
                md:text-3xl
              `}
            >
              Contents
            </h2>
            <NotionPage page_id={post.notion_page_id} />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}
