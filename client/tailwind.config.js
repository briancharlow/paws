/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-lavender': '#f4e7fb',
        'light-coral': '#f2dddc',
        'salmon-pink': '#f6bcba',
        'lavender-blush': '#e3aadd',
        'light-purple': '#cba8e9',
        'light-blue': '#c3c7f4',
      },
    },
  },
  plugins: [],
}