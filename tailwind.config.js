module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#8B7355", // warm-taupe
          50: "#F5F2EE", // warm-taupe-50
          100: "#EBE5DC", // warm-taupe-100
          200: "#D7CCB9", // warm-taupe-200
          300: "#C3B296", // warm-taupe-300
          400: "#AF9973", // warm-taupe-400
          500: "#8B7355", // warm-taupe-500
          600: "#6F5C44", // warm-taupe-600
          700: "#534533", // warm-taupe-700
          800: "#372E22", // warm-taupe-800
          900: "#1B1711", // warm-taupe-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#A67C52", // bronze
          50: "#F6F1EC", // bronze-50
          100: "#EDE3D9", // bronze-100
          200: "#DBC7B3", // bronze-200
          300: "#C9AB8D", // bronze-300
          400: "#B78F67", // bronze-400
          500: "#A67C52", // bronze-500
          600: "#856342", // bronze-600
          700: "#644A31", // bronze-700
          800: "#423121", // bronze-800
          900: "#211810", // bronze-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#D4AF37", // gold
          50: "#FDFBF4", // gold-50
          100: "#FBF7E9", // gold-100
          200: "#F7EFD3", // gold-200
          300: "#F3E7BD", // gold-300
          400: "#EFDFA7", // gold-400
          500: "#D4AF37", // gold-500
          600: "#AA8C2C", // gold-600
          700: "#7F6921", // gold-700
          800: "#554616", // gold-800
          900: "#2A230B", // gold-900
        },
        // Background Colors
        background: "#FEFCF8", // warm-white
        surface: "#F7F3ED", // cream
        // Text Colors
        text: {
          primary: "#2C2C2C", // near-black
          secondary: "#6B6B6B", // medium-gray
        },
        // Status Colors
        success: {
          DEFAULT: "#7A9B76", // sage-green
          50: "#F2F6F1", // sage-green-50
          100: "#E5EDE3", // sage-green-100
          200: "#CBDBC7", // sage-green-200
          300: "#B1C9AB", // sage-green-300
          400: "#97B78F", // sage-green-400
          500: "#7A9B76", // sage-green-500
          600: "#627C5E", // sage-green-600
          700: "#495D47", // sage-green-700
          800: "#313E2F", // sage-green-800
          900: "#181F18", // sage-green-900
        },
        warning: {
          DEFAULT: "#D4A574", // warm-amber
          50: "#FDF9F4", // warm-amber-50
          100: "#FBF3E9", // warm-amber-100
          200: "#F7E7D3", // warm-amber-200
          300: "#F3DBBD", // warm-amber-300
          400: "#EFCFA7", // warm-amber-400
          500: "#D4A574", // warm-amber-500
          600: "#AA845D", // warm-amber-600
          700: "#7F6346", // warm-amber-700
          800: "#55422F", // warm-amber-800
          900: "#2A2117", // warm-amber-900
        },
        error: {
          DEFAULT: "#B85450", // terracotta
          50: "#F9EFEF", // terracotta-50
          100: "#F3DFDF", // terracotta-100
          200: "#E7BFBF", // terracotta-200
          300: "#DB9F9F", // terracotta-300
          400: "#CF7F7F", // terracotta-400
          500: "#B85450", // terracotta-500
          600: "#934340", // terracotta-600
          700: "#6E3230", // terracotta-700
          800: "#4A2220", // terracotta-800
          900: "#251110", // terracotta-900
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'gentle': '0 2px 8px rgba(139, 115, 85, 0.1)',
        'soft': '0 4px 20px rgba(139, 115, 85, 0.15)',
        'elevated': '0 8px 32px rgba(139, 115, 85, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      borderRadius: {
        'organic-1': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'organic-2': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'organic-3': '40% 60% 60% 40% / 60% 40% 60% 40%',
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 2vw, 1rem)',
        'fluid-sm': 'clamp(1rem, 3vw, 1.5rem)',
        'fluid-md': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-lg': 'clamp(2rem, 5vw, 3rem)',
        'fluid-xl': 'clamp(3rem, 6vw, 4rem)',
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 6vw, 3rem)',
      },
    },
  },
  plugins: [],
}