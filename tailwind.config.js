/** @type {import('tailwindcss').Config} */;
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'montserrat':['"Montserrat Alternates"'],
    },
    screens: {
    sm: '640px',

    md: '768px',

    lg: '1024px',

    xl: '1280px',

    '2xl':'1536px',
    },
  },
  plugins: [],
}

