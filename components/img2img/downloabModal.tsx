import styled from "@emotion/styled";
import React, { useState } from "react";
import { Button } from "../common/button/style";
import Modal from "../common/modal";
type Props = {
  openDownloadModal: boolean;
  setOpenDownloadModal: React.Dispatch<React.SetStateAction<boolean>>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}
const DownloabModal = ({ openDownloadModal, setOpenDownloadModal, canvasRef }: Props) => {
  const onClickToggleModal = () => {
    setOpenDownloadModal(!openDownloadModal);
  }
  const [selectKind, setSelectKind] = useState(1);

  return (
    <>
      {
        openDownloadModal && <Modal onClickToggleModal={onClickToggleModal} display="flex" flexDirection="column">
          <h1>다운로드</h1>
          <ButtonKind>
            {
              selectKind ? <>
                <Button Width="189" Gray25>PNG</Button>
                <Button Width="189" onClick={() => setSelectKind(0)}>JPEG</Button>
              </> : <>
                <Button Width="189" onClick={() => setSelectKind(1)}>PNG</Button>
                <Button Width="189" Gray25>JPEG</Button>
              </>
            }
          </ButtonKind>
          <Button MainColor>다운로드</Button>
        </Modal>
      }
    </>
  )
}

export default DownloabModal;

const ButtonKind = styled.div`
  display: flex;
  gap: 8px;
`