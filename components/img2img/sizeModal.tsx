import Modal from "@/components/common/modal";
import Range from "@/components/common/range";
import { Button } from "../common/button/style";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { Theme } from "@/styles/theme/Theme";
import ColorSelect from "./colorSelect";

type Props = {
  canvasSize: CanvasSize;
  setCanvasSize: React.Dispatch<React.SetStateAction<CanvasSize>>;
  settingOptions: CanvasOptions;
  setSettingOptions: React.Dispatch<React.SetStateAction<CanvasOptions>>;
}

/**처음 캠버스를 만들때 너비, 높이, 배경색을 받는 모달 */
const SizeModal = ({ canvasSize, setCanvasSize, settingOptions, setSettingOptions }: Props): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const onClickToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [sizeData, setSizeData] = useState({
    width: 512,
    height: 512
  });

  const [colorData, setColorData] = useState<CanvasOptions>({
    color: "#000000",
    tool: true,
    paint: false,
    backgroundColor: "#ffffff"
  })

  const onChangeWidth = (e: any) => {
    setSizeData({ ...sizeData, width: e.target.value })
  }
  const onChangeHeight = (e: any) => {
    setSizeData({ ...sizeData, height: e.target.value })
  }


  return (
    <>
      {
        isOpenModal &&
        <Modal onClickToggleModal={onClickToggleModal} width="450px" display="flex" gap="32px" flexDirection="column" background>
          <Title>
            <h1>캔버스 설정</h1>
            <p>스케치할 그림판의 크기, 컬러 설정</p>
          </Title>
          <SizeContainer>
            <Range onChange={onChangeWidth} min={512} max={1024} label="너비" value={sizeData.width} />
            <SizeSelect>
              <Button Black onClick={() => setSizeData({ ...sizeData, width: 512 })}>512px</Button>
              <Button Black onClick={() => setSizeData({ ...sizeData, width: 768 })}>768px</Button>
              <Button Black onClick={() => setSizeData({ ...sizeData, width: 1024 })}>1024px</Button>
            </SizeSelect>
          </SizeContainer>
          <SizeContainer>
            <Range onChange={onChangeHeight} min={512} max={1024} label="높이" value={sizeData.height} />
            <SizeSelect>
              <Button Black onClick={() => setSizeData({ ...sizeData, height: 512 })}>512px</Button>
              <Button Black onClick={() => setSizeData({ ...sizeData, height: 768 })}>768px</Button>
              <Button Black onClick={() => setSizeData({ ...sizeData, height: 1024 })}>1024px</Button>
            </SizeSelect>
          </SizeContainer>
          <GapBox>
            <ColorContainer>
              <p>배경색</p>
              <ColorSelect settingOptions={colorData} setSettingOptions={setColorData} background />
            </ColorContainer>
            <ColorContainer>
              <p>예상 캔버스</p>
              <TemBox width={sizeData.width} height={sizeData.height} color={colorData.backgroundColor} />
            </ColorContainer>
          </GapBox>
          <Button MainColor onClick={() => { setIsOpenModal(false); setCanvasSize({ ...sizeData }); setSettingOptions({ ...colorData }) }}>확인</Button>
        </Modal>
      }
    </>
  )
}

export default SizeModal;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const SizeContainer = styled.div`
  display: flex;
  flex-direction:column;
  gap: 8px; 
`
const SizeSelect = styled.div`
  display: flex;
  gap: 8px;
`
const ColorContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  >p{
    color: ${Theme.Gray[50]};
    font-weight: bold;
    font-size: 18px;
  }
`;

const GapBox = styled.div`
  display: flex;
  height: 102.4px;
  align-items: center;
  gap: 60px
`

const TemBox = styled.div<{ width: number, height: number, color: string }>`
  width: ${props => `${props.width * 0.1}px`};
  height: ${props => `${props.height * 0.1}px`};
  background-color: ${props => `${props.color}`};
  border-radius: 4px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
`