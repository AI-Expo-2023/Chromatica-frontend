import { ReactNode, useEffect } from "react";
import * as _ from "./style";

type PropsType = {
  onClickToggleModal: () => void;
  children?: ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  flexDirection?: string;
}

const Modal = ({ children, onClickToggleModal, width, height, padding, display, justifyContent, gap, flexDirection, alignItems }: PropsType): JSX.Element => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);


  return (
    <_.Container>
      <_.ChildrenContainer width={width} height={height} padding={padding} display={display} justifyContent={justifyContent} gap={gap} flexDirection={flexDirection} alignItems={alignItems}>
        {children}
      </_.ChildrenContainer>
      <_.BackDrop onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        onClickToggleModal();
      }} />
    </_.Container >
  )
}

export default Modal;
