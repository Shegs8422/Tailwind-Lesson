/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
                myButton: '#024563', // Button color
            }
    }, // This is where you'd customize the default Tailwind styles
  },
  plugins: [], // For adding Tailwind plugins
}

