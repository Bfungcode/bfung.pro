/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        4: "4%",
        5: "5%",
        6: "6%",
        10: "10%",
        13: "13%",
        12: "12%",
        15: "15%",
        19: "19%",
        20: "20%",
        24: "24%",
        25: "25%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        65: "65%",
        70: "70%",
        75: "75%",
        80: "80%",
        87: "87%",
        90: "90%",
      },
      height: {
        0.5: "1px",
        7: "7%",
        5: "5%",
        10: "10%",
        12: "12%",
        15: "15%",
        20: "20%",
        24: "24%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        65: "65%",
        70: "70%",
        75: "75%",
        76: "76%",
        80: "80%",
        85: "85%",
        90: "90%",
      },
      fontFamily: {
        primary: ["Lato", "sans-serif"],
        secondary: ["Playfair Display", "serif"],
        third: ["Shrikhand", "serif"],
      },
    },
  },
  plugins: [],
};
