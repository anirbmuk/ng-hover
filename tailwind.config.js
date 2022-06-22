module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
    },
    fontSize: {
      xs: ["0.625rem", "1rem"],
      sm: ["0.75rem", "1.125rem"],
      md: ["0.875rem", "1.25rem"],
      DEFAULT: ["1rem", "1.5rem"],
      xl: ["1.125rem", "1.5rem"],
      "2xl": ["1.25rem", "1.75rem"],
      "3xl": ["1.5rem", "2rem"],
      "4xl": ["2rem", "2.5rem"],
      "5xl": ["2.5rem", "2.5rem"],
      "6xl": ["3rem", "3rem"],
      "7xl": ["3.5rem", "3rem"],
      "8xl": ["4rem", "4rem"],
      massive: ["10rem", "10rem"],
    },
    extend: {
      width: {
        fit: "fit-content",
        max: "max-content",
      },
    },
  },
};
