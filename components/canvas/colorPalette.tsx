import styled from "@emotion/styled"
import * as _ from "./style";


const ColorPalette = ({ settingOptions, setSettingOptions }: CanvasUseState): JSX.Element => {
  const onClick = (data: string) => {
    setSettingOptions({ ...settingOptions, color: data, tool: true })
  }
  return (
    <_.SettingContainer>
      <SimpleColor onClick={() => onClick("#404040")} color="#404040" />
      <SimpleColor onClick={() => onClick("#DA5858")} color="#DA5858" />
      <SimpleColor onClick={() => onClick("#ED9454")} color="#ED9454" />
      <SimpleColor onClick={() => onClick("#FADD75")} color="#FADD75" />
      <SimpleColor onClick={() => onClick("#3FC661")} color="#3FC661" />
      <SimpleColor onClick={() => onClick("#497EE9")} color="#497EE9" />
      <SimpleColor onClick={() => onClick("#9747FF")} color="#9747FF" />
    </_.SettingContainer>
  )
}

export default ColorPalette;

const SimpleColor = styled.button<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: 0.1s;
  border: none;

  background-color: ${props => props.color};
  &:hover{
    scale: 1.1;
  }
`