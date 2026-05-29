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
    images: ["/the-ancient-of-days.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Gleb Khaykin",
    description: ABOUT_DESCRIPTION,
    images: ["/the-ancient-of-days.jpg"],
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
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <div
        className={`
          mx-auto flex w-full max-w-[56rem] flex-1 flex-col px-6
          sm:px-10
          xl:px-16
        `}
      >
        <Header headerName="About" />
        <main
          className={`
            grid min-w-0 grid-cols-1 gap-3 pt-4
            lg:grid-cols-[240px_minmax(0,1fr)]
          `}
        >
          <aside
            className={`
              flex flex-col items-center gap-3
              lg:items-start
            `}
          >
            <Avatar />
            <div className="flex flex-col gap-3">
              <div>
                <p
                  className={`
                    flex items-center justify-center gap-x-0.5 text-sm
                    whitespace-nowrap text-base-content/75
                    lg:justify-start
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
                    lg:text-left
                  `}
                >
                  Amsterdam, The Netherlands
                </p>
              </div>

              <ul
                className={`
                  flex items-center justify-center gap-2 pb-2
                  text-base-content/40
                  lg:justify-start
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
            lang="en"
            className={`
              mx-auto w-full max-w-[32rem] min-w-0 space-y-3 text-[15px]
              leading-[1.55] break-words hyphens-auto text-base-content/85
              lg:mx-0 lg:max-w-none
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
              , where I&apos;m build&shy;ing infra&shy;structure and tooling for
              post-train&shy;ing of open-source LLMs at scale in areas like
              fine-tun&shy;ing, reinforce&shy;ment learning, eval&shy;uation,
              and quan&shy;tization.
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
              ), where I worked on speech syn&shy;thesis. At the second, I built
              an AI platform covering meeting trans&shy;cription and a
              vision-LLM parser for finance docu&shy;ments. The role was
              similar: platform, MLOps, DevOps, and whatever else was needed to
              ship.
            </p>
            <p>
              Earlier, I studied Com&shy;puter Science and Finance at the
              National Research Uni&shy;versity{" "}
              <a
                href="https://www.hse.ru/en/"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                &quot;Higher School of Economics&quot;
              </a>{" "}
              in Moscow. While there, I also spent two years TA&apos;ing
              Prob&shy;ability, Sta&shy;tistics, and Machine Learn&shy;ing
              courses for the stu&shy;dents, while picking up{" "}
              <a
                href="https://www.cfainstitute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                CFA Level I
              </a>{" "}
              certi&shy;fication along the way (I still keep an active interest
              in quan&shy;titative finance and port&shy;folio manage&shy;ment,
              to be frank).
            </p>
            <p>
              Here, I{" "}
              <Link href="/writing" className={proseLink}>
                write
              </Link>{" "}
              when I figure out some&shy;thing worth keeping or sharing for the
              broader audi&shy;ence to see. It&apos;s usually about systems,
              infra&shy;structure, and tech&shy;nical rabbit holes from my work.
              Though, it might not always be about that!
            </p>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
