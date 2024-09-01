import React, {FormEventHandler, useEffect, useMemo, useState} from 'react';
import TOOL_MAP, {Tool} from "./utils/tool-map";
import {Box, Button, ChakraBaseProvider, Flex, FormControl, FormLabel, Heading, Input, Text} from "@chakra-ui/react";
import theme from "./theme";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./utils/local-storage-shortcuts-key";
import defaultToolShortcuts from "./utils/default-tool-shortcuts";


export default function App() {
  const savedShortcuts = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY);
  const [storedShortcuts, setStoredShortcuts] = useState(savedShortcuts ? JSON.parse(savedShortcuts) : defaultToolShortcuts);
  const [filterKey, setFilterKey] = useState("");

  const filteredShortcuts = useMemo(() => Object.entries(storedShortcuts).filter(([toolName]) =>
    toolName.toLowerCase().includes(filterKey))
    .reduce((acc, [toolName, shortcut]) => ({
      ...acc,
      [toolName]: {
        ...TOOL_MAP[toolName as Tool],
        shortcut
      },
    }), {} as Record<Tool, {
      value: string,
      description: string,
      shortcut: string
    }>), [storedShortcuts, filterKey]);

  useEffect(() => {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY);
    if (!storedItems) return;
    setStoredShortcuts(JSON.parse(storedItems));
  }, [])

  const handleSave: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget) as FormData;
    const data = Object.fromEntries(formData.entries())

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      const activeTab = tabs[0];

      void chrome.tabs.sendMessage(activeTab.id!, {
        action: "updateLocalStorage",
        value: JSON.stringify(data)
      })
    });

    localStorage.setItem(LOCAL_STORAGE_SHORTCUTS_KEY, JSON.stringify(data));
    location.reload();
  }

  return (
    <ChakraBaseProvider theme={theme}>
      <Box m="1rem 2rem">
        <Heading mb="1rem" fontSize="2.4rem" as="h1">Geogebra Shortcuts Extension 1.0</Heading>

        <Text my="2rem">
          Every shortcut can use a combination of Shift and Alt and a character or number.
          For example: Alt+Shift+3 (But NOT Shift+Alt+3), Shift+a, Alt+4. Every combination that do not
          satisfy this grammar will not work.
        </Text>

        <FormControl mb="2rem">
          <FormLabel fontSize="1.6rem" mb=".8rem">Ricerca</FormLabel>
          <Input onChange={e => setFilterKey(e.target.value)} value={filterKey} placeholder="Cerca strumento..."/>
        </FormControl>

        <Box as="form" onSubmit={handleSave}>
          <Flex direction="column" gap="2rem">
            {Object.entries(filteredShortcuts).map(([toolName, {shortcut, description}]) => (
              <Flex as="label" direction="column">
                <Heading mb="1rem">{toolName}</Heading>
                <Text mb=".8rem">{description}</Text>
                <Input name={toolName} defaultValue={shortcut}/>
              </Flex>
            ))}
          </Flex>

          <Button variant="primary"
                  borderRadius="1rem"
                  type="submit"
                  position="fixed"
                  right="2rem"
                  bottom="2rem">Save</Button>
        </Box>
      </Box>
    </ChakraBaseProvider>
  );
}