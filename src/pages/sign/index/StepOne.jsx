import React, { useState } from 'react';
import * as SignST from '../SignPageStyle';

import Select from '../../../components/select/Select';

export default function StepOne({ domain, setDomain, handler }) {
  const optionData = [{ value: '@naver.com' }, { value: '@gmail.com' }];
  const [isDrop, setIsDrop] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [failText, setFailText] = useState('');
  const toggleDrop = () => {
    setIsDrop((prev) => !prev);
  };

  return (
    <SignST.InputSet>
      <SignST.InputWrapper style={{ width: '155px' }}>
        <SignST.Input name='email' type='text' onChange={handler} />
      </SignST.InputWrapper>

      <SignST.InputWrapper style={{ width: '171px' }}>
        <SignST.DropSVG
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={toggleDrop}
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

      <SignST.HelpBox>
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
        <SignST.HelpText>사용 가능한 이메일이에요!</SignST.HelpText>
      </SignST.HelpBox>
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
