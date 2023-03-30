import Canvas from "@/components/img2img/canvas";
import { Eraser24Filled } from "@fluentui/react-icons";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as _ from "./style";
import { Theme } from "@/styles/theme/Theme";
import CanvasSetting from "@/components/img2img/canvasSetting";
import Range from "@/components/common/range";
import AIResponse from "@/components/img2img/aiKeyword";

const AiUpdate = () => {
  /**여기에 사진 주소 넣어야함 */
  const imgData = "";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [settingOptions, setSettingOptions] = useState<CanvasOptions>({
    color: "#000000",
    tool: false,
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

  const onChangeWidth = (e: any) => {
    setToolWidth({ ...toolWidth, eraser: e.target.value })
  }

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const size = `${router.query.size}`.split(".", 2);
    const width = Number(size[0]);
    const height = Number(size[1]);
    setCanvasSize({ width: width, height: height })

    const img = new Image();
    img.src = imgData;
    img.onload = () => {
      if (canvasRef.current) {
        const canvas: HTMLCanvasElement = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
      }
    }
  }, [router.isReady])

  return (
    <_.Conatiner>
      <_.CanvasContainer>
        <Canvas update canvasRef={canvasRef} canvasSize={canvasSize} toolWidth={toolWidth} settingOptions={settingOptions} />
        <_.CanvasTools>
          <_.SettingContainer><Eraser24Filled primaryFill={Theme.ThePurple} /></_.SettingContainer>
          <CanvasSetting update canvasRef={canvasRef} settingOptions={settingOptions} aiSetting={aiSetting} setAiSetting={setAiSetting} />
        </_.CanvasTools>
        <Range onChange={onChangeWidth} value={toolWidth.eraser} min={1} max={100} label="지우개" />
      </_.CanvasContainer>
      <AIResponse canvasRef={canvasRef} />
    </_.Conatiner>
  )
}

export default AiUpdate;
