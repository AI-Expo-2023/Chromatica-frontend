import { Theme } from "@/styles/theme/Theme"
import styled from "@emotion/styled"

/** 색을 보고 직접 눌러 선택할 수 있는 도구창 */
const ColorPalette = ({ settingOptions, setSettingOptions }: CanvasUseState): JSX.Element => {
  const onClick = (data: string) => {
    setSettingOptions({ ...settingOptions, color: data, tool: true, paint: false })
  }
  const color = ["#404040", "#DA5858", "#ED9454", "#FADD75", "#3FC661", "#497EE9", "#9747FF"];

  return (
    <SettingContainer>
      {
        color.map((e) => {
          return <SimpleColor onClick={() => onClick(e)} color={e} />
        })
      }
    </SettingContainer>
  )
}

export default ColorPalette;


const SettingContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
  border: 1px solid ${Theme.Gray[5]};
  border-radius: 44px;
  width: fit-content;
`;

const SimpleColor = styled.button<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: 0.1s;
  border: none;
  background-color: red;
  background-color: ${props => props.color};
  &:hover{
    scale: 1.1;
  }
`