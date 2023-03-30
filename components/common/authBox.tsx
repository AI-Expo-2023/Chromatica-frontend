import { Theme } from '@/styles/theme/Theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type Props = {
  title: string;
  sub?: string;
  children: ReactNode;
};

const AuthBox = ({ title, sub, children }: Props): JSX.Element => {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      {sub && <SubTitle>{sub}</SubTitle>}
      {children}
    </Container>
  );
};

export default AuthBox;

const Container = styled.div`
  width: 450px;
  border: 1px solid ${Theme.Gray[75]};
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.h1`
  font-weight: 800;
  font-size: 32px;
  margin: 0 0 12px 0;
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin: 0 0 32px 0;
`;
