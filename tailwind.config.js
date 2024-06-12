/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      tint_blue: "#1C1E53",
      navbar_text: "#BBBBCB",
      white: "#FFFFFF",
      navbar_button: "#F4F6FC33",
      header_button: "#FCD980",
      black: "#1B1C2B",
      our_project: "#282938",
      our_hover: "#12155cad",
      features: "#F4F6FC",
      backg: "#F4F5F5",
    },
  },
  plugins: [],
};
