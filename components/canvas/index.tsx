import React, { useCallback, useEffect, useRef, useState } from "react";
import * as _ from "./style";
/**캠버스 설정 타입 */
type CanvasSetting = {
  width: number;
  height: number;
};

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
      ctx.strokeStyle = "black";
      ctx.lineJoin = 'round';
      ctx.lineWidth = 5;

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
      e.preventDefault();   // drag 방지
      e.stopPropagation();  // drag 방지

      if (isPainting) {
        const newMousePosition = getCoordinates(e);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
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
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);

    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [startPaint, paint, exitPaint]);

  //canvas 설정 변수, 값변경 함수


  return (
    <_.Container>
      <_.Canvas
        ref={canvasRef}
        width={500}
        height={500}
      />
    </_.Container>
  )
}

export default Canvas;
