import "react-notion-x/src/styles.css";
import "prismjs/themes/prism.css";
import "katex/dist/katex.min.css";
import "@/app/styles/global.css";
import "@/app/styles/notion.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import React from "react";

import { cormorantGaramond } from "@/app/fonts";
import { Providers } from "@/app/providers";

const SITE_URL = "https://khaykingleb.com";
const SITE_NAME = "Gleb Khaykin";
const SITE_DESCRIPTION =
  "Platform engineer at Together AI in Amsterdam, working on distributed ML infrastructure. Writing about systems, GPUs, and the operational side of ML.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gleb Khaykin",
  "givenName": "Gleb",
  "familyName": "Khaykin",
  "url": SITE_URL,
  "image": `${SITE_URL}/avatar.webp`,
  "email": "khaykingleb@gmail.com",
  "jobTitle": "Senior Platform Engineer",
  "description":
    "Platform engineer at Together AI in Amsterdam, building distributed ML training and inference infrastructure — RL fine-tuning, multi-cluster GPU scheduling, and observability.",
  "worksFor": {
    "@type": "Organization",
    "name": "Together AI",
    "url": "https://www.together.ai",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressCountry": "NL",
    },
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Higher School of Economics",
    "url": "https://www.hse.ru/en/",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amsterdam",
    "addressCountry": "NL",
  },
  "knowsAbout": [
    "AI Infrastructure",
    "Machine Learning Operations",
    "Platform Engineering",
    "Site Reliability Engineering",
    "Distributed Systems",
    "Distributed Training",
    "Reinforcement Learning Infrastructure",
    "Kubernetes",
    "GPU Computing",
    "GPU Scheduling",
    "Multi-cluster Orchestration",
    "Observability",
    "Infrastructure as Code",
    "Terraform",
    "ArgoCD",
    "Karpenter",
    "NVIDIA Triton",
    "PyTorch",
    "Speech Recognition",
    "Speech Synthesis",
    "Quantitative Finance",
  ],
  "sameAs": [
    "https://github.com/khaykingleb",
    "https://linkedin.com/in/khaykingleb",
    "https://twitter.com/khaykingleb",
    "https://t.me/blog_khaykingleb",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": SITE_URL,
  "name": SITE_NAME,
  "description": SITE_DESCRIPTION,
  "inLanguage": "en",
  "author": {
    "@type": "Person",
    "name": "Gleb Khaykin",
    "url": SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3e8" },
    { media: "(prefers-color-scheme: dark)", color: "#13110f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Gleb Khaykin", url: SITE_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: "/avatar.webp", alt: SITE_NAME }],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@khaykingleb",
    site: "@khaykingleb",
    images: ["/avatar.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

/**
 * Root layout component.
 *
 * @param children - Child components to render within the layout.
 * @returns The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${cormorantGaramond.variable}
      `}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
