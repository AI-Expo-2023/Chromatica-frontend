import React, { useCallback, useEffect, useRef, useState } from "react";
import ColorPalette from "./colorPalette";
import ColorRainbox from "./colorRainbow";
import * as _ from "./style";
import Tool from "./tool";

/**마우스 좌표값 타입*/
type Coordinate = {
  x: number;
  y: number;
}

/** 그림판 */
const Canvas = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null); //ref -> 값이 변경되어도 화면은 바뀌지 않음
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined); //mouse down시 마우스 포인터 x,y 위치
  const [isPainting, setIsPainting] = useState<boolean>(false);  //현재 그림이 그려지는 상태인지 boolean으로 보여주기

  //canvas 설정 변수, 값변경 함수
  const [settingOptions, setSettingOptions] = useState<CanvasOptions>({
    color: "#000000",
    tool: true,
  });

  const [toolWidth, setToolWidth] = useState({
    brush: 5,
    eraser: 5,
  })

  const widthChange = (e: any) => {
    settingOptions.tool ?
      setToolWidth({ ...toolWidth, brush: e.target.value }) :
      setToolWidth({ ...toolWidth, eraser: e.target.value })
  }

  /**mouse 포인터의 위치를 구하는 함수 */
  const getCoordinates = (e: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    return ({
      x: e.pageX - canvas.offsetLeft,
      y: e.pageY - canvas.offsetTop
    })
  }

  /** 선 그리는 함수 */
  const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.globalCompositeOperation = "source-over";

      ctx.strokeStyle = settingOptions.color;
      ctx.lineJoin = 'round';
      ctx.lineWidth = toolWidth.brush;

      ctx.beginPath();
      ctx.moveTo(originalMousePosition.x, originalMousePosition.y);
      ctx.lineTo(newMousePosition.x, newMousePosition.y);
      ctx.closePath();

      ctx.stroke();
    }
  }

  /** 그림 지우는 함수 */
  const clearLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = settingOptions.color;
      ctx.lineJoin = 'round';
      ctx.lineWidth = toolWidth.eraser;

      ctx.beginPath();
      ctx.moveTo(originalMousePosition.x, originalMousePosition.y);
      ctx.lineTo(newMousePosition.x, newMousePosition.y);
      ctx.closePath();

      ctx.stroke();
    }
  }

  const startPaint = useCallback((e: MouseEvent) => {
    const coordinates = getCoordinates(e);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, [])

  const paint = useCallback(
    (e: MouseEvent) => {
      // e.preventDefault();   // drag 방지
      // e.stopPropagation();  // drag 방지

      if (isPainting && settingOptions.tool) {
        const newMousePosition = getCoordinates(e);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      } else if (isPainting && !settingOptions.tool) {
        const newMousePosition = getCoordinates(e);
        if (mousePosition && newMousePosition) {
          clearLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);

        }
      }
    },
    [isPainting, mousePosition]
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx?.fillStyle) {
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [])
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    // canvas.addEventListener('mouseleave', exitPaint);
    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      // canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [startPaint, paint, exitPaint]);

  const exportCanvas = () => {
    const image = canvasRef.current?.toDataURL("imgage/png");
    const link = document.createElement('a');
    link.href = image || "";
    link.download = 'chromatica.png';
    link.click();
  }

  return (
    <_.Container>
      <_.Canvas
        ref={canvasRef}
        width={500}
        height={500}
      />
      <_.Setting>
        <Tool settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
        <ColorRainbox settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
        <ColorPalette settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
        <button onClick={() => exportCanvas()}>내보내기</button>
      </_.Setting>
      <input type="range" max={100} min={1} value={settingOptions.tool ? toolWidth.brush : toolWidth.eraser} onChange={(e) => widthChange(e)} />
    </_.Container>
  )
}

export default Canvas;