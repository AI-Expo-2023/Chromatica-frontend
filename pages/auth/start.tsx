import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Tag from '@/components/common/tag';
import styled from '@emotion/styled';
import { useState } from 'react';

const Start = (): JSX.Element => {
  return (
    <Contanier>
      <AuthBox title="Chromatica 시작하기" sub="태그를 둘러보세요">
        <Content>
          <TagBox>
            <Tag basic>초원</Tag>
            <Tag basic>사이버펑크</Tag>
            <Tag basic>가구</Tag>
            <Tag basic>자동차</Tag>
            <Tag basic>안개</Tag>
          </TagBox>
          <Button MainColor>로그인</Button>
          <Button White>닫기</Button>
        </Content>
      </AuthBox>
    </Contanier>
  );
};

export default Start;

const Contanier = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;