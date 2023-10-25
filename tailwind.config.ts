import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dancingScript: ["var(--font-dancingScript)"],
      },
      colors: {
        "color-white": "#ffffff", // Define your custom color here
        "color-black": "#000", // Define your custom color here
        highlighter: "#ADFA1D",
        "color-gray": "#616161",
      },
      boxShadow: {
        "box-shadow":
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
