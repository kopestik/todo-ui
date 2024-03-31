/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3556AB",
        danger: "#AB3535",
        "danger-border": "#720D0D",
        "primary-border": "#0D2972",
        secondary: "#071D55",
        disabled: "#8D8D8D",
        success: "#CDE53D",
        "success-border": "#9EB031",
        "input-border": "#CBCBCB",
      },
    },
  },
  plugins: [],
};
