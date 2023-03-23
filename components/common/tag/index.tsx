import * as _ from "./style";
import { Dismiss20Filled } from "@fluentui/react-icons";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  basic?: boolean;
  puple?: boolean;
  cancel?: boolean;
}

// 사용방법: <Tag 원하는 타입>들어가야하는 값</Tag>

const Tag = ({children, basic, puple, cancel}: Props): any => {
  if(basic){
      return(  <_.Tag basic>{children}</_.Tag>
    )
  }
  else if(puple){
    return(  <_.Tag puple>{children}</_.Tag>
    )
  }
  else if(cancel){
    return(  <_.Tag cancel><Dismiss20Filled/>{children}</_.Tag>
    )
  }
  
};

export default Tag;
