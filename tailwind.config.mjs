/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     keyframes: {
        textFade: {
          '0%': { color: '#ffffff' },  // Lightest White
          '25%': { color: '#f5f5f5' }, // Light White
          '50%': { color: '#e0e0e0' }, // Dark White
          '75%': { color: '#d6d6d6' }, // Darker White
          '100%': { color: '#c2c2c2' } // Darkest White
        },
        bgFade: {
          '0%': { backgroundColor: '#ffcccc' },  // Lightest Red
          '25%': { backgroundColor: '#ff9999' }, // Light Red
          '50%': { backgroundColor: '#ff6666' }, // Dark Red
          '75%': { backgroundColor: '#cc3333' }, // Darker Red
          '100%': { backgroundColor: '#990000' } // Darkest Red
        },
        textFadeReverse: {
          '0%': { color: '#c2c2c2' },
          '25%': { color: '#d6d6d6' },
          '50%': { color: '#e0e0e0' },
          '75%': { color: '#f5f5f5' },
          '100%': { color: '#ffffff' }
        },
        bgFadeReverse: {
          '0%': { backgroundColor: '#990000' },
          '25%': { backgroundColor: '#cc3333' },
          '50%': { backgroundColor: '#ff6666' },
          '75%': { backgroundColor: '#ff9999' },
          '100%': { backgroundColor: '#ffcccc' }
        }
      },
      animation: {
        textFade: 'textFade 0.7s ease-in-out forwards',
        bgFade: 'bgFade 0.7s ease-in-out forwards',
        textFadeReverse: 'textFadeReverse 0.7s ease-in-out forwards',
        bgFadeReverse: 'bgFadeReverse 0.7s ease-in-out forwards'
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
