import {LOCAL_STORAGE_LANGUAGE_KEY} from "../constants/local-storage-shortcuts-key";

export default function getCurrentLanguage(): Language {
  return (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || 'en') as 'it' | 'en';
}

export type Language = 'it' | 'en';