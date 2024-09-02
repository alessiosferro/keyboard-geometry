import {createMultiStyleConfigHelpers, defineStyle, extendTheme} from "@chakra-ui/react";
import {checkboxAnatomy, inputAnatomy, selectAnatomy} from '@chakra-ui/anatomy';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(inputAnatomy.keys);

const {
  definePartsStyle: checkboxPartsStyle,
  defineMultiStyleConfig: checkboxMultiStyleConfig
} = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const {
  definePartsStyle: selectPartsStyle,
  defineMultiStyleConfig: selectMultiStyleConfig
} = createMultiStyleConfigHelpers(selectAnatomy.keys)


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
    Select: selectMultiStyleConfig({
      baseStyle: selectPartsStyle({
        field: {
          "&.chakra-select": {
            fontSize: "1.6rem",

            svg: {
              fontSize: "1rem"
            }
          }
        },
      })
    }),
    Checkbox: checkboxMultiStyleConfig({
      baseStyle: checkboxPartsStyle({
        control: {
          "&.chakra-checkbox__control": {
            width: "2rem",
            height: "2rem",

            svg: {
              fontSize: "1rem"
            }
          }
        },
        label: {
          "&.chakra-checkbox__label": {
            ml: "1rem",
            fontSize: "1.6rem"
          }
        }
      })
    }),
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