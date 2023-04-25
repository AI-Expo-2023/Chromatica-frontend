import styled from "@emotion/styled";
import React from "react";
import Range from "../common/range";
type Props = {
  toolWidth: ToolSize;
  setToolWidth: React.Dispatch<React.SetStateAction<ToolSize>>;
  settingOptions: CanvasOptions;
};

/** 펜과 지우개의 두께를 설정할 수 있음 */
const ToolSize = ({ toolWidth, setToolWidth, settingOptions }: Props): JSX.Element => {
  const onChangeBrush = (e: any) => {
    setToolWidth({ ...toolWidth, brush: e.target.value })
  }
  const onChangeEraser = (e: any) => {
    setToolWidth({ ...toolWidth, eraser: e.target.value })
  }
  return (
    <Container>
      {
        settingOptions.paint ? <></> :
          settingOptions.tool ?
            <Range value={toolWidth.brush} min={1} max={100} label="브러시 크기" onChange={onChangeBrush} />
            : <Range value={toolWidth.eraser} min={1} max={100} label="지우개 크기" onChange={onChangeEraser} />
      }
    </Container>
  )
}

export default ToolSize;

const Container = styled.div`
  width: 450px;
`