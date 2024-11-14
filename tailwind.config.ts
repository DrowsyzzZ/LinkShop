import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      PC: { min: "1200px" },
      Tablet: { min: "768px", max: "1199px" },
      Mobile: { min: "375px", max: "767px" },
    },
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        background: "#ffffff",
        foreground: "#14151a",
        "gray-100": "#a2a2ac",
        "gray-200": "#888790",
        "white-100": "#fafafb",
        red: "#fb545b",
        blue: "#3e45ec",
      },
      fontSize: {
        "32pt": ["32px", { lineHeight: "38.19px" }],
        "20pt": ["20px", { lineHeight: "23.87px" }],
        "18pt": ["18px", { lineHeight: "21.48px" }],
        "17pt": ["17px", { lineHeight: "20.29px" }],
        "16pt": ["16px", { lineHeight: "19.09px" }],
        "15pt": ["15px", { lineHeight: "17.9px" }],
        "14pt": ["14px", { lineHeight: "16.71px" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
