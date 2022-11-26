module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },

    colors: {
      primary: "#FFC93E",
      secondary: "#111D5E",
      accent: "#725114",
      neutral: "#E8E1E0",
      info: "#3ABFF8",
      success: "#36D399",
      warning: "#FBBD23",
      error: "#F87272",
    },
    fontSize: {
      heading1: "140px",
      heading2: "48px",
      heading3: "20px",
      heading4: "16px",
      heading5: "12px",
    },
  },
};
