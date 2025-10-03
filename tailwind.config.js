/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#032735",
          secondary: "#0b333a",
          gold: "#c26d2e",
          "light-gray": "#F8FAFC"
        },
        navy: {
          900: "#032735",
          800: "#0b333a",
          700: "#183c2b"
        },
        gold: {
          DEFAULT: "#c26d2e",
          light: "#ffa766",
          anchor: "#ffc983"
        },
        navigate: {
          bg: "#0b333a",
          text: "#bfbc92",
          accent: "#f7f4d1"
        },
        launch: {
          bg: "#032735",
          text: "#c26d2e",
          accent: "#ffa766"
        },
        anchor: {
          bg: "#183c2b",
          text: "#d38c31",
          accent: "#ffc983"
        }
      },
      fontFamily: {
        title: ["Merriweather", "serif"],
        heading: ["Merriweather", "serif"],
        body: ["Merriweather", "serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
