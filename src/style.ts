import { makeStyles } from "@material-ui/styles";

export const useGlobalStyles = makeStyles({
  "@global": {
    "*": {
      fontFamily: '"Montserrat Alternates", sans-serif',
    },

    body: {
      margin: 0,
      fontFamily: '"Montserrat Alternates", sans-serif',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  },
});
