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
        //background: "var(--background)",
        //foreground: "var(--foreground)",
        light: {
          background: "#F8F4EE",
          primary: "#FF914D",
          secondary: "#4C9A8E",
          accent: "#F4C542",
          text: "#333333",
          card: "#FFFFFF",
          button: "#E85D04",
          success: "#76C893",
        },
        dark: {    
          background: "#1E1E1E",
          primary: "#FF914D",
          secondary: "#58AFAF",
          accent: "#F4C542",
          text: "#E0E0E0",
          card: "#2A2A2A",
          button: "#FF6F3C",
          success: "#88D498",
        }
      },
    },
  },
  plugins: [],
};
