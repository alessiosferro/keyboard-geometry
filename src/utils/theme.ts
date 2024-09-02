import {createMultiStyleConfigHelpers, defineStyle, extendTheme} from "@chakra-ui/react";
import {inputAnatomy} from '@chakra-ui/anatomy';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(inputAnatomy.keys);

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
  components: {
    Text: {
      baseStyle: {
        fontSize: "1.6rem"
      }
    },
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
        "&.chakra-button": {
          fontSize: "1.6rem",
          padding: "2rem"
        }
      },
      variants: {
        primary: {
          bgColor: "teal",
          color: "white",
        }
      }
    }
  }
});

export default theme;