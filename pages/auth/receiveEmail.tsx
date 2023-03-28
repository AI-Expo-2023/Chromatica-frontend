import RecevieEmailC from '@/components/auth/recevieEmailC';
import styled from '@emotion/styled';

const ReceiveEmail = (): JSX.Element => {
  return (
    <Contanier>
      <RecevieEmailC />
    </Contanier>
  );
};

export default ReceiveEmail;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
