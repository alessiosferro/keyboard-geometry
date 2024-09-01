import React, {FormEventHandler, useState} from 'react';
import TOOL_MAP from "./utils/tool-map";
import {Button, ChakraBaseProvider, Container, Flex, Heading, Input, Text} from "@chakra-ui/react";
import theme from "./theme";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./utils/local-storage-shortcuts-key";
import shortcuts, {getUpdatedShortcuts} from "./utils/shortcuts";
import defaultToolShortcuts from "./utils/default-tool-shortcuts";


export default function App() {
  const storedItems = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY);
  const [storedShortcuts, setStoredShortcuts] = useState(storedItems ? JSON.parse(storedItems) : defaultToolShortcuts);

  const handleSave: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget) as FormData;
    const data = Object.fromEntries(formData.entries())

    setStoredShortcuts(data);
    localStorage.setItem(LOCAL_STORAGE_SHORTCUTS_KEY, JSON.stringify(data));
    shortcuts.next(getUpdatedShortcuts());
  }

  return (
    <ChakraBaseProvider theme={theme}>
      <Container>
        <Heading mb="1rem" fontSize="2.4rem" as="h1">Geogebra Shortcuts Extension 1.0</Heading>

        <Text my="2rem">
          Every shortcut can use a combination of Shift and Alt and a character or number.
          For example: Alt+Shift+3 (But NOT Shift+Alt+3), Shift+a, Alt+4. Every combination that do not
          satisfy this grammar will not work.
        </Text>

        <form onSubmit={handleSave}>
          <Flex direction="column" gap="1rem">
            {Object.entries(TOOL_MAP).map(([toolName, {description}]) => (
              <label>
                <Heading>{toolName}</Heading>
                <Text>{description}</Text>
                <Input name={toolName} defaultValue={storedShortcuts[toolName]}/>
              </label>
            ))}
          </Flex>

          <Button colorScheme="teal"
                  variant="solid"
                  type="submit"
                  position="fixed"
                  bottom="2rem">Save</Button>
        </form>
      </Container>
    </ChakraBaseProvider>
  );
}