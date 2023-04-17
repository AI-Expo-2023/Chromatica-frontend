import { Theme } from "@/styles/theme/Theme";
import { CaretLeft24Filled, CaretRight24Filled } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";
import * as _ from './style'

interface ChangeProps {
  change: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  end?: number;
}

const Pagination = ({ change, value, end = 1 }: ChangeProps) => {
  const [pages, setPages] = useState<number[]>([]);

  const countPages = () => {
    const num = Math.floor((value - 1) / 6) * 6
    setPages(Array.from({ length: Math.min(6, end - num) }, (v, i) => i + 1 + num))
  }

  useEffect(() => {
    countPages()
  }, [value, end])

  return (
    <_.Container>
      <_.IconBox>
        <CaretLeft24Filled
          primaryFill={value === 1 ? Theme.Gray[75] : Theme.Black}
          onClick={() => { if (value !== 1) change(value - 1) }}
        />
      </_.IconBox>
      {
        pages.map((v) => <_.Circle key={v} bool={v === value} onClick={() => change(v)}>{v}</_.Circle>)
      }
      <_.IconBox>
        <CaretRight24Filled
          primaryFill={value === end ? Theme.Gray[75] : Theme.Black}
          onClick={() => { if (value !== end) change(value + 1) }}
        />
      </_.IconBox>
    </_.Container>
  )
}

export default Pagination;