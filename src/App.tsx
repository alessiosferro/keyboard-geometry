import React, {
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import TOOL_MAP, {Tool} from "./utils/tool-map";
import {
  Box,
  Button,
  ChakraBaseProvider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import theme from "./theme";
import LOCAL_STORAGE_SHORTCUTS_KEY from "./utils/local-storage-shortcuts-key";
import defaultToolShortcuts from "./utils/default-tool-shortcuts";


export default function App() {
  const savedShortcuts = localStorage.getItem(LOCAL_STORAGE_SHORTCUTS_KEY);
  const [storedShortcuts, setStoredShortcuts] = useState<Record<string, string>>(savedShortcuts ? JSON.parse(savedShortcuts) : defaultToolShortcuts);
  const [filterKey, setFilterKey] = useState("");
  const [duplicateToolName, setDuplicateToolName] = useState("");

  const refs = useRef<{ toolName: string, el: HTMLDivElement }[]>([]);

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

  const handleKeyChange: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const value = [];

    event.preventDefault();

    if (event.shiftKey) {
      value.push("Shift");
    }

    if (event.altKey) {
      value.push("Alt")
    }

    if (!["Alt", "Shift"].includes(event.key)) {
      value.push(event.code.toLowerCase().slice(-1))
    }

    event.currentTarget.value = value.join('+');
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const storedShortcut = Object.entries(storedShortcuts).find(([, shortcut]) => shortcut === event.currentTarget.value);
    if (!storedShortcut) return;
    const [toolName] = storedShortcut;
    setDuplicateToolName(toolName);
  }

  const closeModal = () => {
    setDuplicateToolName("");
  }

  return (
    <ChakraBaseProvider theme={theme}>
      <Modal onClose={closeModal} isOpen={duplicateToolName !== ""}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Confirm new shortcut</ModalHeader>
          <ModalBody>
            The shortcut entered is already assigned to {duplicateToolName}. Are you sure you want to reset
            the {duplicateToolName} shortcut?
          </ModalBody>
          <ModalFooter>
            <Button>Abort</Button>
            <Button onClick={() => {
              const element = (refs.current.find(ref => ref.toolName)?.el as HTMLInputElement);

              if (!element) return;

              element.value = "";

              closeModal()
            }}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
              <Flex ref={(el) => el && refs.current.push({el, toolName})} key={toolName} as="label"
                    direction="column">
                <Heading mb="1rem">{toolName}</Heading>
                <Text mb=".8rem">{description}</Text>
                <Input onBlur={handleBlur} onKeyDown={handleKeyChange} name={toolName} defaultValue={shortcut}/>
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