import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Tag from '@/components/common/tag';
import styled from '@emotion/styled';
import router from 'next/router';

const StartC = (): JSX.Element => {
  return (
    <AuthBox title="Chromatica 시작하기" sub="태그를 둘러보세요">
      <Content>
        <TagBox>
          <Tag basic>초원</Tag>
          <Tag basic>사이버펑크</Tag>
          <Tag basic>가구</Tag>
          <Tag basic>자동차</Tag>
          <Tag basic>안개</Tag>
        </TagBox>
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

export default StartC;

const TagBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
