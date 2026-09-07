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
        ink: "#0F2942",
        teal: "#0D9488",
        emerald: "#059669",
        amber: "#F59E0B",
        mist: "#F8FAFC",
        slatefill: "#F1F5F9",
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 41, 66, 0.08)",
        nav: "0 8px 24px rgba(15, 41, 66, 0.07)",
      },
      borderRadius: {
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
