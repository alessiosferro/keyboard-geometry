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
    Input: defineMultiStyleConfig({
      baseStyle: definePartsStyle({
        field: defineStyle({
          fontSize: "1.6rem",
          padding: "1rem"
        })
      })
    }),
    Button: {
      baseStyle: {
        fontSize: "1.6rem",
        padding: "1rem 2rem"
      }
    }
  }
});

export default theme;