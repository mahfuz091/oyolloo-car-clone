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
        "car-gradient":
          "linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.00) 70%)",
        "business-gradient":
          "radial-gradient(50% 50.00% at 50% 50.00%, rgba(15, 19, 28, 0.00) 0%, #0F131C 98.77%)",
        "tab-gradient": "linear-gradient(0deg, #FF0019 0%, #9E0514 100%)",
        "brand-gradient":
          "linear-gradient(180deg, #161B28 0%, rgba(22, 27, 40, 0.00) 100%)",
        "allocation-gradient":
          "linear-gradient(180deg, rgba(22, 27, 40, 0.00) 0%, #161B28 49.88%, rgba(22, 27, 40, 0.00) 100%)",
        "testimonial3-gradient":
          "linear-gradient(90deg, #161B28 0%, rgba(22, 27, 40, 0.00) 100%)",
        "testimonial2-gradient":
          "linear-gradient(180deg, rgba(22, 27, 40, 0.00) 0%, #161B28 100%)",
        "testimonial1-gradient":
          "linear-gradient(-90deg, #161B28 0%, rgba(22, 27, 40, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
