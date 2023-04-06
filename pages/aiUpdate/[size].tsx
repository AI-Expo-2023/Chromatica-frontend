import Canvas from "@/components/img2img/canvas";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as _ from "./style";
import CanvasSetting from "@/components/img2img/canvasSetting";
import AIResponse from "@/components/img2img/aiKeyword";
import styled from "@emotion/styled";
import Tool from "@/components/img2img/tool";
import ToolSize from "@/components/img2img/toolSize";
import { PhotoFilter24Filled } from "@fluentui/react-icons";
import FilterModal from "@/components/img2img/filterModal";

const AiUpdate = () => {
  /**여기에 사진 주소 넣어야함 */
  const imgData = "";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [settingOptions, setSettingOptions] = useState<CanvasOptions>({
    color: "#FADD75",
    tool: true,
    backgroundColor: "#f2222f"
  });
  const [toolWidth, setToolWidth] = useState<ToolSize>({
    brush: 5,
    eraser: 5,
  })
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({
    width: 512,
    height: 512
  });
  const [aiSetting, setAiSetting] = useState<AiSetting>({
    quality: 20,
    count: 4
  })
  const [filter, setFilter] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const size = `${router.query.size}`.split(".", 2);
    const width = Number(size[0]);
    const height = Number(size[1]);
    setCanvasSize({ width: width, height: height })
    const imgBackground = document.getElementById("imgBackground") as HTMLImageElement;
    if (imgBackground?.style) {
      imgBackground.style.width = `${width * 0.75}px`;
      imgBackground.style.height = `${height * 0.75}px`;
      imgBackground.src = "";
    }
    const img = new Image();
    img.src = imgData;
    img.onload = () => {
      if (canvasRef.current) {
        const canvas: HTMLCanvasElement = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
      }
    }
  }, [router.isReady]);

  return (
    <>
      <FilterModal openModadl={openModal} setOpenModal={setOpenModal} filter={filter} setFilter={setFilter} />
      <_.Conatiner>
        <PositionDiv>
          <ImgBackGround id="imgBackground" />
        </PositionDiv>
        <CanvasPaint>
          <Canvas update canvasRef={canvasRef} canvasSize={canvasSize} toolWidth={toolWidth} settingOptions={settingOptions} />
          <_.CanvasTools>
            <div>
              <Tool settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
              <_.SettingContainer onClick={() => setOpenModal(true)}><PhotoFilter24Filled primaryFill="black" />필터</_.SettingContainer>
            </div>
            <CanvasSetting settingOptions={settingOptions} canvasRef={canvasRef} aiSetting={aiSetting} setAiSetting={setAiSetting} />
          </_.CanvasTools>
          <ToolSize toolWidth={toolWidth} setToolWidth={setToolWidth} settingOptions={settingOptions} />
        </CanvasPaint>
        <AIResponse canvasRef={canvasRef} />
      </_.Conatiner>
    </>
  )
}

export default AiUpdate;
const CanvasPaint = styled(_.CanvasContainer)`
  z-index: 100;
`;
const PositionDiv = styled.div`
  position: relative;
  z-index: 0;
  background-color: red;
`;
const ImgBackGround = styled.img`
  position: absolute;
  left:20px
`;