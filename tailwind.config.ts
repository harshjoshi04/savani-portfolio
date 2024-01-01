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
        mainFirst: "#F5BF02",
        mainSecd: "#151515",
        mainThird: "#F5F5F5",
      },
      fontFamily: {
        title: ["Rosaline", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
