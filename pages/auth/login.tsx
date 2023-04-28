import LoginC from '@/components/auth/loginC';
import styled from '@emotion/styled';

const Login = (): JSX.Element => {
  return (
    <Container>
      <LoginC />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;