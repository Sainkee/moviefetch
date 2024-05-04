/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow":'  rgba(254, 205, 211, 0.1)  0px 1px 16px, rgba(254,205,211,0.1) 0px 8px 24px, rgba(254,205,211, 0.1) 0px 16px 56px' ,
      },
    },
  },
  plugins: [],
};
