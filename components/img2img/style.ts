import styled from '@emotion/styled';

export const Container = styled.div<{ update: boolean }>`
  display: flex;
  opacity: ${props => props.update? 0.8: 1};
`;
export const Canvas = styled.canvas`
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
`;
