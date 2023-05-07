import RecevieEmailC from '@/components/auth/receiveEmailC';
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
  height: calc(100vh - 164px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
