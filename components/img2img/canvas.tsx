import React, { useCallback, useEffect, useState } from "react";
import * as _ from "./style";

/**마우스 좌표값 타입*/
type Coordinate = {
  x: number;
  y: number;
};

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  settingOptions: CanvasOptions;
  toolWidth: ToolSize;
  canvasSize: CanvasSize;
  update?: boolean;
};

/** 그림판 */
const Canvas: React.FC<Props> = ({ canvasRef, settingOptions, toolWidth, canvasSize, update }): JSX.Element => {
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined); //mouse down시 마우스 포인터 x,y 위치
  const [isPainting, setIsPainting] = useState<boolean>(false);  //현재 그림이 그려지는 상태인지 boolean으로 보여주기

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
      ctx.globalCompositeOperation = update ? "destination-out" : "source-over";
      ctx.strokeStyle = settingOptions.backgroundColor;
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
    if (canvasRef.current && !update) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx?.fillStyle) {
        ctx.fillStyle = settingOptions.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [settingOptions.backgroundColor]);

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

  return (
    <_.Container>
      <_.Canvas
        ref={canvasRef}
        width={canvasSize.width * 0.75}
        height={canvasSize.height * 0.75}
      />
    </_.Container>
  )
}

export default Canvas;