/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        "panel": "#15161A",
        "panel-2": "#1C1D22",
        "panel-3": "#20222A",
        "border": "#2B2E36",
        "muted": "#9AA3B2",
        "accent": "#6C5DD3",
        "accent-2": "#8D6BFF"
      }
    },
  },
  plugins: [],
};
