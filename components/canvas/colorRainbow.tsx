import styled from "@emotion/styled";
import { SettingContainer } from "./style";
import { Color24Filled } from "@fluentui/react-icons";
import { Theme } from "@/styles/theme/Theme";

const ColorRainbox = ({ settingOptions, setSettingOptions }: CanvasUseState): JSX.Element => {
  return (
    <Container>
      <Color24Filled primaryFill="black" />
      <NowColor color={settingOptions.color} />
      <input type="color" value={settingOptions.color} onChange={(e) => setSettingOptions({ ...settingOptions, color: e.target.value, tool: true })} />
    </Container>
  )
}

export default ColorRainbox;

const Container = styled(SettingContainer)`
  >input{
    position: absolute;
    width: 58px;
    height: 24px;
    border-radius: 50%;
    opacity: 0;
  }
`
const NowColor = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 1px solid ${Theme.Gray[5]};
`