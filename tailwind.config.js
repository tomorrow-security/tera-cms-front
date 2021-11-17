const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: (theme) => ({
      shine:
        "linear-gradient(60deg, rgba(255,255,255,0) 40%,rgba(255,255,255,0.2) 42%,rgba(255,255,255,0.6) 47%,rgba(255,255,255,0.8) 50%,rgba(255,255,255,0.6) 53%,rgba(255,255,255,0.2) 58%,rgba(255,255,255,0) 60%,rgba(255,255,255,0) 100%)",
      smoke:
        "linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)",
    }),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "big-cover": "200%",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      monday: "5px 5px 56px 0px rgba(0, 0, 0, 0.25)",
      toggle: "0 10px 20px -8px rgba(4, 2, 29, 0.25)",
    },
    flex: {
      0: "1 1 0",
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-60": "-60deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      60: "60deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      2575: "25.75",
    },
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        shine: "shine 1.3s infinite",
        scroll: "scroll 40s linear infinite",
      },
      colors: {
        "tc-blue": "#04021D",
        "tc-red": "#E03300",
      },
      gridTemplateColumns: {
        bivouac: "4fr 3fr",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridTemplateRows: {
        bivouac: "1fr 2fr 2fr",
        "program-domain": "1fr 2rem 1fr 1fr 3fr",
        objectif: "2rem 1fr",
      },
      height: {
        "33vh": "33vh",
        "1/12": "8.333333%",
        "7/12": "58.333333%",
      },
      inset: {
        // TODO vérifier si tous les paramètres sont utilisés
        "12/25": "48%",
        "-20/100": "-20%",
        "-15/100": "-15%",
        "-10/100": "-10%",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      // TODO mettre un losange
      listStyleType: {
        square: "square",
      },
      padding: {
        4.5: "1.125rem",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        toggle: "cubic-bezier(0.18, 0.89, 0.35, 1.15)",
      },
      translate: {
        "20/100": "20%",
        "full-50": "150%",
      },
      width: {
        "200px": "200px",
        "1/25": "4%",
        "30%": "30%",
        "45%": "45%",
        "65%": "65%",
        full2: "200%",
        full3: "300%",
        "full3.5": "350%",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover", "hover", "focus", "checked"],
      backgroundColor: ["group-hover", "checked", "disabled"],
      backgroundImage: ["group-hover", "group-focus", "hover"],
      borderColor: ["focus", "checked"],
      borderOpacity: ["disabled"],
      borderRadius: ["group-focus"],
      borderStyle: ["focus"],
      borderWidth: ["group-hover", "hover", "focus"],
      display: ["group-hover", "hover", "group-focus", "focus", "active"],
      fontWeight: ["hover", "active", "focus"],
      fontSize: ["hover"],
      fontStyle: ["hover", "focus"],
      justifyContent: ["group-focus"],
      inset: ["group-hover", "hover"],
      opacity: ["group-focus", "visited", "disabled"],
      padding: ["group-focus"],
      scale: ["group-hover", "group-focus"],
      textOpacity: ["disabled"],
      textColor: ["visited", "disabled"],
      textDecoration: ["hover", "focus", "visited"],
      textTransform: ["focus"],
      transform: [
        "group-hover",
        "group-focus",
        "hover",
        "focus",
        "active",
        "checked",
      ],
      transformOrigin: ["group-hover", "hover", "focus", "active", "checked"],
      transitionDelay: ["group-hover", "hover", "focus", "active", "checked"],
      transitionDuration: [
        "group-hover",
        "hover",
        "focus",
        "active",
        "checked",
      ],
      transitionProperty: [
        "group-hover",
        "hover",
        "focus",
        "active",
        "checked",
      ],
      transitionTimingFunction: [
        "group-hover",
        "hover",
        "focus",
        "active",
        "checked",
      ],
      translate: ["group-hover", "group-focus", "active", "checked"],
      visibility: ["group-hover", "group-focus", "hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
