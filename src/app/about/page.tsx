import { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImMail4 } from "react-icons/im";

import { Avatar } from "@/app/about/components/avatar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const ABOUT_DESCRIPTION =
  "Background, current work at Together AI, education, and ways to reach me.";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_DESCRIPTION,
  alternates: {
    canonical: "https://khaykingleb.com/about",
  },
  openGraph: {
    title: "About — Gleb Khaykin",
    description: ABOUT_DESCRIPTION,
    type: "profile",
    url: "https://khaykingleb.com/about",
    images: ["/avatar.webp"],
  },
  twitter: {
    card: "summary",
    title: "About — Gleb Khaykin",
    description: ABOUT_DESCRIPTION,
    images: ["/avatar.webp"],
  },
};

const proseLink = `
  underline underline-offset-[3px] decoration-base-content/30 decoration-1
  transition-colors
  visited:decoration-base-content/20
  hover:decoration-base-content/70
`;

const socials = [
  {
    href: "mailto:khaykingleb@gmail.com",
    label: "khaykingleb@gmail.com",
    Icon: ImMail4,
  },
  {
    href: "https://twitter.com/khaykingleb",
    label: "X",
    Icon: FaSquareXTwitter,
  },
  {
    href: "https://github.com/khaykingleb",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/khaykingleb",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://t.me/blog_khaykingleb",
    label: "Telegram",
    Icon: FaTelegram,
  },
];

/**
 * About page component.
 *
 * @returns The About page component.
 */
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div
        className={`
          mx-auto flex w-full max-w-[56rem] flex-1 flex-col px-6
          sm:px-10
          lg:px-16
        `}
      >
        <Header headerName="About" />
        <main
          className={`
            grid grid-cols-1 gap-4 pt-6
            md:grid-cols-[240px_minmax(0,1fr)] md:gap-4
          `}
        >
          <aside
            className={`
              flex flex-col items-center gap-3
              md:items-start
            `}
          >
            <Avatar />
            <div className="flex flex-col gap-3">
              <div className="font-sans-display">
                <p
                  className={`
                    flex items-center justify-center gap-x-1.5 text-sm
                    whitespace-nowrap text-base-content/75
                    md:justify-start
                  `}
                >
                  <span>Infrastructure</span>
                  <span
                    aria-hidden="true"
                    className="translate-y-px text-base-content/25"
                  >
                    /
                  </span>
                  <span>Platform</span>
                  <span
                    aria-hidden="true"
                    className="translate-y-px text-base-content/25"
                  >
                    /
                  </span>
                  <span>Research</span>
                </p>
                <p
                  className={`
                    mt-1 text-center text-sm text-base-content/55
                    md:text-left
                  `}
                >
                  Amsterdam, Netherlands
                </p>
              </div>

              <ul
                className={`
                  flex items-center justify-center gap-2 text-base-content/40
                  md:justify-start
                `}
              >
                {socials.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={label}
                      title={label}
                      className={`
                        block transition-colors
                        hover:text-base-content
                      `}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article
            className={`
              max-w-[32rem] space-y-3 font-sans-display text-[15px]
              leading-[1.55] text-pretty hyphens-auto text-base-content/85
            `}
          >
            <p>
              Hey, I&apos;m Gleb, a platform engineer at{" "}
              <a
                href="https://www.together.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                Together AI
              </a>
              , where I&apos;m building infrastructure and tooling for
              post-training of open-source LLMs at scale in areas like
              fine-tuning, reinforcement learning, evaluation, and quantization.
            </p>
            <p>
              Before this, I worked remotely for two SF-based AI startups. The
              first was{" "}
              <a
                href="https://mlventures.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                Myna Labs
              </a>{" "}
              (founder created{" "}
              <a
                href="https://en.wikipedia.org/wiki/Looksery"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                Snap Lenses
              </a>{" "}
              and{" "}
              <a
                href="https://itmunch.com/snapchat-silently-obtained-ai-factory-the-company-behind-its-current-cameos-feature-for-166m/"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                Cameos
              </a>
              ), where I was working on speech synthesis. While at the second, I
              built an AI platform where work spanned from meeting transcription
              to a vision-LLM document parser for finance. The roles were pretty
              much the same, though: platform, MLOps/DevOps, and whatever else
              was needed shipping.
            </p>
            <p>
              Earlier, I studied Computer Science and Finance at the National
              Research University{" "}
              <a
                href="https://www.hse.ru/en/"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                &quot;Higher School of Economics&quot;
              </a>{" "}
              in Moscow. While there, I also spent two years TA&apos;ing
              Probability, Statistics, and Machine Learning courses for the
              students, while picking up{" "}
              <a
                href="https://www.cfainstitute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                CFA Level I
              </a>{" "}
              certification along the way (I still keep an active interest in
              quantitative finance and portfolio management, to be frank).
            </p>
            <p>
              Here, I{" "}
              <Link href="/writing" className={proseLink}>
                write
              </Link>{" "}
              when I figure out something worth keeping or sharing for the
              broader audience to see. It&apos;s usually about systems,
              infrastructure, and technical rabbit holes from my work. Though,
              it might not always be about that!
            </p>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
