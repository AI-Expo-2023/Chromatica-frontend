import styled from '@emotion/styled';

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ChildrenContainer = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;

  background?: boolean;
}>`
  background-color: white;
  width: ${(props) => props.width ?? '466px'};
  height: ${(props) => props.height ?? ''};
  border-radius: 8px;
  z-index: 10000;
  gap: ${(props) => props.gap ?? '52px'};
  padding: ${(props) => props.padding ?? '40px 39px'};
  display: ${(props) => props.display ?? ''};
  justify-content: ${(props) => props.justifyContent ?? ''};
  align-items: ${(props) => props.alignItems ?? ''};
  flex-direction: ${(props) => props.flexDirection ?? ''};
`;
