import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import getToolMap, {Tool} from "./utils/functions/get-tool-map";
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
import DuplicateShortcutModal from "./components/DuplicateShortcutModal";
import getShortcutString from "./utils/functions/get-shortcut-string";

import getDefaultToolShortcuts from "./utils/functions/get-default-tool-shortcuts";
import getStoredShortcuts from "./utils/functions/get-stored-shortcuts";
import getShortcutsLanguageKey from "./utils/functions/get-shortcuts-language-key";
import getCurrentLanguage from "./utils/functions/get-current-language";
import getTranslatedStrings from "./utils/functions/get-translated-strings";

export default function App() {
  const savedShortcuts = getStoredShortcuts();
  const language = getCurrentLanguage();
  const strings = getTranslatedStrings();
  const [storedShortcuts, setStoredShortcuts] = useState<Record<string, string>>(savedShortcuts ? JSON.parse(savedShortcuts) : getDefaultToolShortcuts());

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
          ...getToolMap()[toolName as Tool],
          shortcut
        },
      }), {} as Record<Tool, {
        value: string,
        description: string,
        shortcut: string
      }>)
  }, [storedShortcuts, searchByShortcut, filterShortcut, filterKey]);

  useEffect(() => {
    const storedItems = getStoredShortcuts();
    if (!storedItems) return;
    setStoredShortcuts(JSON.parse(storedItems));
  }, [])

  const handleSave = (form: HTMLFormElement, reloadPage = true) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      const activeTab = tabs[0];

      void chrome.tabs.sendMessage(activeTab.id!, {
        action: "updateLocalStorage",
        value: JSON.stringify(Object.entries({
          ...storedShortcuts,
          ...data
        }).reduce((acc, [key, value]) => ({...acc, [key]: (!!storedShortcuts[key] && !data[key]) ? "" : value}), {}))
      })
    });

    localStorage.setItem(getShortcutsLanguageKey(), JSON.stringify({
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

    chrome.tabs.query({active: true, currentWindow: true}, async function (tabs) {
      const activeTab = tabs[0];

      await chrome.tabs.sendMessage(activeTab.id!, {
        action: "changeLanguage",
        value: event.target.value
      })

      const storedShortcuts = getStoredShortcuts();
      const shortcuts = storedShortcuts ? JSON.parse(storedShortcuts) : getDefaultToolShortcuts();
      setStoredShortcuts(shortcuts);
    });
  }

  return (
    <ChakraBaseProvider theme={theme}>

      <DuplicateShortcutModal
        onAbort={handleAbort}
        onConfirm={handleCancelShortcut}
        description={strings.duplicateShortcut(duplicate?.name || "")}
        title={strings.duplicateShortcutTitle}
        isOpen={!!duplicateTool}
        onClose={closeModal}
      />

      <Box m="1rem 2rem">
        <Heading mb="1rem" fontSize="2.4rem" as="h1">{strings.copy.title}</Heading>

        <Text my="2rem">
          {strings.copy.welcome}
          <br/><br/>
          {strings.copy.description}
        </Text>

        <FormControl mb="1rem">
          <FormLabel fontSize="1.6rem" mb=".8rem">{strings.label.search}</FormLabel>
          <Input
            {...(searchByShortcut ? {
              onKeyDown: (e) => {
                handleKeyChange(e);
                setFilterShortcut(e.currentTarget.value);
              },
              value: filterShortcut
            } : {
              onChange: e => setFilterKey(e.target.value),
              value: filterKey
            })}
            placeholder={strings.label.searchTool}/>
        </FormControl>

        <Checkbox mb="2rem"
                  fontSize="1.6rem"
                  onChange={ev => setSearchByShortcut(ev.target.checked)}
                  checked={searchByShortcut}>
          {strings.label.searchByShortcut}
        </Checkbox>

        <FormControl sx={{".chakra-select__wrapper": {maxWidth: "13rem"}}}>
          <FormLabel fontSize="1.6rem" mb=".8rem">{strings.label.selectLanguage}</FormLabel>
          <Select mb="2rem"
                  onChange={handleChangeLanguage}
                  defaultValue={language}
          >
            <option value="it">{strings.language.italian}</option>
            <option value="en">{strings.language.english}</option>
          </Select>
        </FormControl>

        <Box as="hr" my="3rem"/>

        <Flex as="form" ref={formRef} direction="column" gap="2rem">
          {Object.entries(filteredShortcuts).map(([toolName, {shortcut, description}]) => (
            <Flex key={toolName}
                  direction="column">
              <Heading size="h3" id={`${toolName}-label`} mb="1rem">{toolName}</Heading>
              {description && <Text id={`${toolName}-description`} mb=".8rem">{description.split(".")[1]}</Text>}
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