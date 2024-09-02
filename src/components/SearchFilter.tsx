import React from 'react';
import {Autocomplete, Option} from "chakra-ui-simple-autocomplete";
import toolAutocompleteOptions from "../utils/constants/tool-autocomplete-options";
import {Box, ChakraProvider} from "@chakra-ui/react";
import theme from "../utils/constants/theme";

export default function SearchFilter() {
  const handleSelectOption = (options: Option[]) => {
    const [{value}] = options;

    document.getElementById(value)?.click();
  }

  return (
    <ChakraProvider theme={theme}>
      <Box
        position="absolute"
        left="calc(100% - 1.6rem)"
        minW="30rem"
        top="0"
        sx={{
          "[data-testid=\"options-list\"]": {
            backgroundColor: "white",
            overflow: "auto",
            maxH: "20rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            padding: "1.6rem",
          },
          "[data-testid=\"simple-autocomplete\"]": {
            mt: "1.4rem",
          },
          input: {
            padding: "0 1.6rem"
          }
        }}>
        <Autocomplete placeholder="Select Tool"
                      result={[]}
                      allowCreation={false}
                      setResult={handleSelectOption}
                      options={toolAutocompleteOptions}
        />
      </Box>
    </ChakraProvider>
  );
}
