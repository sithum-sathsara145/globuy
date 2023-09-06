/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          100: "#e2e0e0",
          200: "#d9d9d9",
        },
        blue: {
          100: "#0029ff",
          200: "#001aff",
        },
        black: "#000",
        red: {
          100: "#ff0000",
          200: "#ee0000",
        },
        mediumslateblue: {
          100: "#0351e7",
          200: "#004cdf",
        },
        dodgerblue: "#0094ff",
        slateblue: "#0a40a9",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "24xl": "43px",
        "16xl": "35px",
        "35xl": "54px",
        mini: "15px",
        "87xl": "106px",
        "48xl": "67px",
        "4xl": "23px",
        "14xl": "33px",
        "3xl": "22px",
        xl: "20px",
      },
    },
    fontSize: {
      "21xl": "40px",
      mini: "15px",
      "4xl": "23px",
      xs: "12px",
      xxs : "10px",
      "17xl": "36px",
      "9xl": "28px",
      xl: "20px",
      "5xl": "24px",
      "13xl": "32px",
      "29xl": "48px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      smd: {
        max: "700px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


