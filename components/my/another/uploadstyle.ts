import styled from '@emotion/styled';
import { Theme } from '@/styles/theme/Theme';

export const Flex = styled.div`
  width: 1300px;
  height: 343px;
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

export const List = styled.div`
  display: flex;
  gap: 12px;
`;
