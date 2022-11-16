import React, { useState } from 'react';
import * as SignST from './SignPageStyle';

export default function SignPage() {
  const [index, setIndex] = useState(0);

  const textArr = [
    ['로그인에 사용할 이메일', '을', '입력해주세요.'],
    ['비밀번호', '를', '설정해주세요.'],
    ['서비스에서 사용할 별명', '을', '설정해주세요.'],
  ];

  const nextIndex = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <SignST.Body>
      <SignST.TitleBox>
        <SignST.TitleText>
          <SignST.Highlight>{textArr[index][0]}</SignST.Highlight>
          {textArr[index][1]}
        </SignST.TitleText>
        <SignST.TitleText>{textArr[index][2]}</SignST.TitleText>
      </SignST.TitleBox>

      <SignST.InputSection>
        <SignST.InputSet>
          <SignST.InputWrapper>
            <SignST.Input></SignST.Input>
          </SignST.InputWrapper>

          <SignST.InputWrapper>
            <SignST.Input></SignST.Input>
          </SignST.InputWrapper>
        </SignST.InputSet>
      </SignST.InputSection>
    </SignST.Body>
  );
}
