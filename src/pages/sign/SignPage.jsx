import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import useMultipleInput from '../../hooks/useMultipleInput';
import { signupUser } from '../../shared/api/Users';
import SVG from '../../shared/SVG';
import StepOne from './index/StepOne';
import StepThree from './index/StepThree';
import StepTwo from './index/StepTwo';
import * as SignST from './SignPageStyle';

export default function SignPage() {
  const navigate = useNavigate();
  const [domain, setDomain] = useState('@naver.com');
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [signInfo, _, signInfoHandler] = useMultipleInput({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const onSignupHandler = async () => {
    const response = await signupUser({
      ...signInfo,
      email: `${signInfo['email']}${domain}`,
    });
    console.log(response);
    navigate('/login');
  };

  const textArr = [
    ['로그인에 사용할 이메일', '을', '입력해주세요.'],
    ['비밀번호', '를', '설정해주세요.'],
    ['서비스에서 사용할 별명', '을', '설정해주세요.'],
  ];

  const [inCheck, setInCheck] = useState(false);
  const [inCheck2, setInCheck2] = useState(false);

  const [isEmailFail, setIsEmailFail] = useState(true);
  const [helpEmailText, setHelpEmailText] = useState('');

  const [isPwFail2, setIsPwFail2] = useState(true);
  const [pwText2, setPwText2] = useState('');

  const [isNicknameFail, setIsNicknameFail] = useState(true);
  const [helpNicknameText, setHelpNicknameText] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <SignST.Body>
        <SignST.TitleBox>
          <SignST.TitleText>
            <SignST.Highlight>{textArr[index][0]}</SignST.Highlight>
            {textArr[index][1]}
          </SignST.TitleText>
          <SignST.TitleText>{textArr[index][2]}</SignST.TitleText>
        </SignST.TitleBox>

        <SignST.InputSection>
          {index === 0 ? (
            <StepOne
              signInfo={signInfo}
              domain={domain}
              setDomain={setDomain}
              handler={signInfoHandler}
              isEmailFail={isEmailFail}
              setIsEmailFail={setIsEmailFail}
              helpEmailText={helpEmailText}
              setHelpEmailText={setHelpEmailText}
              inCheck={inCheck}
              setInCheck={setInCheck}
            />
          ) : index === 1 ? (
            <StepTwo
              signInfo={signInfo}
              handler={signInfoHandler}
              isPwFail2={isPwFail2}
              setIsPwFail2={setIsPwFail2}
              pwText2={pwText2}
              setPwText2={setPwText2}
              inCheck={inCheck}
              setInCheck={setInCheck}
              inCheck2={inCheck2}
              setInCheck2={setInCheck2}
            />
          ) : index === 2 ? (
            <StepThree
              signInfo={signInfo}
              handler={signInfoHandler}
              inCheck={inCheck}
              setInCheck={setInCheck}
              isNicknameFail={isNicknameFail}
              setIsNicknameFail={setIsNicknameFail}
              helpNicknameText={helpNicknameText}
              setHelpNicknameText={setHelpNicknameText}
            />
          ) : null}
        </SignST.InputSection>

        <SignST.BtnSet>
          <SignST.CancelBtn
            onClick={() => {
              setIsOpen(true);
            }}
          >
            취소하기
          </SignST.CancelBtn>

          <SignST.NavBtn
            onClick={() => {
              if (index === 2) {
                onSignupHandler();
              } else {
                setIndex((prev) => prev + 1);
              }
            }}
            disabled={
              inCheck || inCheck2
                ? true
                : index === 0
                ? isEmailFail
                  ? true
                  : false
                : index === 1
                ? isPwFail2
                  ? true
                  : false
                : index === 2
                ? isNicknameFail
                  ? true
                  : false
                : false
            }
          >
            {index === 2 ? '시작하기' : '다음 단계'}
          </SignST.NavBtn>
        </SignST.BtnSet>

        {isOpen ? (
          <SignST.Area>
            <SignST.Box>
              <SignST.ModalInfo>
                <SVG
                  category='Error'
                  size='24px'
                  color='var(--color-system-error)'
                />
                <SignST.InfoText>
                  지금 회원가입 단계를 나가면입력한 내용이 모두 사라져요.
                </SignST.InfoText>
              </SignST.ModalInfo>

              <SignST.ModalBtnSet>
                <SignST.ModalBtn
                  style={{ color: 'var(--color-system-error' }}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  나가기
                </SignST.ModalBtn>
                <SignST.ModalBtn
                  style={{ color: 'var(--color-system-success' }}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  돌아가기
                </SignST.ModalBtn>
              </SignST.ModalBtnSet>
            </SignST.Box>

            <SignST.ModalLayout
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </SignST.Area>
        ) : null}
      </SignST.Body>
    </Layout>
  );
}
