import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "on-primary": "var(--on-primary)",
        background: "var(--background)",
        "on-background": "var(--on-background)",
        foreground: "var(--foreground)",
        "on-foreground": "var(--on-foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
