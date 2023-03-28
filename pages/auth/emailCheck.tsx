import EmailCheckC from "@/components/auth/emailCheckC";
import styled from "@emotion/styled";

const EmailCheck = (): JSX.Element => {

    return (
      <Contanier>
        <EmailCheckC />
      </Contanier>
    );
};

export default EmailCheck;

const Contanier = styled.div`
    height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

