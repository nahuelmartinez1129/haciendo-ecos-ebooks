import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#10294A",
          teal: "#1BA091",
          mint: "#E8F7F3",
          yellow: "#F5E57A",
          coral: "#F45B7A",
          cream: "#FFF9F1",
          lavender: "#F2F0FF"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 41, 74, 0.10)",
        card: "0 10px 35px rgba(16, 41, 74, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
