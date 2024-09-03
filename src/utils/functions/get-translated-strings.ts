import getCurrentLanguage from "./get-current-language";
import strings from "../constants/strings";

export default function getTranslatedStrings() {
  const language = getCurrentLanguage();

  return strings[language];
}