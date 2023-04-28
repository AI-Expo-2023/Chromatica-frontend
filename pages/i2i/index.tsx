import * as _ from "./style";
import { useRef, useState } from "react";
import AIResponse from "@/components/img2img/aiKeyword";
import Canvas from "@/components/img2img/canvas";
import CanvasSetting from "@/components/img2img/canvasSetting";
import ColorSelect from "@/components/img2img/colorSelect";
import ToolSize from "@/components/img2img/toolSize";
import ColorPalette from "@/components/img2img/colorPalette";
import Tool from "@/components/img2img/tool";
import SizeModal from "@/components/img2img/sizeModal";

const I2i = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [settingOptions, setSettingOptions] = useState<CanvasOptions>({
    color: "#000000",
    tool: true,
    paint: false,
    backgroundColor: "#ffffff"
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
    count: 2
  })

  return (
    <>
      <SizeModal canvasSize={canvasSize} setCanvasSize={setCanvasSize} settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
      <_.DisplayBox>
        <_.Container>
          <div>
            <_.CanvasContainer>
              <div>
                <Canvas canvasRef={canvasRef} settingOptions={settingOptions} toolWidth={toolWidth} canvasSize={canvasSize} />
              </div>
              <_.CanvasTools>
                <div>
                  <Tool settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
                  <ColorSelect settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
                  <ColorPalette settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
                </div>
                <CanvasSetting settingOptions={settingOptions} canvasRef={canvasRef} aiSetting={aiSetting} setAiSetting={setAiSetting} />
              </_.CanvasTools>
              <ToolSize toolWidth={toolWidth} setToolWidth={setToolWidth} settingOptions={settingOptions} />
            </_.CanvasContainer>
            <AIResponse canvasSize={canvasSize} aiSetting={aiSetting} canvasRef={canvasRef} update={false} />
          </div>
        </_.Container>
      </_.DisplayBox>
    </>
  )
}

export default I2i;
