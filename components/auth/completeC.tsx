import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import styled from '@emotion/styled';
import router from 'next/router';

const CompleteC = (): JSX.Element => {
  return (
    <AuthBox title="비밀번호 변경" sub="비밀번호가 변경되었습니다">
      <Content>
        <Button MainColor onClick={() => router.push('/auth/login')}>
          로그인
        </Button>
        <Button Gray5 onClick={() => router.push('/')}>
          닫기
        </Button>
      </Content>
    </AuthBox>
  );
};

export default CompleteC;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;