import React, {useMemo, useState} from 'react';
import toolAutocompleteOptions from "../utils/constants/tool-autocomplete-options";
import {Box, ChakraProvider, Input} from "@chakra-ui/react";
import theme from "../utils/constants/theme";

export default function SearchFilter() {
  const [searchKey, setSearchKey] = useState("");

  const filteredAutocompleteOptions = useMemo(() => toolAutocompleteOptions
    .filter(option => option.label.toLowerCase().includes(searchKey.toLowerCase())), [searchKey]);

  const handleSelectOption = (value: string) => {
    if (!value) return;
    document.getElementById(value)?.click();
    setSearchKey("");
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
            padding: "0 1.6rem",
            minW: "30rem"
          }
        }}>

        <Box bgColor="white" position="relative" mt="1.4rem">
          <Input onChange={event => setSearchKey(event.target.value)}
                 value={searchKey}
                 type="search"
                 placeholder="Select Tool (⌘ Command + K)"/>

          {searchKey.length > 0 &&
              <Box as="ul"
                   display="flex"
                   mt="2rem"
                   boxShadow="0 .8rem 1rem .1rem rgba(0,0,0,.08)"
                   flexDirection="column"
                   py="1.8rem"
                   gap="1.4rem"
                   bgColor="white"
                   zIndex="100"
                   maxHeight="30rem"
                   overflow="auto"
                   listStyleType="none"
                   padding="2rem 1.6rem !important" margin="0" position="absolute" top="100%"
                   left="0">
                {filteredAutocompleteOptions.map(option => <li key={option.value}>
                  <button onClick={() => handleSelectOption(option.value)}>{option.label}</button>
                </li>)}
              </Box>}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
