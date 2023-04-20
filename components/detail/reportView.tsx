import React from "react";
import { Button } from "../common/button/style";
import Modal from "../common/modal";
import * as _ from "./style";

interface ReportProps {
  Toggle: () => void;
  Report: () => void;
}

const ReportView = ({ Toggle, Report }: ReportProps) => {
  return (
    <Modal
      onClickToggleModal={Toggle}
      display="flex"
      flexDirection="column"
    >
      <_.ReportTextGapBox>
        <_.Text weight={800} size={32}>신고</_.Text>
        <_.Text>신고를 전송할까요?</_.Text>
      </_.ReportTextGapBox>
      <_.ReportGapBox>
        <Button
          Width="189"
          Red={true}
          onClick={Report}
        >
          신고
        </Button>
        <Button
          Width="189"
          Gray5={true}
          onClick={Toggle}
        >
          취소
        </Button>
      </_.ReportGapBox>
    </Modal>
  )
}

export default ReportView;