/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
      },
      backgroundImage: {
        patternMobile: "url('/images/pattern-background-mobile.svg",
        patternDekstop: "url('/images/pattern-background-desktop.svg",
      },
    },
  },
  plugins: [],
};
