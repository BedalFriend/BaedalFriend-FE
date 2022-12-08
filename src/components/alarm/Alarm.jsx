import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlarmContext } from '../../context/AlarmContext';
import SVG from '../../shared/SVG';
import * as AlaramST from './AlarmStyle';

export default function Alarm() {
  const navigate = useNavigate();
  const { setIsDone, isDone } = useContext(AlarmContext);

  return (
    <AlaramST.Area
      isDone={isDone}
      onClick={() => {
        setIsDone(true);
      }}
    >
      <AlaramST.Box className='vibrate-box'>
        <AlaramST.Help>
          <SVG category='Error' size='14px' color='var(--color-white)' />
          로그인이 필요한 서비스입니다!
        </AlaramST.Help>

        <AlaramST.Btn
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인하기
        </AlaramST.Btn>
      </AlaramST.Box>
    </AlaramST.Area>
  );
}
