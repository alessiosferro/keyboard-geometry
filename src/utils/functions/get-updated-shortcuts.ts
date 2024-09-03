import getToolMap, {Tool} from "./get-tool-map";
import actionNames from "../constants/action-names";

export default function getUpdatedShortcuts(shortcuts: Record<Tool, string>): Record<string, {
  callback: () => void,
  toolName: Tool
}> {
  const tools = (Object.keys(getToolMap()) as Tool[]);

  return tools.reduce((acc, toolName) => ({
    ...acc,
    [shortcuts[toolName]]: {
      callback: actionNames[toolName],
      toolName
    }
  }), {});
}