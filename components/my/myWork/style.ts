import { Theme } from '@/styles/theme/Theme';
import styled from '@emotion/styled';

export const Flex = styled.div`
  width: 80%;
  height: 370px;
  background-color: ${Theme.Gray[5]};
  margin-top: 16px;
  border-radius: 8px;
  padding: 20px;
`;

export const Warpper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Work = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

export const List = styled.div``;
