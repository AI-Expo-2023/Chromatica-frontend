import PwChangeC from '@/components/auth/pwChangeC';
import styled from '@emotion/styled';

const PwChange = (): JSX.Element => {
  return (
    <Contanier>
      <PwChangeC />
    </Contanier>
  );
};

export default PwChange;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;