import ProfileC from '@/components/auth/profileC';
import styled from '@emotion/styled';

const Profile = (): JSX.Element => {
  

  return (
    <Contanier>
      <ProfileC />
    </Contanier>
  );
};

export default Profile;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;