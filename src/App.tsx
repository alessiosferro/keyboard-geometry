import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import TOOL_MAP, {Tool} from "./utils/constants/tool-map";
import {
  Box,
  ChakraBaseProvider,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text
} from "@chakra-ui/react";
import theme from "./utils/constants/theme";
import {LOCAL_STORAGE_LANGUAGE_KEY} from "./utils/constants/local-storage-shortcuts-key";
import defaultToolShortcuts from "./utils/constants/default-tool-shortcuts";
import DuplicateShortcutModal from "./components/DuplicateShortcutModal";
import getShortcutString from "./utils/functions/get-shortcut-string";
import {SHORTCUTS} from "./popup";

export default function App() {
  const savedShortcuts = localStorage.getItem(SHORTCUTS);
  const language = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || "en";
  const [storedShortcuts, setStoredShortcuts] = useState<Record<string, string>>(savedShortcuts ? JSON.parse(savedShortcuts) : defaultToolShortcuts);

  const [filterKey, setFilterKey] = useState("");
  const [filterShortcut, setFilterShortcut] = useState("");

  const [searchByShortcut, setSearchByShortcut] = useState(false);
  const [duplicateTool, setDuplicateTool] = useState<{ toolName: string, shortcut: string } | null>(null);

  const refs = useRef<HTMLInputElement[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const filteredShortcuts = useMemo(() => {
    return Object.entries(storedShortcuts).filter(([toolName, shortcut]) => {
      if (searchByShortcut) {
        return !filterShortcut || shortcut === filterShortcut;
      }

      return toolName.toLowerCase().includes(filterKey.toLowerCase())
    })
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
      }>)
  }, [storedShortcuts, searchByShortcut, filterShortcut, filterKey]);

  useEffect(() => {
    const storedItems = localStorage.getItem(SHORTCUTS);
    if (!storedItems) return;
    setStoredShortcuts(JSON.parse(storedItems));
  }, [])

  const handleSave = (form: HTMLFormElement, reloadPage = true) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      const activeTab = tabs[0];

      void chrome.tabs.sendMessage(activeTab.id!, {
        action: "updateLocalStorage",
        value: JSON.stringify({
          ...storedShortcuts,
          ...data
        })
      })
    });

    localStorage.setItem(SHORTCUTS, JSON.stringify({
      ...storedShortcuts,
      ...data
    }));

    setStoredShortcuts({
      ...storedShortcuts,
      ...data
    } as Record<string, string>);

    if (reloadPage) {
      location.reload();
    }
  }

  const handleKeyChange: KeyboardEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    if (event.key === 'Enter') {
      return;
    }

    if (['Escape', 'Backspace'].includes(event.key)) {
      event.currentTarget.value = "";
      return;
    }

    event.currentTarget.value = getShortcutString(event);
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

  const handleChangeLanguage: ChangeEventHandler<HTMLSelectElement> = event => {
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, event.target.value);
    location.reload();

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      const activeTab = tabs[0];

      void chrome.tabs.sendMessage(activeTab.id!, {
        action: "changeLanguage",
        value: event.target.value
      })
    });
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
        <Heading mb="1rem" fontSize="2.4rem" as="h1">Geogebra Shortcuts System</Heading>

        <Text my="2rem">
          Welcome to the Geogebra Shortcuts System extension!
          <br/><br/>
          Changing a shortcut is very simple: select an input and press the combination of keys that you like!
          You can use also use special keys such as "Shift", "Control", "Meta" (the "Command" key on Mac)
          and "Alt" (or "Option" on Mac). After you type the combination of your choice, simply click away
          from the input and the shortcut will be saved automagically! Also the website will reflect your changes
          by reloading automatically.
        </Text>

        <FormControl mb="1rem">
          <FormLabel fontSize="1.6rem" mb=".8rem">Search</FormLabel>
          <Input
            {...(searchByShortcut ? {
              onKeyDown: (e) => {
                handleKeyChange(e);
                setFilterShortcut(e.currentTarget.value);
                console.log(e.currentTarget.value);
              },
              value: filterShortcut
            } : {
              onChange: e => setFilterKey(e.target.value),
              value: filterKey
            })}
            placeholder="Search tool..."/>
        </FormControl>

        <Checkbox mb="2rem" fontSize="1.6rem" onChange={ev => setSearchByShortcut(ev.target.checked)}
                  checked={searchByShortcut}>
          Search by shortcut
        </Checkbox>

        <Select mb="2rem" onChange={handleChangeLanguage} defaultValue={language} placeholder='Select language'>
          <option value="it">IT</option>
          <option value="en">EN</option>
        </Select>

        <Box as="hr" my="3rem"/>

        <Flex as="form" ref={formRef} direction="column" gap="2rem">
          {Object.entries(filteredShortcuts).map(([toolName, {shortcut, description}]) => (
            <Flex key={toolName}
                  direction="column">
              <Heading size="h3" id={`${toolName}-label`} mb="1rem">{toolName}</Heading>
              <Text id={`${toolName}-description`} mb=".8rem">{description.split(".")[1]}</Text>
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