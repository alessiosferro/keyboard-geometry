import TOOL_MAP, {Tool} from "../constants/tool-map";

export default function selectTool(tool: Tool) {
  if (!TOOL_MAP[tool]) return;

  document.getElementById(TOOL_MAP[tool].value)?.click();
}

