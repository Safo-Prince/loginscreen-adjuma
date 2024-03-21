/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        my: "url('./src/assets/sign-in.png')",
      },
    },
  },
  plugins: [],
};
