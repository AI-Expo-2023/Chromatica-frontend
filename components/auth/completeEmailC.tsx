import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import styled from '@emotion/styled';

const CompleteEmailC = (): JSX.Element => {
  return (
    <AuthBox title="비밀번호 변경" sub="비밀번호가 변경되었습니다">
      <Content>
        <Button MainColor>로그인</Button>
        <Button White>닫기</Button>
      </Content>
    </AuthBox>
  );
};

export default CompleteEmailC;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;