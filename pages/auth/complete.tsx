import CompleteC from '@/components/auth/completeC';
import styled from '@emotion/styled';

const Complete = (): JSX.Element => {
  return (
    <Contanier>
      <CompleteC/>
    </Contanier>
  );
};

export default Complete;

const Contanier = styled.div`
  height: calc(100vh - 164px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
