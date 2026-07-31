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
        neo: {
          canvas: "#FFFDF5",
          accent: "#FF6B6B",
          secondary: "#FFD93D",
          muted: "#C4B5FD",
          darkCanvas: "#121212",
        }
      },
      fontFamily: {
        neo: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-md': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        'neo-xl': '16px 16px 0px 0px rgba(0,0,0,1)',
        'neo-light-sm': '4px 4px 0px 0px rgba(255,255,255,1)',
        'neo-light-md': '8px 8px 0px 0px rgba(255,255,255,1)',
        'neo-light-lg': '12px 12px 0px 0px rgba(255,255,255,1)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
