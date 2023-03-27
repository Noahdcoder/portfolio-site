/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blue: "#6FB7E9",
        instagram: " #E1306C",
        linkedin: "#0077B5",
        twitter: "#1DA1F2",
        github: "#211F1F",
        gray: "#808080",
        transparentGray: "rgba(128, 128, 128, 0.5)",
        veryTransparentGray: "rgba(128, 128, 128, 0.1)",
      },
      fontFamily: {
        Fasthand: ["Fasthand", "cursive"],
      },
    },
  },
  plugins: [],
};
