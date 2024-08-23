/** @type {import('tailwindcss').Config} */

const px0_100 = Object.fromEntries(Array.from({ length: 101 }, (_, i) => [i, `${i}px`]));
const px0_500 = Object.fromEntries(Array.from({ length: 501 }, (_, i) => [i, `${i}px`]));
const px0_1000 = Object.fromEntries(Array.from({ length: 1001 }, (_, i) => [i, `${i}px`]));

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { sm: "375px", md: "744px", lg: "1920px" },
    extend: {
      borderRadius: px0_100,
      borderWidth: px0_100,
      lineHeight: px0_100,
      spacing: px0_500,
      width: px0_1000,
      height: px0_1000,
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      fontSize: {
        "landing-h1": [
          "36px",
          {
            fontWeight: "600",
            lineHeight: "138.889%",
          },
        ],
        "landing-h2": [
          "24px",
          {
            fontWeight: "600",
            lineHeight: "141.667%",
          },
        ],
        "3xl-32px-bold": [
          "32px",
          {
            fontWeight: "700",
            lineHeight: "143.75%",
          },
        ],
        "3xl-32px-semibold": [
          "32px",
          {
            fontWeight: "600",
            lineHeight: "143.75%",
          },
        ],
        "2xl-24px-bold": [
          "24px",
          {
            fontWeight: "700",
            lineHeight: "133.333%",
          },
        ],
        "2xl-24px-semibold": [
          "24px",
          {
            fontWeight: "600",
            lineHeight: "133.333%",
          },
        ],
        "2xl-24px-medium": [
          "24px",
          {
            fontWeight: "500",
            lineHeight: "133.333%",
          },
        ],
        "2xl-24px-regular": [
          "24px",
          {
            fontWeight: "400",
            lineHeight: "133.333%",
          },
        ],
        "xl-20px-bold": [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "160%",
          },
        ],
        "xl-20px-semibold": [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "160%",
          },
        ],
        "xl-20px-medium": [
          "20px",
          {
            fontWeight: "500",
            lineHeight: "160%",
          },
        ],
        "xl-20px-regular": [
          "20px",
          {
            fontWeight: "400",
            lineHeight: "160%",
          },
        ],
        "2lg-18px-bold": [
          "18px",
          {
            fontWeight: "700",
            lineHeight: "144.444%",
          },
        ],
        "2lg-18px-semibold": [
          "18px",
          {
            fontWeight: "600",
            lineHeight: "144.444%",
          },
        ],
        "2lg-18px-medium": [
          "18px",
          {
            fontWeight: "500",
            lineHeight: "144.444%",
          },
        ],
        "2lg-18px-regular": [
          "18px",
          {
            fontWeight: "400",
            lineHeight: "144.444%",
          },
        ],
        "lg-16px-bold": [
          "16px",
          {
            fontWeight: "700",
            lineHeight: "162.5%",
          },
        ],
        "lg-16px-semibold": [
          "16px",
          {
            fontWeight: "600",
            lineHeight: "162.5%",
          },
        ],
        "lg-16px-medium": [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "162.5%",
          },
        ],
        "lg-16px-regular": [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "162.5%",
          },
        ],
        "lg-14px-bold": [
          "14px",
          {
            fontWeight: "700",
            lineHeight: "171.429%",
          },
        ],
        "lg-14px-semibold": [
          "14px",
          {
            fontWeight: "600",
            lineHeight: "171.429%",
          },
        ],
        "lg-14px-medium": [
          "14px",
          {
            fontWeight: "500",
            lineHeight: "171.429%",
          },
        ],
        "lg-14px-regular": [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "171.429%",
          },
        ],
        "md-14px-regular": [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "171.429%",
          },
        ],
        "sm-13px-semibold": [
          "13px",
          {
            fontWeight: "600",
            lineHeight: "169.231%",
          },
        ],
        "sm-13px-medium": [
          "13px",
          {
            fontWeight: "500",
            lineHeight: "169.231%",
          },
        ],
        "xs-12px-semibold": [
          "12px",
          {
            fontWeight: "600",
            lineHeight: "166.667%",
          },
        ],
        "xs-12px-medium": [
          "12px",
          {
            fontWeight: "500",
            lineHeight: "150%",
          },
        ],
        "xs-12px-regular": [
          "12px",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
      },
      colors: {
        "black-100": "hsl(var(--black-100))",
        "black-200": "hsl(var(--black-200))",
        "black-300": "hsl(var(--black-300))",
        "black-400": "hsl(var(--black-400))",
        "black-500": "hsl(var(--black-500))",

        "grayscale-50": "hsl(var(--grayscale-50))",
        "grayscale-100": "hsl(var(--grayscale-100))",
        "grayscale-200": "hsl(var(--grayscale-200))",
        "grayscale-300": "hsl(var(--grayscale-300))",
        "grayscale-400": "hsl(var(--grayscale-400))",
        "grayscale-500": "hsl(var(--grayscale-500))",

        "primary-blue-50": "hsl(var(--primary-blue-50))",
        "primary-blue-100": "hsl(var(--primary-blue-100))",
        "primary-blue-200": "hsl(var(--primary-blue-200))",
        "primary-blue-300": "hsl(var(--primary-blue-300))",
        "primary-blue-400": "hsl(var(--primary-blue-400))",

        "secondary-yellow": "hsl(var(--secondary-yellow))",

        "secondary-red-100": "hsl(var(--secondary-red-100))",
        "secondary-red-200": "hsl(var(--secondary-red-200))",

        "bg-100": "hsl(var(--bg-100))",
        "bg-200": "hsl(var(--bg-200))",
        "bg-300": "hsl(var(--bg-300))",
        "bg-400": "hsl(var(--bg-400))",

        "line-100": "hsl(var(--line-100))",
        "line-200": "hsl(var(--line-200))",
      },
    },
  },
  plugins: [],
};
