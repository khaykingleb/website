import { Metadata } from "next";

import { Avatar } from "@/app/about/components/avatar";
import { SocialMedia } from "@/app/about/components/social-media";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me",
  openGraph: {
    title: "About",
    description: "Learn more about me",
    type: "website",
    url: "https://khaykingleb.com/about",
    images: ["/avatar.webp"],
  },
};

/**
 * About page component.
 *
 * @returns The about page component.
 */
export default function AboutPage() {
  return (
    <div
      className={`
        mx-auto flex min-h-screen w-full max-w-[800px] flex-grow flex-col px-4
        sm:px-6
        lg:px-8
      `}
    >
      <div className="flex flex-grow flex-col">
        <Header headerName="About" />
        <main className="flex flex-grow flex-col">
          <div
            className={`
              flex flex-col
              md:flex-row md:items-start md:justify-between
            `}
          >
            <div
              className={`
                mx-auto mt-2
                md:order-last md:flex-shrink-0
              `}
            >
              <Avatar />
            </div>
            <div
              className={`
                flex flex-col
                md:mr-2 md:flex-1 md:items-start
              `}
            >
              <div className="mt-2 space-y-1 text-base text-pretty">
                <ul className="list-disc space-y-1 space-x-0 pl-4">
                  <li>
                    ML infrastructure and platform engineer specializing in
                    large-scale distributed systems for training and inference,
                    MLOps, and DevOps
                  </li>
                  <li>
                    Currently on the Model Shaping team at{" "}
                    <a
                      href="https://www.together.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-blue-500 transition-all
                        hover:underline hover:opacity-80
                      `}
                    >
                      Together AI
                    </a>
                    , building infrastructure and tooling for fine-tuning,
                    reinforcement learning, evaluation, quantization, and
                    distillation of open-source LLMs at scale
                  </li>
                  <li>
                    Studied{" "}
                    <a
                      href="https://cs.hse.ru/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-blue-500 transition-all
                        hover:underline hover:opacity-80
                      `}
                    >
                      Computer Science
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://economics.hse.ru/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-blue-500 transition-all
                        hover:underline hover:opacity-80
                      `}
                    >
                      Finance
                    </a>{" "}
                    at{" "}
                    <a
                      href="https://www.hse.ru/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-blue-500 transition-all
                        hover:underline hover:opacity-80
                      `}
                    >
                      HSE University
                    </a>
                    , combining technical depth with business perspective
                  </li>
                  <li>
                    Passed{" "}
                    <a
                      href="https://www.cfainstitute.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-blue-500 transition-all
                        hover:underline hover:opacity-80
                      `}
                    >
                      CFA Level 1
                    </a>{" "}
                    during undergrad; maintain interest in quantitative finance
                    and portfolio management
                  </li>
                </ul>
              </div>
              <h2
                className={`
                  mt-4 mb-2 text-xl font-semibold tracking-tight
                  sm:text-2xl
                `}
              >
                Links
              </h2>
              <div
                className={`
                  grid grid-cols-2 gap-2
                  md:gap-x-0 md:gap-y-2
                `}
              >
                <SocialMedia size={24} displayLabels={true} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
