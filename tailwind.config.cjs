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
    }
  },

  plugins: [],
}
