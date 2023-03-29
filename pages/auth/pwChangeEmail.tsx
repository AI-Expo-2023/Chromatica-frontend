import PwChangeEmailC from '@/components/auth/pwChangeEmailC';
import styled from '@emotion/styled';

const PwChangeEmail = (): JSX.Element => {
  return (
    <Contanier>
      <PwChangeEmailC />
    </Contanier>
  );
};

export default PwChangeEmail;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;