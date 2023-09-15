import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: 'url("/images/image-login.png")',
      },
      gridTemplateColumns: {
        "address-number": "1fr 100px",
        "address-uf": "1fr 1fr 100px",
        "section-menu": "250px 1fr",
      },
      animation: {
        "menu-animation": "shadow 0.3s ease 0s 1 normal forwards",
      },
      scale: {
        '101': '1.015',
      },
      keyframes: {
        shadow: {
          "0%": {
            "box-shadow": "0 0 0 0 rgba(0, 0, 0, 0)",
            transform: "scale(1)",
          },
          "30%": {
            "box-shadow": "0 0 20px 0px rgba(0, 0, 0, 0.35)",
            transform: "scale(1.01)",
          },
          "100%": {
            "box-shadow": "0 0 20px 0px rgba(0, 0, 0, 0.35)",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
