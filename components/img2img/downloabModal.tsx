import { imgUrltoBase64 } from "@/util/hooks/imgUrltoBase64";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Button } from "../common/button/style";
import Modal from "../common/modal";
type Props = {
  openDownloadModal: boolean;
  setOpenDownloadModal: React.Dispatch<React.SetStateAction<boolean>>;
  imgData?: string;
};

const DownloabModal = ({ openDownloadModal, setOpenDownloadModal, imgData }: Props) => {
  const onClickToggleModal = () => {
    setOpenDownloadModal(!openDownloadModal);
  }
  const [selectKind, setSelectKind] = useState(1);

  const downLoad = () => {
    imgUrltoBase64(imgData!).then(base64 => {
      const a = document.createElement("a");
        a.href = base64;
        if (selectKind == 0) {
          a.download = "Chromatica-image.jpg";
        } else {
          a.download = "Chromatica-image.png";
        }
        a.click();
        onClickToggleModal();
    }).catch(err => {
      console.error(err)
    })
  }

  return (
    <>
      {
        openDownloadModal && <Modal onClickToggleModal={onClickToggleModal} display="flex" flexDirection="column">
          <h1>다운로드</h1>
          <ButtonKind>
            {
              selectKind ? <>
                <Button Width="189" Gray25>PNG</Button>
                <Button Width="189" Gray5 onClick={() => setSelectKind(0)}>JPG</Button>
              </> : <>
                <Button Width="189" Gray5 onClick={() => setSelectKind(1)}>PNG</Button>
                <Button Width="189" Gray25>JPEG</Button>
              </>
            }
          </ButtonKind>
          <Button MainColor onClick={() => downLoad()}>다운로드</Button>
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