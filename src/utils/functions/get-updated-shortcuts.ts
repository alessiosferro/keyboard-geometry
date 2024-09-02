import TOOL_MAP, {Tool} from "../constants/tool-map";
import actionNames from "../constants/action-names";
import {Shortcuts} from "../constants/shortcuts";

export default function getUpdatedShortcuts(shortcuts: Record<Tool, string>): Shortcuts {
  const tools = (Object.keys(TOOL_MAP) as Tool[]);

  return tools.reduce((acc, toolName) => ({
    ...acc,
    [shortcuts[toolName]]: {
      callback: actionNames[toolName],
      toolName
    }
  }), {});
}