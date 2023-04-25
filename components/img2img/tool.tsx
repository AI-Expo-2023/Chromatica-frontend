import { Theme } from "@/styles/theme/Theme";
import styled from "@emotion/styled";
import { PaintBrush24Filled, Eraser24Filled, PaintBucket24Filled } from "@fluentui/react-icons";

/** 펜과 지우개 종류를 결정함 */
const Tool = ({ settingOptions, setSettingOptions }: CanvasUseState): JSX.Element => {
  const toolChange = (type: boolean) => {
    setSettingOptions({ ...settingOptions, tool: type, paint: false })
  };

  return (
    <SettingContainer>
      <PaintBrush24Filled onClick={() => toolChange(true)} primaryFill={settingOptions.paint ? "black" : settingOptions.tool ? Theme.ThePurple : "black"} />
      <Eraser24Filled onClick={() => toolChange(false)} primaryFill={settingOptions.paint ? "black" : settingOptions.tool ? "black" : Theme.ThePurple} />
      {/* <PaintBucket24Filled onClick={() => setSettingOptions({ ...settingOptions, paint: true })} primaryFill={settingOptions.paint ? Theme.ThePurple : "black"} /> */}
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
