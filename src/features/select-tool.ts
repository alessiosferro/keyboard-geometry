import TOOL_MAP, {Tool} from "../utils/tool-map";

export default function selectTool(tool: Tool) {
  document.getElementById(TOOL_MAP[tool].value).click();
}

