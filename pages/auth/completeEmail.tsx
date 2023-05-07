import CompleteEmailC from "@/components/auth/completeEmailC";
import styled from "@emotion/styled";

const CompleteEmail = (): JSX.Element => {
    return (
      <Contanier>
        <CompleteEmailC />
      </Contanier>
    );
}

export default CompleteEmail;

const Contanier = styled.div`
    height: calc(100vh - 164px);
    display: flex;
    justify-content: center;
    align-items: center;
`