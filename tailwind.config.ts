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
        "gradient-card":
          "linear-gradient(0deg, rgba(0,0,0,1) 50%, rgba(255,186,10,0) 100%);",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dancingScript: ["var(--font-dancingScript)"],
      },
      colors: {
        "color-white": "#ffffff", // Define your custom color here
        "color-black": "#000", // Define your custom color here
        "highlighter": "#ADFA1D",
        "color-gray": "#616161",
     
      },
      boxShadow: {
        "box-shadow":
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        "anchor-box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
      },
      fontSize: {
        sm: "15px",
        md: "20px",
        lg: "25px",
        xl: "30px",
        anchorHeading: "80px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
