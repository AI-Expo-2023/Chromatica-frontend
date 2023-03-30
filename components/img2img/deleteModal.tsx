import { Theme } from "@/styles/theme/Theme";
import styled from "@emotion/styled";
import { Button } from "../common/button/style";
import Modal from "../common/modal";

type ModalType = {
  setting: boolean,
  delete: boolean
};

type Props = {
  openModal: ModalType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  settingOptions: CanvasOptions;
}

/** 그림판을 완전히 지우는 것에 대한 모달 */
const DeleteModal = ({settingOptions, canvasRef, openModal, setOpenModal }: Props): JSX.Element => {
  const onClick = () => {
    setOpenModal({ ...openModal, delete: !openModal.delete });
  }

  const clearAll = () => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx?.fillStyle) {
        console.log("asdsad")
        ctx.fillStyle = settingOptions.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }

  return (
    <>
      {
        openModal.delete &&
        <Modal onClickToggleModal={onClick} display="flex" flexDirection="column">
          <Title>
            <h1>초기화</h1>
            <Explanation>그림판을 초기화할까요?</Explanation>
          </Title>
          <ButtonContainer>
            <Button Red Width="189" onClick={() => { clearAll(); setOpenModal({ ...openModal, delete: false }) }}>초기화</Button>
            <Button Gray5 Width="189" onClick={() => setOpenModal({ ...openModal, delete: false })}>취소</Button>
          </ButtonContainer>
        </Modal>
      }
    </>
  )
}

export default DeleteModal;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const Explanation = styled.p`
  font-size: 18px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`