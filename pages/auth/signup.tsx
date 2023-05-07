import SignupC from '@/components/auth/signupC';
import styled from '@emotion/styled';

const Signup = (): JSX.Element => {
  return (
    <Contanier>
      <SignupC />
    </Contanier>
  );
};

export default Signup;

const Contanier = styled.div`
  height: calc(100vh - 164px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
