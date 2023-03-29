import Modal from "@/components/common/modal";
import Range from "@/components/common/range";
import { Button } from "../common/button/style";
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
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

  const onChangeWidth = (e: any) => {
    setCanvasSize({ ...canvasSize, width: e.target.value })
  }
  const onChangeHeight = (e: any) => {
    setCanvasSize({ ...canvasSize, height: e.target.value })
  }

  return (
    <>
      {
        isOpenModal &&
        <Modal onClickToggleModal={onClickToggleModal} width="450px" display="flex" gap="32px" flexDirection="column" background>
          <Title>
            <h1>캠버스 설정</h1>
            <p>스케치할 그림판의 크기, 컬러 설정</p>
          </Title>
          <SizeContainer>
            <Range onChange={onChangeWidth} min={512} max={1024} label="너비" value={canvasSize.width} />
            <SizeSelect>
              <Button Black onClick={() => setCanvasSize({ ...canvasSize, width: 512 })}>512px</Button>
              <Button Black onClick={() => setCanvasSize({ ...canvasSize, width: 768 })}>768px</Button>
              <Button Black onClick={() => setCanvasSize({ ...canvasSize, width: 1024 })}>1024px</Button>
            </SizeSelect>
          </SizeContainer>
          <SizeContainer>
            <Range onChange={onChangeHeight} min={512} max={1024} label="높이" value={canvasSize.height} />
            <SizeSelect>
              <Button Black onClick={() => setCanvasSize({ ...canvasSize, height: 512 })}>512px</Button>
              <Button Black onClick={() => setCanvasSize({ ...canvasSize, height: 768 })}>768px</Button>
              <Button Black onClick={() => setCanvasSize({ ...canvasSize, height: 1024 })}>1024px</Button>
            </SizeSelect>
          </SizeContainer>
          <ColorContainer>
            <p>배경색</p>
            <ColorSelect settingOptions={settingOptions} setSettingOptions={setSettingOptions} background />
          </ColorContainer>
          <Button MainColor onClick={() => setIsOpenModal(false)}>확인</Button>
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
  gap: 4px;
  align-items: center;
  >p{
    color: ${Theme.Gray[50]};
    font-weight: bold;
    font-size: 18px;
  }
`