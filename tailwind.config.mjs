/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgPattern: "var(--bg-pattern)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D6C7FF",
        darkBlue: "#0F0D23",
        colorPrimary: "#A8B5DB"
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
        '3xl': '1600px',
        '4xl': '1800px',
      },
  
    },
  },
  plugins: [],
};
