import ProfileChangeC from '@/components/my/profileChangeC';
import styled from '@emotion/styled';

const ProfileChange = (): JSX.Element => {
  

  return (
    <Contanier>
      <ProfileChangeC/>
    </Contanier>
  );
};

export default ProfileChange;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;