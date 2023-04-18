import { Theme } from "@/styles/theme/Theme";
import styled from "@emotion/styled";
import { Delete24Filled, Settings24Filled } from "@fluentui/react-icons";
import React, { useState } from "react";
import DeleteModal from "./deleteModal";
import SettingModal from "./settingModal";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  aiSetting: AiSetting;
  setAiSetting: React.Dispatch<React.SetStateAction<AiSetting>>;
  settingOptions: CanvasOptions;
  update?: boolean;
}

/** 캠버스의 삭제 버튼과 상세 설정 버튼이 있음 */
const CanvasSetting = ({ update, canvasRef, aiSetting, setAiSetting, settingOptions }: Props): JSX.Element => {

  const [openModal, setOpenModal] = useState({
    setting: false,
    delete: false
  })

  const onClickSetting = () => {
    setOpenModal({ ...openModal, setting: !openModal.setting })
  }
  const onClickDelete = () => {
    setOpenModal({ ...openModal, delete: !openModal.delete })
  }
  return (
    <>
      {openModal.setting && <SettingModal openModal={openModal} setOpenModal={setOpenModal} aiSetting={aiSetting} setAiSetting={setAiSetting} />}
      {openModal.delete && <DeleteModal settingOptions={settingOptions} canvasRef={canvasRef} openModal={openModal} setOpenModal={setOpenModal} update={update ? true : false} />}
      <Container>
        {!update && <SettingContainer onClick={() => onClickDelete()}> <Delete24Filled /> </SettingContainer>}
        <SettingContainer onClick={() => onClickSetting()}><Settings24Filled /></SettingContainer>
      </Container>
    </>
  )
}

export default CanvasSetting;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const SettingContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
  border: 1px solid ${Theme.Gray[5]};
  border-radius: 44px;
  width: fit-content;
`;
