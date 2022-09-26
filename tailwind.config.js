/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",   
      },
      fontFamily: {
        Kommissar: ["Kommissar X-Condensed bold"],
        Kommissar1: ["Kommissar X-Condensed Regular"],
        Bs1: ["Basement Grotesque"],
      },
      backgroundImage: {
        imagebg:
          "url(https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20812287%20%281%29.svg)",
      },
    },
  },
  plugins: [],
};
