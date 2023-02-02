const defaultTheme = require('tailwindcss/defaultTheme')
const { slateDark } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/popup/**/*.{svelte,html}', './src/components/**/*.{svelte,html}'],
  theme: {
    extend: {
      colors: {
        slate: {
          1: slateDark.slate1,
          2: slateDark.slate2,
          3: slateDark.slate3,
          4: slateDark.slate4,
          5: slateDark.slate5,
          6: slateDark.slate6,
          7: slateDark.slate7,
          8: slateDark.slate8,
          9: slateDark.slate9,
          10: slateDark.slate10,
          11: slateDark.slate11,
          12: slateDark.slate12,
        },
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
}
