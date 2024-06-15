/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight:{
        med:'500',
        medextra:'700'
      },
      fontSize:{
        base:'15px'
      },
      //fontFamily: {
      fontFamily: {
        League:[ 'League Spartan', 'sans-serif']
      },
      colors:{
        //primary
        DesaturatedDarkCyan: 'hsl(180, 29%, 50%)',
        Orange: "hsl(26, 100%, 55%)",
        //Neutral
        LightGrayishCyan: 'hsl(180, 52%, 96%)',
        LightGrayishCyann: 'hsl(180, 31%, 95%)',
        DarkGrayishCyan: 'hsl(180, 8%, 52%)',
        VeryDarkGrayishCyan: 'hsl(180, 14%, 20%)'
      },
      screen:{
        xs:'375px',
        ss:'480px',
        sm:'640px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        xxl:'1440px',
      }
    },
  },
  plugins: [],
}