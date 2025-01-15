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
        'light-coral': '#662249',
        'reddish': '#B4182d',
        'salmon-pink': '#f6bcba',
        'lavender-blush': '#e3aadd',
        'light-purple': '#44174E',
        'light-blue': '#c3c7f4',
      },
    },
  },
  plugins: [],
}