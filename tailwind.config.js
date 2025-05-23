/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        proxima: ['var(--font-proxima-nova)'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(25px, 25px)' },
          '66%': { transform: 'translate(-25px, 40px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};