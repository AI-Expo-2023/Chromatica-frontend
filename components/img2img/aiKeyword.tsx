import { ArrowDownload20Filled, Bot20Filled, Save20Filled, Share20Filled } from "@fluentui/react-icons";
import styled from "@emotion/styled";
import { Theme } from "@/styles/theme/Theme";

import { Button } from "../common/button/style";
import Input from "../common/input";
import axios from "axios";
import DownloabModal from "./downloabModal";

import { useState } from "react";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  aiSetting: AiSetting;
  update: boolean;
  canvasSize: CanvasSize;
  imgData?: string;
  filter?: number;
}
// const BASEURL = process.env.REACT_APP_AIBASEURL;
const BASEURL = "http://192.168.0.113:3333";

/** 키워드를 입력하고 AI에게 전송하여 사진을 받아오는 곳 */
const AIResponse = ({ filter, imgData, canvasRef, aiSetting, update, canvasSize }: Props): JSX.Element => {
  const [aiKeyword, setAiKeyword] = useState<string>("");
  const [aiImg, setAiImg] = useState<string[]>([]);
  const [selectImg, setSelectImg] = useState<number>(1);
  const [openDownloadModal, setOpenDownloadModal] = useState<boolean>(false);

  const makeImg = () => {
    if (aiKeyword == "") {
      alert("키워드를 입력해주세요")
    } else {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = new Image();
      if (canvas) {
        img.src = canvas.toDataURL();
        img.onload = () => {
          ctx?.drawImage(img, 0, 0);
          handleSubmit(canvas.toDataURL())
        }
      }


      

      alert(`열심히 AI가 이미지를 만들고 있어요!
      최대한 빨리 만들어 볼게요😊`)
    }
  }

  const handleSubmit = (dataURL: string): void => {
    let filterName = 'original';
    if (filter == 2) {
      filterName = 'black'
    } else if (filter == 3) {
      filterName = 'blue'
    } else if (filter == 4) {
      filterName = 'ruddy'
    };

    const formData = new FormData();
    formData.append('steps', String(aiSetting.quality));
    formData.append('keyword', aiKeyword);
    if (update) {
      formData.append('base_img', dataURL);
      formData.append('mask_img', String(imgData));
      formData.append('style', filterName);

      axios.post(`${BASEURL}/inpaint/keyword`, formData)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      console.log(dataURL)
      formData.append('base_img', dataURL);
      formData.append('W', String(canvasSize.width));
      formData.append('H', String(canvasSize.height));
      formData.append('format', "png");
      formData.append('samples', String(aiSetting.count));

      axios.post(`${BASEURL}/img2img/keyword`, formData)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  const upload = () => {

  }

  const saveImg = () => {
    // axios({
    //   url: '/test',
    //   method: 'post',
    //   data: {
    //     name: 'veneas'
    //   }
    // })
    //   .then(function a(response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  const updateImg = () => {

    // localStorage.setItem("imgData", aiImg[selectImg-1]);
  }
  return (
    <>
      <DownloabModal imgData={aiImg[selectImg - 1]} openDownloadModal={openDownloadModal} setOpenDownloadModal={setOpenDownloadModal} />
      <Container>
        <Input title="키워드" value={aiKeyword} setValue={setAiKeyword} text="쉼표(반점)으로 구분해 입력하세요" width="512px" />
        <Button MainColor onClick={() => makeImg()}>생성</Button>
        {
          aiImg[0] &&
          <>
            {
              update ?
                <div>
                  <AiImageOne src={aiImg[0]} />
                </div> :
                <ImgContainer>
                  {aiImg.map((e, i) => {
                    return (
                      <AiImage src={e} onClick={() => { setSelectImg(i + 1) }} select={selectImg == i + 1 ? true : false} />
                    )
                  })}
                </ImgContainer>
            }

            <ButtonContainer>
              <Button MainColor onClick={() => upload()}><Share20Filled primaryFill="white" />업로드</Button>
              <Button onClick={() => updateImg()}><Bot20Filled />수정</Button>
              <Button onClick={() => saveImg()}><Save20Filled />임시 저장</Button>
              <Button onClick={() => setOpenDownloadModal(true)}><ArrowDownload20Filled />파일로 다운로드</Button>
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
  max-width: 246px;
  max-height: 246px;
`

const AiImageOne = styled.img`
  border: 4px solid ${Theme.ThePurple};
  border-radius:8px;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
  max-width: 512px;
  max-height: 512px;
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