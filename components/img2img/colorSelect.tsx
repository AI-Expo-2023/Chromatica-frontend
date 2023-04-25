import styled from "@emotion/styled";
import { Color24Filled } from "@fluentui/react-icons";
import { Theme } from "@/styles/theme/Theme";

type Props = {
  settingOptions: CanvasOptions;
  setSettingOptions: React.Dispatch<React.SetStateAction<CanvasOptions>>;
  background?: boolean;
}

/** 색을 직접 선택하여 원하는 색이 나오도록 하는 도구 */
const ColorSelect = ({ settingOptions, setSettingOptions, background }: Props): JSX.Element => {
  return (
    <Container>
      <Color24Filled primaryFill="black" />
      <NowColor color={background ? settingOptions.backgroundColor : settingOptions.color} />
      <input type="color"
        value={background ? settingOptions.backgroundColor : settingOptions.color}
        onClick={() => setSettingOptions({ ...settingOptions, paint: false, tool:true })}
        onChange={background ?
          (e) => { setSettingOptions({ ...settingOptions, backgroundColor: e.target.value }); }
          : (e) => { setSettingOptions({ ...settingOptions, color: e.target.value});}
        } />
    </Container>
  )
}

export default ColorSelect;

const SettingContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
  border: 1px solid ${Theme.Gray[5]};
  border-radius: 44px;
  width: fit-content;
`;

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
