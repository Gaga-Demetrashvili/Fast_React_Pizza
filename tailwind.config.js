/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  // Adding int 'theme' overrwrites every class in that category
  theme: {
    fontFamily: {
      // tailwind automatically injects sans font in our html
      // we can override that sans font with font of our liking
      sans: 'Roboto Mono, monospace'
    },

    // if you want to keep tailwind classes, but also to
    // extend it, place your classes here
    extend: {
      colors: {
        pizza: '#123456',
      },
      height: {
        screen: '100dvh' // more modern approach then dvh (dynamic viewport height units)
      }
    },
  },
  plugins: [],
}

