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
        // Palette revised to match the actual brand materials (logo +
        // price-list images): a quiet marble/bronze/taupe/espresso range.
        // The previous version of this file used a brighter, more golden
        // palette that was never actually checked against real brand
        // assets -- see the UI/UX revamp commit for the comparison.
        primary: {
          DEFAULT: "#73695C",
          50: "#F4F2EF",
          100: "#E5E2DB",
          200: "#CFC9BC",
          300: "#B8B09D",
          400: "#93897A",
          500: "#73695C",
          600: "#5C5449",
          700: "#443F37",
          800: "#2D2A24",
          900: "#161412",
        },
        secondary: {
          DEFAULT: "#A78B6C",
          50: "#F8F5F0",
          100: "#EFE7DC",
          200: "#DCCCB4",
          300: "#C9B18C",
          400: "#B89E78",
          500: "#A78B6C",
          600: "#866F56",
          700: "#645341",
          800: "#43372B",
          900: "#211C16",
        },
        // Was a bright gold (#D4AF37) -- dropped. Nothing in the actual
        // logo or price-list materials uses gold; emphasis there comes
        // from a deep espresso brown instead.
        accent: {
          DEFAULT: "#4F4A42",
          50: "#F2F1EF",
          100: "#E0DCD7",
          200: "#C1B9B0",
          300: "#A29688",
          400: "#837461",
          500: "#4F4A42",
          600: "#3F3B35",
          700: "#2F2C27",
          800: "#201E1A",
          900: "#100F0D",
        },
        background: "#FBFAF8",
        surface: "#EFEDE8",
        text: {
          primary: "#3D3935",
          secondary: "#6B6862",
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
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        source: ["var(--font-source-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        // Script wordmark font -- matches the logo's "Essentials" treatment.
        // Used sparingly: the site wordmark and a couple of brand moments,
        // never for body copy or anything that needs to be quickly legible.
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        gentle: "0 2px 8px rgba(115, 105, 92, 0.12)",
        soft: "0 4px 20px rgba(115, 105, 92, 0.16)",
        elevated: "0 8px 32px rgba(115, 105, 92, 0.22)",
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
