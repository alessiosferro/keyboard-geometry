import React, {KeyboardEventHandler, useEffect, useMemo, useRef, useState} from 'react';
import getAutocompleteToolsOptions from "../utils/functions/get-autocomplete-tools-options";
import {Box, ChakraProvider, Input, Text, useOutsideClick} from "@chakra-ui/react";
import theme from "../utils/constants/theme";
import {LOCAL_STORAGE_LANGUAGE_KEY} from "../utils/constants/local-storage-shortcuts-key";
import getTranslatedStrings from "../utils/functions/get-translated-strings";

if (!localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)) {
  localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, "en");
}

export default function SearchFilter() {
  const [searchKey, setSearchKey] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const focusIndex = useRef(0);
  const strings = getTranslatedStrings();

  useEffect(() => {
    focusIndex.current = 0;
  }, [searchKey]);

  const filteredAutocompleteOptions = useMemo(() => {
    return getAutocompleteToolsOptions().filter(option =>
      option.label.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [searchKey]);


  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionListRef = useRef<HTMLUListElement>(null);

  const handleSelectOption = (value: string) => {
    if (!value) return;
    document.getElementById(value)?.click();
    setSearchKey("");
    setShowOptions(false);
    inputRef.current?.blur();
    focusIndex.current = 0;
  }

  const handleSelectTool: KeyboardEventHandler<HTMLInputElement> = (event) => {
    event.stopPropagation();

    if (event.key === 'Escape') {
      inputRef.current?.blur();
      setShowOptions(false);
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const option = filteredAutocompleteOptions[focusIndex.current];
    if (!option) return;
    const {value} = option;
    handleSelectOption(value);
  }

  useOutsideClick({
    ref: boxRef,
    handler: () => setShowOptions(false)
  });

  const handleOptionListFocus = (event: KeyboardEvent) => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;

    event.preventDefault();
    event.stopPropagation();

    const listOptionsElements = optionListRef.current!.children;

    if (event.key === 'ArrowUp') {
      if (focusIndex.current === 0) {
        inputRef.current?.focus();
        return;
      }

      focusIndex.current--;
    }

    if (document.activeElement !== inputRef.current && event.key === 'ArrowDown' && focusIndex.current !== listOptionsElements.length - 1) {
      focusIndex.current++;
    }

    const button = listOptionsElements[focusIndex.current]?.firstChild as HTMLButtonElement;
    if (!button) return;
    button.focus();
  }

  useEffect(() => {
    const box = boxRef.current;
    
    if (!box) return;

    box.addEventListener('keydown', handleOptionListFocus);

    return () => {
      box.removeEventListener('keydown', handleOptionListFocus);
    }
  }, [])

  const {styles: {global: {html, body}}, ...themeStyles} = theme;

  return (
    <ChakraProvider theme={{
      styles: {
        global: {
          html,
          body: {
            ...body,
            my: 0
          }
        }
      },
      themeStyles
    }}>
      <Box
        position="absolute"
        left="calc(100% - 1.6rem)"
        top="0"
      >

        <Box ref={boxRef} bgColor="white" position="relative" m="0 1.6rem">
          <Input onChange={event => setSearchKey(event.target.value)}
                 tabIndex={0}
                 value={searchKey}
                 type="search"
                 ref={inputRef}
                 onFocus={() => setShowOptions(true)}
                 onKeyDown={handleSelectTool}
                 sx={{
                   borderRadius: "1rem",
                   transition: "all 200ms ease-in-out",

                   "&.chakra-input.chakra-input": {
                     mt: ".6rem",
                     display: "inline-block",
                     padding: ".8rem 1.6rem",
                     minW: "30rem",
                     border: ".1rem solid transparent !important",
                     boxShadow: "0 0 .2rem .2rem transparent",

                     "&:focus:not([readonly])": {
                       borderColor: "dodgerblue",
                       boxShadow: "rgba(30, 144, 255, .5) 0 0 0.3rem .3rem",
                     }
                   },
                 }}
                 placeholder={strings.label.selectTool()}/>

          {showOptions && (
            <Box as="ul"
                 ref={optionListRef}
                 display="flex"
                 boxShadow="0 .8rem 1rem .1rem rgba(0,0,0,.08)"
                 flexDirection="column"
                 py="1.8rem"
                 gap="1.4rem"
                 zIndex="100"
                 maxHeight="30rem"
                 overflow="auto"
                 borderRadius="1rem"
                 className="options-list"
                 listStyleType="none"
                 position="absolute"
                 top="100%"
                 minW="30rem"
                 left="0"
                 sx={{
                   "&.options-list": {
                     bgColor: "white",
                     padding: "2rem 1.6rem",
                     marginTop: ".8rem"
                   }
                 }}
            >
              {filteredAutocompleteOptions.length > 0 ? filteredAutocompleteOptions.map(option => <li
                key={option.value}>
                <Box as="button"
                     onKeyDown={e => {
                       if (e.key !== 'Enter') return;
                       e.stopPropagation();
                     }}
                     _focus={{textDecoration: "underline"}}
                     onClick={() => handleSelectOption(option.value)}>
                  {option.label}
                </Box>
              </li>) : <li>
                <Text textAlign="center">{strings.noResultsFound}</Text>
              </li>}
            </Box>)}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
