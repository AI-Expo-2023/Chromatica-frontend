import { ArrowDownload20Filled, Bot20Filled, Save20Filled, Share20Filled } from "@fluentui/react-icons";
import styled from "@emotion/styled";
import { Theme } from "@/styles/theme/Theme";

import { Button } from "../common/button/style";
import Input from "../common/input";
import axios from "axios";
import DownloabModal from "./downloabModal";

import { useState } from "react";
import Router from "next/router";
import { imgUrltoBase64 } from "@/util/hooks/imgUrltoBase64";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  aiSetting: AiSetting;
  update: boolean;
  canvasSize: CanvasSize;
  imgData?: string;
  filter?: number;
  getImage?: () => void;
}
const BASEURLAI = process.env.NEXT_PUBLIC_AIBASEURL;
const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

/** 키워드를 입력하고 AI에게 전송하여 사진을 받아오는 곳 */
const AIResponse = ({ getImage, filter, imgData, canvasRef, aiSetting, update, canvasSize }: Props): JSX.Element => {
  const [aiKeyword, setAiKeyword] = useState<string>("");
  const [aiImg, setAiImg] = useState<string[]>([]);
  const [selectImg, setSelectImg] = useState<number>(1);
  const [openDownloadModal, setOpenDownloadModal] = useState<boolean>(false);
  const [loading, setLoding] = useState(false);

  const makeImg = () => {
    if (aiKeyword == "") {
      alert("키워드를 입력해주세요")
    } else {

      setLoding(true);
      setAiImg([]);
      if (update) {
        const canvas = canvasRef.current;
        if (canvas) {
          handleSubmit(canvas.toDataURL())
        }
      }
      else {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (canvas) {
          const img = new Image();
          img.crossOrigin = "Anonymous";
          img.src = canvas.toDataURL("image/jpg");
          img.onload = () => {
            ctx?.drawImage(img, 0, 0);
            handleSubmit(canvas.toDataURL())
          }
        }
      }
    }
  }


  const handleSubmit = (dataURL?: string): void => {
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
    formData.append('W', String(canvasSize.width));
    formData.append('H', String(canvasSize.height));
    if (!dataURL) return;
    if (update && imgData) {
      imgUrltoBase64(imgData).then(base64 => {
        const base_img = base64.split(",")[1];
        const mask_img = String(dataURL).split(",")[1]

        formData.append('base_img', base_img);
        formData.append('mask_img', mask_img);
        formData.append('style', filterName);
        axios.post(`${BASEURLAI}/inpaint/keyword`, formData)
          .then((res) => {
            setLoding(false);
            setAiImg(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            setLoding(false);
            console.error(err);
          })
      }).catch(err => {
        console.error(err)
        setLoding(false)
      })
    } else {
      formData.append('base_img', dataURL.split(",")[1]);
      formData.append('format', "jpg");
      formData.append('samples', String(aiSetting.count));

      axios.post(`${BASEURLAI}/img2img/keyword`, formData)
        .then((res) => {
          setAiImg(res.data)
          console.log(res.data)
          setLoding(false)
        })
        .catch((err) => {
          console.error(err)
          setLoding(false)
        })
    }
  }

  const upload = () => {
    if (update) localStorage.setItem("imgData", String(aiImg));
    else localStorage.setItem("imgData", aiImg[selectImg - 1]);
    Router.push(`post`);
  }

  const saveImg = () => {
    const token = localStorage.getItem("token");
    if (!Router.ready) return;
    const { image } = Router.query;

    if (image && image != "undefined") {
      axios({
        url: `${BASEURL}/design/${image}`,
        method: 'patch',
        headers: {
          "authorization": `Bearer ${token}`
        },
        data: {
          imageURL: String(aiImg)
        }
      })
        .then((res) => {
          Router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios({
        url: `${BASEURL}/design/new`,
        method: 'post',
        headers: {
          "authorization": `Bearer ${token}`
        },
        data: {
          imageURL: update ? String(aiImg) : aiImg[selectImg - 1]
        }
      })
        .then((res) => {
          console.log(res)
          Router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const updateImg = () => {
    if (Router.pathname == '/aiUpdate' && getImage) {
      localStorage.setItem("imgData", String(aiImg));
      getImage();
      setAiImg([]);
      if (canvasRef.current) {
        const canvas: HTMLCanvasElement = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
    else {
      localStorage.setItem("imgData", aiImg[selectImg - 1]);
      Router.push(`/aiUpdate`)
    }
  }

  return (
    <>
      <DownloabModal imgData={getImage ? String(aiImg) : aiImg[selectImg - 1]} openDownloadModal={openDownloadModal} setOpenDownloadModal={setOpenDownloadModal} />
      <Container>
        <Input title="키워드" value={aiKeyword} setValue={setAiKeyword} text="쉼표(반점)으로 구분해 입력하세요" width="512px" />
        <Button MainColor onClick={() => makeImg()}>생성</Button>
        {(loading && !aiImg[0]) && <LoadingContainer>
          <LoadingImg src="/assets/loading.gif" />
          <p>이미지를 생성하고 있습니다. 잠시만 기다려주세요</p>
        </LoadingContainer>
        }
        {
          aiImg[0] &&
          <>
            {
              update ?
                <div>
                  <AiImageOne src={String(aiImg)} />
                </div> :
                <ImgContainer>
                  {aiImg.map((e, i) => {
                    if (i < aiSetting.count)
                      return (
                        <AiImage key={e} src={e} onClick={() => { setSelectImg(i + 1) }} select={selectImg == i + 1 ? true : false} />
                      )
                  })}
                </ImgContainer>
            }

            <ButtonContainer>
              <Button MainColor onClick={() => upload()}><Share20Filled primaryFill="white" />업로드</Button>
              <Button Gray5 onClick={() => updateImg()}><Bot20Filled />수정</Button>
              <Button Gray5 onClick={() => saveImg()}><Save20Filled />임시 저장</Button>
              <Button Gray5 onClick={() => setOpenDownloadModal(true)}><ArrowDownload20Filled />파일로 다운로드</Button>
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
  display: flex;
  flex-wrap: wrap;
  width: 512px;
  height: fit-content;
  gap: 20px;
`

const AiImage = styled.img<{ select: boolean }>`
  border: ${props => props.select ? `5px solid ${Theme.ThePurple}` : `${Theme.Gray[5]} 4px solid`};
  border-radius:8px;
  box-shadow: ${props => props.select && `0px 0px 8px 0px rgba(0,0,0,0.5)`} ;
  width: 246px;
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
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &>p{
    margin-top: 10px;
    font-weight: bold;
    color: ${Theme.ThePurple}
  }
`
const LoadingImg = styled.img`
  width: 100px;
`