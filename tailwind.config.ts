import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "500px": "500px",
      },
      backgroundImage: {
        login: 'url("/images/image-login.png")',
      },
      gridTemplateColumns: {
        "address-number": "1fr 100px",
        "address-uf": "1fr 1fr 100px",
        "section-menu": "250px 1fr",
      },
      gridTemplateRows :{
        "contract": "min-content 1fr min-content",
      },
      animation: {
        "slow-rotate": "spin 120s linear infinite;",
        "menu-animation": "shadow 0.3s ease 0s 1 normal forwards",
        "fade-in": "fade-in 0.8s 0s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-2": "fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-4": "fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-6": "fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-12": "fade-in 0.6s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        "fade-in-24": "fade-in 0.6s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0)",
      },
      scale: {
        '94': '0.94',
        '99': '0.99',
        '101': '1.015',
        '200': '2',
      },
      brightness: {
        'full': '10'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            transform: 'scale(0.94)',
            opacity: '0',
            filter: 'blur(4px)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
            filter: 'blur(0)',
          }
        },
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
