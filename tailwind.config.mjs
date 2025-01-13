/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			first: '#222831',
  			second: '#393E46',
  			third: '#00ADB5',
  			fourth: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
