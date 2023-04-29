import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as _ from './style'
import Modal from '../modal';
import { Button } from '../button/style';
import styled from '@emotion/styled';

interface ImgProps {
  photoID: number;
  photo: string;
}

const RankCardImg = ({ photoID, photo }: ImgProps) => {
  const router = useRouter();
  const update = () => {
    localStorage.setItem('imgData', photo);
    router.push(`/aiUpdate?image=${photoID}`);
  }
  const post = () => {
    localStorage.setItem('imgData', photo);
    router.push(`/post`);
  }
  const [openModal, setOpenModal] = useState(false);
  const onClickToModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <>
      {
        openModal &&
        <Modal onClickToggleModal={onClickToModal} display="flex" flexDirection="column" >
          <h1>임시 저장된 이미지</h1>
          <SubTitle>이미지 옵션을 선택하세요</SubTitle>
          <ButtonContainer>
            <Button Gray5 Width='123' onClick={() => onClickToModal()}>닫기</Button>
            <Button MainColor Width='123' onClick={() => update()}>이미지 편집</Button>
            <Button MainColor Width='123' onClick={() => post()}>업로드</Button>
          </ButtonContainer>
        </Modal>
      }
      <_.Img onClick={onClickToModal} src={photo} />
    </>
  )
}

export default RankCardImg;

const SubTitle = styled.p`
  font-size: 18px;
`
const ButtonContainer = styled.div`
  display: flex; 
  gap: 8px;
`