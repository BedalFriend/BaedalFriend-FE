import React, { useState } from 'react';
import useMultipleInput from '../../hooks/useMultipleInput';
import StepOne from './index/StepOne';
import * as SignST from './SignPageStyle';

export default function SignPage() {
  const [domain, setDomain] = useState('@naver.com');
  const [index, setIndex] = useState(0);
  const [signInfo, setSignInfo, signInfoHandler] = useMultipleInput({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

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
        <StepOne
          domain={domain}
          setDomain={setDomain}
          handler={signInfoHandler}
        />
      </SignST.InputSection>
    </SignST.Body>
  );
}
