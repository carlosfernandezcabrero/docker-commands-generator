/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'docker-primary': '#0db7ed',
        'docker-secondary': '#384d54'
      }
    }
  },
  plugins: []
}
