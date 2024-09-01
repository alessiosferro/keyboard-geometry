import {createMultiStyleConfigHelpers, defineStyle, extendTheme} from "@chakra-ui/react";
import {inputAnatomy} from '@chakra-ui/anatomy';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseSpaces = {
  0.5: "0.4rem",
  1: "0.8rem",
  1.5: "1.2rem",
  2: "1.6rem",
  2.5: "2rem",
  3: "2.4rem",
  4: "3.2rem",
  5: "4rem",
  6: "4.8rem",
  7: "5.6rem",
  8: "6.4rem",
  9: "7.2rem",
  10: "8rem",
  11: "8.8rem",
  12: "9.6rem",
  13: "10.4rem",
  14: "11.2rem",
  15: "12rem",
};

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: "62.5%"
      },
      body: {
        my: "3rem",
        fontSize: "1.6rem",
        minWidth: "80rem",
        minHeight: "80rem",
      }
    }
  },
  space: {
    ...baseSpaces,
    none: "0",
    "2xs": baseSpaces["0.5"],
    xs: baseSpaces[1],
    s: baseSpaces[1.5],
    m: baseSpaces[2],
    l: baseSpaces[3],
    xl: baseSpaces[5],
    "2xl": baseSpaces[8],
    "3xl": baseSpaces[10],
    "4xl": baseSpaces[15],
  },
  fontSizes: {
    h1: ["4rem", "4rem", "5rem", "5.6rem", "7.2rem"],
    h2: ["3.6rem", "3.6rem", "3.6rem", "4.4rem", "4.4rem"],
    h3: ["3.2rem", "3.2rem", "3.2rem", "3.6rem", "3.6rem"],
    h4: "2.8rem",
    bodyS: "1.6rem",
    bodyM: "1.8rem",
    bodyL: "2rem",
    labelL: "2rem",
    labelM: "1.6rem",
    buttonM: "1.6rem",
    buttonL: "2rem",
    buttonXL: "3.2rem",
    captionS: "1.2rem",
    captionM: "1.4rem",
  },
  components: {
    Input: defineMultiStyleConfig({
      baseStyle: definePartsStyle({
        field: defineStyle({
          fontSize: "1.6rem",
          padding: "2rem 1rem"
        }),
      })
    }),
    Button: {
      baseStyle: {
        fontSize: "1.6rem",
        padding: "1rem 2rem"
      },
      variants: {
        primary: {
          bgColor: "teal",
          color: "white",
          fontSize: "1.6rem",
          padding: "2rem",
          minWidth: "15rem"
        }
      }
    }
  }
});

export default theme;