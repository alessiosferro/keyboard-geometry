import getToolMap, {Tool} from "./get-tool-map";

export default function selectTool(tool: Tool) {
  if (!getToolMap()[tool]) return;

  document.getElementById(getToolMap()[tool].value)?.click();
}

