import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      "dmSans" : ["DM Sans", "sans-serif"]
    },
    extend: {
      colors : {
        "myWhite" : "#FFFFE3",
        "myBlack" : "#0A0A09"
      }
    },
  },
  plugins: [],
});
