module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    flex: {
      0: "1 1 0",
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    extend: {
      colors: {
        "tc-red": "#E03300",
        "tangaroa": "#032845",
        "aqua": "#00FFFF",
        "oldking": "#075C9C",
        "tangerine": "#FFA31A",
        "stormy": "#535353",
        "misty": "#EFF7F5",
        "snowy": "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-rubik)'],
      },
      inset: {
        "-15/100": "-15%",
        "-10/100": "-10%",
      },
      width: {
        "200px": "200px",
        "1/25": "4%",
        "30%": "30%",
        "45%": "45%",
        "65%": "65%",
        full2: "200%",
        full3: "300%",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover", "hover", "focus", "checked"],
      backgroundColor: ["group-hover", "checked", "disabled"],
      backgroundImage: ["group-hover", "hover"],
      borderColor: ["focus", "checked"],
      borderOpacity: ["disabled"],
      borderStyle: ["focus"],
      borderWidth: ["group-hover", "hover", "focus"],
      display: ["group-hover"],
      fontWeight: ["hover", "active", "focus"],
      fontSize: ["hover"],
      fontStyle: ["hover", "focus"],
      inset: ["group-hover", "hover"],
      opacity: ["visited", "disabled"],
      padding: ["group-focus"],
      scale: ["group-hover", "group-focus"],
      textOpacity: ["disabled"],
      textColor: ["visited", "disabled"],
      textDecoration: ["hover", "focus", "visited"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
