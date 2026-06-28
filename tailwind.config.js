/** @type {import('tailwindcss').Config} */
// Design tokens ported from the legacy site's tailwind.config.js -- same
// palette, fonts, shadows, fluid type/spacing scale. Content glob fixed for
// the App Router structure -- this is a plain .js file (not .ts) on purpose:
// Tailwind v3's loader doesn't reliably unwrap `export default` from a .ts
// file under Node's native type-stripping, which silently produced an empty
// config (zero classes generated) the first time this was written as .ts.
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B7355",
          50: "#F5F2EE",
          100: "#EBE5DC",
          200: "#D7CCB9",
          300: "#C3B296",
          400: "#AF9973",
          500: "#8B7355",
          600: "#6F5C44",
          700: "#534533",
          800: "#372E22",
          900: "#1B1711",
        },
        secondary: {
          DEFAULT: "#A67C52",
          50: "#F6F1EC",
          100: "#EDE3D9",
          200: "#DBC7B3",
          300: "#C9AB8D",
          400: "#B78F67",
          500: "#A67C52",
          600: "#856342",
          700: "#644A31",
          800: "#423121",
          900: "#211810",
        },
        accent: {
          DEFAULT: "#D4AF37",
          50: "#FDFBF4",
          100: "#FBF7E9",
          200: "#F7EFD3",
          300: "#F3E7BD",
          400: "#EFDFA7",
          500: "#D4AF37",
          600: "#AA8C2C",
          700: "#7F6921",
          800: "#554616",
          900: "#2A230B",
        },
        background: "#FEFCF8",
        surface: "#F7F3ED",
        text: {
          primary: "#2C2C2C",
          secondary: "#6B6B6B",
        },
        success: {
          DEFAULT: "#7A9B76",
          50: "#F2F6F1",
          100: "#E5EDE3",
          200: "#CBDBC7",
          300: "#B1C9AB",
          400: "#97B78F",
          500: "#7A9B76",
          600: "#627C5E",
          700: "#495D47",
          800: "#313E2F",
          900: "#181F18",
        },
        warning: {
          DEFAULT: "#D4A574",
          50: "#FDF9F4",
          100: "#FBF3E9",
          200: "#F7E7D3",
          300: "#F3DBBD",
          400: "#EFCFA7",
          500: "#D4A574",
          600: "#AA845D",
          700: "#7F6346",
          800: "#55422F",
          900: "#2A2117",
        },
        error: {
          DEFAULT: "#B85450",
          50: "#F9EFEF",
          100: "#F3DFDF",
          200: "#E7BFBF",
          300: "#DB9F9F",
          400: "#CF7F7F",
          500: "#B85450",
          600: "#934340",
          700: "#6E3230",
          800: "#4A2220",
          900: "#251110",
        },
        unify: {
          DEFAULT: "#96C11F",
          500: "#96C11F",
          600: "#7A9E19",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        source: ["var(--font-source-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        gentle: "0 2px 8px rgba(139, 115, 85, 0.1)",
        soft: "0 4px 20px rgba(139, 115, 85, 0.15)",
        elevated: "0 8px 32px rgba(139, 115, 85, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        "organic-1": "60% 40% 30% 70% / 60% 30% 70% 40%",
        "organic-2": "30% 70% 70% 30% / 30% 30% 70% 70%",
        "organic-3": "40% 60% 60% 40% / 60% 40% 60% 40%",
      },
      spacing: {
        "fluid-xs": "clamp(0.5rem, 2vw, 1rem)",
        "fluid-sm": "clamp(1rem, 3vw, 1.5rem)",
        "fluid-md": "clamp(1.5rem, 4vw, 2rem)",
        "fluid-lg": "clamp(2rem, 5vw, 3rem)",
        "fluid-xl": "clamp(3rem, 6vw, 4rem)",
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 2vw, 1rem)",
        "fluid-base": "clamp(1rem, 2.5vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 3vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 4vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 5vw, 2rem)",
        "fluid-3xl": "clamp(2rem, 6vw, 3rem)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
