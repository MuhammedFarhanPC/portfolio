/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        primary: {
          DEFAULT: "#00f2ff",
          glow: "#00f2ff",
        },
        secondary: {
          DEFAULT: "#7000ff",
          glow: "#7000ff",
        },
        accent: "#00d8ff",
        card: "rgba(17, 25, 40, 0.75)",
        border: "rgba(255, 255, 255, 0.125)",
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.7, filter: 'brightness(1.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
        'neon-gradient': 'linear-gradient(to right, #00f2ff, #7000ff)',
      },
    },
  },
  plugins: [],
}
