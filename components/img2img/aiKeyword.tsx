import { Theme } from "@/styles/theme/Theme";
import styled from "@emotion/styled";
import { ArrowDownload20Filled, Bot20Filled, Save20Filled, Share20Filled } from "@fluentui/react-icons";
import { useState } from "react";
import { Button } from "../common/button/style";
import Input from "../common/input";
import DownloabModal from "./downloabModal";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}
/** 키워드를 입력하고 AI에게 전송하여 사진을 받아오는 곳 */
const AIResponse = ({ canvasRef }: Props): JSX.Element => {
  const [aiKeyword, setAiKeyword] = useState<string>("");
  const [aiImg, setAiImg] = useState<string[]>([]);
  const [selectImg, setSelectImg] = useState<number>(1);
  const [openDownloadModal, setOpenDownloadModal] = useState<boolean>(false);

  return (
    <>
      <DownloabModal canvasRef={canvasRef} openDownloadModal={openDownloadModal} setOpenDownloadModal={setOpenDownloadModal} />
      <Container>
        <Input title="키워드" value={aiKeyword} setValue={setAiKeyword} text="쉼표(반점)으로 구분해 입력하세요" width="512px" />
        <Button MainColor>생성</Button>
        {
          aiImg[0] &&
          <>
            <ImgContainer>
              {aiImg.map((e, i) => {
                return (
                  <AiImage src={e} onClick={() => { setSelectImg(i + 1) }} select={selectImg == i + 1 ? true : false} />
                )
              })}
            </ImgContainer>
            <ButtonContainer>
              <Button MainColor><Share20Filled primaryFill="white" /> 업로드</Button>
              <Button><Bot20Filled /> 수정</Button>
              <Button><Save20Filled />  임시 저장</Button>
              <Button onClick={() => setOpenDownloadModal(true)}><ArrowDownload20Filled /> 파일로 다운로드</Button>
            </ButtonContainer>
          </>

        }
      </Container>
    </>
  )
}

export default AIResponse;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ImgContainer = styled.div`
  display: block;
  width: 512px;
  height: fit-content;
  >:nth-child(1){
    margin: 0px 10px 10px 0px;
  }
  >:nth-child(2){
    margin: 0px 0px 10px 10px;
  }
  >:nth-child(3){
    margin: 10px 10px 0px 0px;
  }
  >:nth-child(4){
    margin: 10px 0px 0px 10px;
  }
  `
const AiImage = styled.img<{ select: boolean }>`
  border: ${props => props.select && `4px solid ${Theme.ThePurple}`};
  border-radius:8px;
  box-shadow: ${props => props.select && `0px 0px 8px 0px rgba(0,0,0,0.5)`} ;
  width: 246px;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  >Button{
    display: flex;
    justify-content: center;
    gap: 4px;
  }
`