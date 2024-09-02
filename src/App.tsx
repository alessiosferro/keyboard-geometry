import React, {FocusEventHandler, KeyboardEventHandler, useEffect, useMemo, useRef, useState} from 'react';
import TOOL_MAP, {Tool} from "./utils/tool-map";
import {Box, ChakraBaseProvider, Flex, FormControl, FormLabel, Heading, Input, Text} from "@chakra-ui/react";
import theme from "./utils/theme";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./utils/local-storage-shortcuts-key";
import defaultToolShortcuts from "./utils/default-tool-shortcuts";
import DuplicateShortcutModal from "./components/DuplicateShortcutModal";


export default function App() {
  const savedShortcuts = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY);
  const [storedShortcuts, setStoredShortcuts] = useState<Record<string, string>>(savedShortcuts ? JSON.parse(savedShortcuts) : defaultToolShortcuts);
  const [filterKey, setFilterKey] = useState("");
  const [duplicateTool, setDuplicateTool] = useState<{ toolName: string, shortcut: string } | null>(null);

  const refs = useRef<HTMLInputElement[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const filteredShortcuts = useMemo(() => Object.entries(storedShortcuts).filter(([toolName]) =>
    toolName.toLowerCase().includes(filterKey.toLowerCase()))
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

  const handleSave = (form: HTMLFormElement, reloadPage: boolean = true) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      const activeTab = tabs[0];

      void chrome.tabs.sendMessage(activeTab.id!, {
        action: "updateLocalStorage",
        value: JSON.stringify(data)
      })
    });

    localStorage.setItem(LOCAL_STORAGE_SHORTCUTS_KEY, JSON.stringify(data));
    setStoredShortcuts(data as Record<string, string>);

    if (reloadPage) {
      location.reload();
    }
  }

  const handleKeyChange: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const value = [];

    event.preventDefault();

    if (event.altKey) {
      value.push("Alt")
    }

    if (event.shiftKey) {
      value.push("Shift");
    }

    if (!["Alt", "Shift"].includes(event.key)) {
      value.push(event.code.toLowerCase().slice(-1))
    }

    event.currentTarget.value = value.join('+');
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const duplicateStoredShortcut = Object.entries(storedShortcuts).find(([toolName, shortcut]) =>
      toolName !== event.currentTarget.name &&
      shortcut === event.currentTarget.value
    );

    if (!duplicateStoredShortcut) {
      return handleSave(formRef.current!);
    }

    setDuplicateTool({
      toolName: event.currentTarget.name,
      shortcut: event.currentTarget.value
    });
  }

  const closeModal = () => {
    setDuplicateTool(null);
  }

  const duplicate = (refs.current.find(ref =>
    ref.name !== duplicateTool?.toolName &&
    ref.value === duplicateTool?.shortcut
  ));

  const handleCancelShortcut = () => {
    if (!duplicate) return;

    duplicate.value = "";
    handleSave(formRef.current!, false);
    closeModal();
  }

  const handleAbort = () => {
    const ref = refs.current.find(ref => ref.name === duplicateTool?.toolName);

    if (!ref) return;

    ref.value = Object.entries(storedShortcuts).find(([toolName]) => toolName === ref.name)?.[1] || "";
    handleSave(formRef.current!, false);
    closeModal();
  }

  return (
    <ChakraBaseProvider theme={theme}>

      <DuplicateShortcutModal
        onAbort={handleAbort}
        onConfirm={handleCancelShortcut}
        description={`The shortcut entered is already assigned to "${duplicate?.name}". Are you sure you want to reset
          the "${duplicate?.name}" shortcut?`}
        isOpen={!!duplicateTool}
        onClose={closeModal}
      />

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

        <Flex as="form" ref={formRef} direction="column" gap="2rem">
          {Object.entries(filteredShortcuts).map(([toolName, {shortcut, description}]) => (
            <Flex key={toolName}
                  direction="column">
              <Heading id={`${toolName}-label`} mb="1rem">{toolName}</Heading>
              <Text id={`${toolName}-description`} mb=".8rem">{description}</Text>
              <Input ref={(el) => el && refs.current.push(el)}
                     aria-labelledby={`${toolName}-label`}
                     aria-describedby={`${toolName}-description`}
                     onBlur={handleBlur}
                     onKeyDown={handleKeyChange}
                     name={toolName}
                     defaultValue={shortcut}/>
            </Flex>
          ))}
        </Flex>
      </Box>
    </ChakraBaseProvider>
  );
}