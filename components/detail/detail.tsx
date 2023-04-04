import React, { useState, useEffect } from 'react';
import * as _ from './style'

interface DetailProps {
  word: string | string[] | undefined;
}

const Detail = ({ word }: DetailProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');

  useEffect(() => {
    setKeyWord(word);
  }, [word])

  return (
    <_.Container>
    </_.Container>
  )
}

export default Detail;