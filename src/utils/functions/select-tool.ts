import TOOL_MAP, {Tool} from "../constants/tool-map";

export default function selectTool(tool: Tool) {
  document.getElementById(TOOL_MAP[tool].value)?.click();
}

