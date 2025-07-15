/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
        sans: ["Noto Sans KR", "sans-serif"], // 기본 sans 폰트 변경
      },
    },
  },
  plugins: [],
};
