import PwEmailCheckC from '@/components/auth/pwEmailCheckC';
import styled from '@emotion/styled';

const PwEmailCheck = (): JSX.Element => {
  return (
    <Contanier>
      <PwEmailCheckC />
    </Contanier>
  );
};

export default PwEmailCheck;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;