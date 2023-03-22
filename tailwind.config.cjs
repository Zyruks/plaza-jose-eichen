/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "neutral-100": "hsl(60, 100%, 100%)",
      "neutral-200": "hsl(225, 14%, 95%)",
      "neutral-300": "hsl(0, 0%, 55%)",
      "neutral-800": "hsl(0, 0%, 16%)",
      "neutral-900": "hsl(0, 0%, 5%)",
      "accent-400": "hsl(340, 68%, 53%)",
      "primary-400": "hsl(25, 100%, 62%)",
    },
    fontFamily: {
      sans: ["Outfit", "serif"],
      serif: ["Lora", "serif"],
    },
    fontSize: {
      "sm": ".875rem",
      "md": "1rem",
      "lg": "1.25rem",
      "xl": "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "6rem",
    },
    extend: {
      transitionProperty: {
        "width": "width",
        "max-h": "max-height",
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in-out forwards",
        fadeOut: "fadeOut 500ms ease-in-out forwards",
        "bounce-in": "bounce-in 300ms ease-in-out forwards",
        "bounce-out": "bounce-out 300ms ease-in-out forwards",
      },
      keyframes: {
        "fadeIn": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fadeOut": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        "bounce-in": {
          "0%": { height: "20rem" },
          "80%": { height: "14rem" },
          "100%": { height: "15rem" },
        },
        "bounce-out": {
          "0%": { height: "15rem "},
          "80%": { height: "22rem" },
          "100%": { height: "20rem" },
        },
      },
      boxShadow: {
        original: "0px 0.5px 1px rgba(0, 0, 0, 0.5);",
      },
    },
  },

  plugins: [],
}
