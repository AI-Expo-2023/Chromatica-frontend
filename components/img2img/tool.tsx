import { Theme } from "@/styles/theme/Theme";
import styled from "@emotion/styled";
import { PaintBrush24Filled, Eraser24Filled } from "@fluentui/react-icons";

/** 펜과 지우개 종류를 결정함 */
const Tool = ({ settingOptions, setSettingOptions }: CanvasUseState): JSX.Element => {
  const toolChange = (type: boolean) => {
    setSettingOptions({ ...settingOptions, tool: type })
  };

  return (
    <SettingContainer>
      <PaintBrush24Filled onClick={() => toolChange(true)} primaryFill={settingOptions.tool ? Theme.ThePurple : "black"} />
      <Eraser24Filled onClick={() => toolChange(false)} primaryFill={settingOptions.tool ? "black" : Theme.ThePurple} />
    </SettingContainer>
  )
}

export default Tool;

const SettingContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
  border: 1px solid ${Theme.Gray[5]};
  border-radius: 44px;
  width: fit-content;
`;
