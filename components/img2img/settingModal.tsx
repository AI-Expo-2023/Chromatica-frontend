import React from "react";
import { Button } from "../common/button/style";
import Modal from "../common/modal";
import Range from "../common/range";

type ModalType = {
  setting: boolean,
  delete: boolean
};

declare type AiSetting = {
  quality: number;
  count: number;
};

type Props = {
  openModal: ModalType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
  aiSetting: AiSetting;
  setAiSetting: React.Dispatch<React.SetStateAction<AiSetting>>;
}

/**품질 생성할 이미지 개수를 설정할 수 있는 모달 */
const SettingModal = ({ openModal, setOpenModal, aiSetting, setAiSetting }: Props): JSX.Element => {
  const onClick = () => {
    setOpenModal({ ...openModal, setting: !openModal.setting });
  }

  const onChangeQuality = (e: any) => {
    setAiSetting({ ...aiSetting, quality: e.target.value });
  }
  const onChangeCount = (e: any) => {
    setAiSetting({ ...aiSetting, count: e.target.value });
  }

  return (
    <>
      {
        openModal.setting &&
        <Modal onClickToggleModal={onClick} display="flex" flexDirection="column" >
          <h1>상세 설정</h1>
          <Range onChange={onChangeQuality} value={aiSetting.quality} min={20} max={40} step={5} label="품질" />
          <Range onChange={onChangeCount} value={aiSetting.count} min={1} max={4} label="개수" text="이미지 수가 많아지면 처리 속도가 늦어질 수 있습니다" />
          <Button MainColor onClick={() => setOpenModal({ ...openModal, setting: false })}>적용</Button>
        </Modal>
      }
    </>
  )
}

export default SettingModal;