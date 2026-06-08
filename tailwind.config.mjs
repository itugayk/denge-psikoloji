/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sakinleştirici palet — adaçayı yeşili, sıcak bej, toprak aksan
        sage: {
          50: '#f4f6f4',
          100: '#e6ebe6',
          200: '#cdd6ce',
          300: '#aab9ab',
          400: '#8a9a8b', // ana marka yeşili
          500: '#6e7f70',
          600: '#57655a',
          700: '#47524a',
          800: '#3b443d',
          900: '#333a35',
        },
        sand: {
          50: '#fbf9f6',
          100: '#f0ebe3', // sıcak bej
          200: '#e6ddd0',
          300: '#d6c8b4',
          400: '#c2ad92',
          500: '#b09576',
          600: '#9c7f63',
          700: '#826853',
          800: '#6b5647',
          900: '#58483c',
        },
        clay: {
          // toprak aksan
          400: '#c08b6b',
          500: '#ad7553',
          600: '#965f41',
        },
        ink: '#2d322e', // metin koyu yeşilimsi
      },
      fontFamily: {
        serif: ['Fraunces', 'Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
      },
      maxWidth: {
        prose2: '68ch',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        soft: '0 10px 40px -18px rgba(71, 82, 74, 0.28)',
        'soft-lg': '0 24px 70px -28px rgba(71, 82, 74, 0.35)',
      },
    },
  },
  plugins: [],
};
