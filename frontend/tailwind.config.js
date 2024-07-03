/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'white-medium': '0 0 15px rgba(255, 255, 255, 0.7)',
      }
    },
  },
  plugins: [require("daisyui")],
};
