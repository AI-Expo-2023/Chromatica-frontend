import StartC from '@/components/auth/startC';
import styled from '@emotion/styled';

const Start = (): JSX.Element => {
  return (
    <Contanier>
      <StartC />
    </Contanier>
  );
};

export default Start;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
