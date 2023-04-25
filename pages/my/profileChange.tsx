import ProfileChangeC from '@/components/my/profileChangeC';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const ProfileChange = (): JSX.Element => {
  
  const router = useRouter();

  const {userName} = router.query;

  return (
    <Contanier>
      <ProfileChangeC Name={userName}/>
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