import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [daisyui],
  darkMode: ["selector", '[data-theme="dark"]'],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};

export default config;
