/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: "1rem", // Default padding for all screen sizes
          sm: "2rem",      // Padding for small screens
          lg: "4rem",      // Padding for large screens
          xl: "6rem",      // Padding for extra-large screens
          "2xl": "8rem",   // Padding for 2x extra-large screens
        },
      },
    },
  },
  plugins: [],
};
