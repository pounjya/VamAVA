/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", 
        sm: "5%",         
      },
    },
  },
  plugins: [],
}

