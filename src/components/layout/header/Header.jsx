import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlarmContext } from '../../../context/AlarmContext';
import { TabContext } from '../../../context/TabContext';
import { getCookieToken } from '../../../shared/storage/Cookie';
import * as HeadST from './HeaderStyle';

export default function Header() {
  const { tab } = useContext(TabContext);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const refreshToken = getCookieToken();

  const [isOpen, setIsOpen] = useState(false);
  const { setIsDP } = useContext(AlarmContext);

  const getAddress = (address) => {
    const arr = address
      .split(' ')
      .filter(
        (word) => !word.includes('(') && !word.includes(')') && word !== ''
      );
    const result = `${arr[arr.length - 2]} ${arr[arr.length - 1]}`;
    return result;
  };

  return (
    <HeadST.Area>
      <svg
        width='44'
        height='48'
        viewBox='0 0 44 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          position: 'absolute',
          bottom: '0px',
          marginLeft: '16px',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <g mask='url(#mask0_243_490)'>
          <path
            d='M22.424 33.6042L12.3295 24.7388C12.2097 24.6332 12.125 24.5189 12.0755 24.3958C12.0252 24.2726 12 24.1407 12 24C12 23.8593 12.0252 23.7274 12.0755 23.6042C12.125 23.4811 12.2097 23.3668 12.3295 23.2612L22.424 14.3694C22.7035 14.1231 23.053 14 23.4724 14C23.8917 14 24.2512 14.1319 24.5507 14.3958C24.8502 14.6596 25 14.9675 25 15.3193C25 15.6711 24.8502 15.9789 24.5507 16.2427L15.7442 24L24.5507 31.7573C24.8303 32.0035 24.97 32.3068 24.97 32.667C24.97 33.028 24.8203 33.3404 24.5207 33.6042C24.2212 33.8681 23.8717 34 23.4724 34C23.073 34 22.7235 33.8681 22.424 33.6042Z'
            fill='var(--color-grey)'
          />
        </g>
      </svg>

      <HeadST.Address
        tab={tab}
        onClick={() => {
          if (refreshToken !== null && refreshToken !== undefined) {
          } else {
            navigate('/login');
          }
        }}
      >
        <HeadST.MarkSVG
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_243_502)'>
            <path
              d='M6.7 9.29999L2.43333 7.56665C2.31111 7.5111 2.20844 7.42776 2.12533 7.31665C2.04178 7.20554 2 7.07776 2 6.93332C2 6.78887 2.03889 6.6611 2.11667 6.54999C2.19444 6.43887 2.3 6.35554 2.43333 6.29999L12.6333 2.51665C12.7667 2.4611 12.8944 2.44999 13.0167 2.48332C13.1389 2.51665 13.2444 2.57776 13.3333 2.66665C13.4222 2.75554 13.4833 2.8611 13.5167 2.98332C13.55 3.10554 13.5389 3.23332 13.4833 3.36665L9.7 13.5667C9.64444 13.7111 9.55844 13.8193 9.442 13.8913C9.32511 13.9638 9.20555 14 9.08333 14C8.96111 14 8.83889 13.9638 8.71667 13.8913C8.59444 13.8193 8.5 13.7111 8.43333 13.5667L6.7 9.29999Z'
              fill='var(--color-orange)'
            />
          </g>
        </HeadST.MarkSVG>

        <HeadST.AdrText>
          {refreshToken !== null && refreshToken !== undefined
            ? user.address
              ? getAddress(user.address)
              : '주소를 입력해주세요!'
            : '로그인이 필요해요!'}
        </HeadST.AdrText>

        <svg
          width='18'
          height='16'
          viewBox='0 0 18 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_261_477)'>
            <path
              d='M13.3219 6.39016L9.33245 10.5315C9.28496 10.5806 9.23351 10.6154 9.1781 10.6357C9.12269 10.6563 9.06332 10.6667 9 10.6667C8.93668 10.6667 8.87731 10.6563 8.8219 10.6357C8.76649 10.6154 8.71504 10.5806 8.66755 10.5315L4.66623 6.39016C4.55541 6.27546 4.5 6.13209 4.5 5.96005C4.5 5.78801 4.55937 5.64054 4.6781 5.51766C4.79683 5.39477 4.93536 5.33332 5.09367 5.33332C5.25198 5.33332 5.3905 5.39477 5.50923 5.51766L9 9.13056L12.4908 5.51765C12.6016 5.40296 12.738 5.34561 12.9002 5.34561C13.0626 5.34561 13.2032 5.40706 13.3219 5.52994C13.4406 5.65283 13.5 5.7962 13.5 5.96005C13.5 6.1239 13.4406 6.26727 13.3219 6.39016Z'
              fill='var(--color-grey)'
            />
          </g>
        </svg>
      </HeadST.Address>

      <HeadST.ChatSVG
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        onClick={() => {
          if (!location.pathname.includes('/chat')) {
            if (refreshToken !== null && refreshToken !== undefined) {
              navigate(`/chat/${user.onGoing}`);
            } else {
              setIsDP(true);
            }
          }
        }}
      >
        <g mask='url(#mask0_159_110)'>
          <path
            d='M36 34.615V13.6873C36 12.9483 35.7648 12.3155 35.2944 11.7887C34.8248 11.2629 34.26 11 33.6 11H14.4C13.74 11 13.1748 11.2629 12.7044 11.7887C12.2348 12.3155 12 12.9483 12 13.6873V29.8114C12 30.5504 12.2348 31.1833 12.7044 31.71C13.1748 32.2358 13.74 32.4988 14.4 32.4988H31.2L33.96 35.5892C34.34 36.0147 34.7752 36.1097 35.2656 35.8741C35.7552 35.6394 36 35.2197 36 34.615Z'
            fill={
              refreshToken !== null && refreshToken !== undefined
                ? user.onGoing === 0
                  ? 'var(--color-light-orange)'
                  : 'var(--color-orange)'
                : 'var(--color-light-orange)'
            }
          />
        </g>
      </HeadST.ChatSVG>
    </HeadST.Area>
  );
}
