import React, { useEffect, useState } from 'react';
import * as SignST from '../SignPageStyle';

import Select from '../../../components/select/Select';
import { checkEmail } from '../../../shared/api/Users';

export default function StepOne({
  signInfo,
  domain,
  setDomain,
  handler,
  isEmailFail,
  setIsEmailFail,
  helpEmailText,
  setHelpEmailText,
  inCheck,
  setInCheck,
}) {
  const optionData = [{ value: '@naver.com' }, { value: '@gmail.com' }];
  const [isDrop, setIsDrop] = useState(false);
  const toggleDrop = () => {
    setIsDrop((prev) => !prev);
  };

  useEffect(() => {
    setInCheck(true);
    const handler = setTimeout(async () => {
      const response = await checkEmail(`${signInfo['email']}${domain}`);
      console.log(response);
      if (response.status) {
        setInCheck(false);
        setIsEmailFail(false);
        setHelpEmailText('사용 가능한 이메일이에요!');
      } else {
        setInCheck(false);
        setIsEmailFail(true);
        if (response.headers.message)
          setHelpEmailText(response.headers.message);
        else setHelpEmailText(response.headers.error.message);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line
  }, [signInfo['email'], domain]);

  return (
    <SignST.InputSet>
      <SignST.InputWrapper style={{ width: '155px' }}>
        <SignST.Input name='email' type='text' onChange={handler} />
        {signInfo['email'] ? (
          <SignST.HelpBox>
            {inCheck ? null : isEmailFail ? (
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g mask='url(#mask0_616_847)'>
                  <path
                    d='M6.99999 7.58329C7.16527 7.58329 7.30391 7.52729 7.41591 7.41529C7.52752 7.30368 7.58332 7.16524 7.58332 6.99996V4.65204C7.58332 4.48676 7.52752 4.35065 7.41591 4.24371C7.30391 4.13676 7.16527 4.08329 6.99999 4.08329C6.83471 4.08329 6.69627 4.1391 6.58466 4.25071C6.47266 4.36271 6.41666 4.50135 6.41666 4.66663V7.01454C6.41666 7.17982 6.47266 7.31593 6.58466 7.42288C6.69627 7.52982 6.83471 7.58329 6.99999 7.58329ZM6.99999 9.91663C7.16527 9.91663 7.30391 9.86063 7.41591 9.74863C7.52752 9.63701 7.58332 9.49857 7.58332 9.33329C7.58332 9.16801 7.52752 9.02938 7.41591 8.91738C7.30391 8.80576 7.16527 8.74996 6.99999 8.74996C6.83471 8.74996 6.69627 8.80576 6.58466 8.91738C6.47266 9.02938 6.41666 9.16801 6.41666 9.33329C6.41666 9.49857 6.47266 9.63701 6.58466 9.74863C6.69627 9.86063 6.83471 9.91663 6.99999 9.91663ZM6.99999 12.8333C6.19305 12.8333 5.43471 12.6801 4.72499 12.3736C4.01527 12.0676 3.39791 11.652 2.87291 11.127C2.34791 10.602 1.93238 9.98468 1.62632 9.27496C1.31988 8.56524 1.16666 7.8069 1.16666 6.99996C1.16666 6.19301 1.31988 5.43468 1.62632 4.72496C1.93238 4.01524 2.34791 3.39788 2.87291 2.87288C3.39791 2.34788 4.01527 1.93215 4.72499 1.62571C5.43471 1.31965 6.19305 1.16663 6.99999 1.16663C7.80693 1.16663 8.56527 1.31965 9.27499 1.62571C9.98471 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8333 6.19301 12.8333 6.99996C12.8333 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98471 12.0676 9.27499 12.3736C8.56527 12.6801 7.80693 12.8333 6.99999 12.8333Z'
                    fill='var(--color-system-error)'
                  />
                </g>
              </svg>
            ) : (
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g mask='url(#mask0_616_794)'>
                  <path
                    d='M6.18333 8.04996L4.91458 6.78121C4.80764 6.67426 4.67639 6.62079 4.52083 6.62079C4.36528 6.62079 4.22916 6.67913 4.1125 6.79579C4.00555 6.90274 3.95208 7.03885 3.95208 7.20413C3.95208 7.3694 4.00555 7.50551 4.1125 7.61246L5.775 9.27496C5.88194 9.3819 6.01805 9.43538 6.18333 9.43538C6.34861 9.43538 6.48472 9.3819 6.59166 9.27496L9.90208 5.96454C10.009 5.8576 10.0625 5.72635 10.0625 5.57079C10.0625 5.41524 10.0042 5.27913 9.8875 5.16246C9.78055 5.05552 9.64444 5.00204 9.47916 5.00204C9.31389 5.00204 9.17778 5.05552 9.07083 5.16246L6.18333 8.04996ZM7 12.8333C6.19305 12.8333 5.43472 12.6801 4.725 12.3736C4.01528 12.0676 3.39791 11.652 2.87291 11.127C2.34791 10.602 1.93239 9.98468 1.62633 9.27496C1.31989 8.56524 1.16666 7.8069 1.16666 6.99996C1.16666 6.19301 1.31989 5.43468 1.62633 4.72496C1.93239 4.01524 2.34791 3.39788 2.87291 2.87288C3.39791 2.34788 4.01528 1.93215 4.725 1.62571C5.43472 1.31965 6.19305 1.16663 7 1.16663C7.80694 1.16663 8.56527 1.31965 9.275 1.62571C9.98472 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8333 6.19301 12.8333 6.99996C12.8333 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98472 12.0676 9.275 12.3736C8.56527 12.6801 7.80694 12.8333 7 12.8333Z'
                    fill='var(--color-system-success)'
                  />
                </g>
              </svg>
            )}

            {inCheck ? null : (
              <SignST.HelpText isFail={isEmailFail}>
                {helpEmailText}
              </SignST.HelpText>
            )}
          </SignST.HelpBox>
        ) : null}
      </SignST.InputWrapper>

      <SignST.InputWrapper style={{ width: '171px' }} onClick={toggleDrop}>
        <SignST.DropSVG
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          isDrop={isDrop}
        >
          <g mask='url(#mask0_616_837)'>
            <path
              d='M6.23747 14.4147L11.5567 8.20276C11.6201 8.12903 11.6887 8.07693 11.7625 8.04645C11.8364 8.01548 11.9156 8 12 8C12.0844 8 12.1636 8.01548 12.2375 8.04645C12.3113 8.07693 12.3799 8.12903 12.4433 8.20276L17.7784 14.4147C17.9261 14.5868 18 14.8018 18 15.0599C18 15.318 17.9208 15.5392 17.7625 15.7235C17.6042 15.9078 17.4195 16 17.2084 16C16.9974 16 16.8127 15.9078 16.6544 15.7235L12 10.3041L7.34565 15.7235C7.19789 15.8955 7.01594 15.9816 6.79979 15.9816C6.58322 15.9816 6.39578 15.8894 6.23747 15.7051C6.07916 15.5207 6 15.3057 6 15.0599C6 14.8141 6.07916 14.5991 6.23747 14.4147Z'
              fill='var(--color-orange)'
            />
          </g>
        </SignST.DropSVG>

        <SignST.Input value={domain} disabled />
      </SignST.InputWrapper>

      <Select
        width='171px'
        left='195px'
        top='60px'
        optionData={optionData}
        setCurrentValue={setDomain}
        showOptions={isDrop}
        setShowOptions={setIsDrop}
      />
    </SignST.InputSet>
  );
}
