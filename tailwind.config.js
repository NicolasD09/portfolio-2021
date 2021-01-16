module.exports = {
  purge: [
    "./public/index.html",
    "./dist/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#7B61FF",
        },
        orange: {
          DEFAULT: "#F8801B",
        },
        grey: {
          DEFAULT: "#f5f5f5",
        },
      },
      fontFamily: {
        regular: ["Sf Pro Regular", "Arial"],
        light: ["Sf Pro Light", "Arial"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
