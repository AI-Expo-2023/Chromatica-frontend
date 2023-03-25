import { Theme } from "@/styles/theme/Theme";
import { PaintBrush24Filled, Eraser24Filled } from "@fluentui/react-icons";
import * as _ from "./style";

const Tool = ({ settingOptions, setSettingOptions }: CanvasUseState): JSX.Element => {
  const toolChange = (type: boolean) => {
    setSettingOptions({ ...settingOptions, tool: type })
  };



  return (
    <_.SettingContainer>
      <PaintBrush24Filled onClick={() => toolChange(true)} primaryFill={settingOptions.tool ? Theme.ThePurple : "black"} />
      <Eraser24Filled onClick={() => toolChange(false)} primaryFill={settingOptions.tool ? "black" : Theme.ThePurple} />
    </_.SettingContainer>
  )
}

export default Tool;
