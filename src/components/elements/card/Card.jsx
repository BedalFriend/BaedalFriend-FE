import React from 'react';

import * as CardST from './CardStyle';
import Timer from '../timer/Timer';
import ProfilePic from '../profilePic/ProfilePic';

export default function Card(props) {
  const boyUser = {
    id: 1,
    profileURL:
      'https://i.pinimg.com/236x/56/cc/80/56cc80ea80aff65bc09c7967b993821c.jpg',
  };

  const girlUser = {
    id: 2,
    profileURL:
      'https://i.pinimg.com/236x/cb/24/f1/cb24f1478772b27702ff45e5490b6b6f.jpg',
  };

  const noPicUser = {
    id: 3,
    profileURL: null,
  };

  const userArr = [boyUser, girlUser, noPicUser];

  return (
    <CardST.Box>
      <CardST.CardHead>
        <CardST.CardAdr>서울시 마포구 양화로 186</CardST.CardAdr>
        <CardST.CardTimer>
          <Timer limit='720' />
        </CardST.CardTimer>
      </CardST.CardHead>

      <CardST.NameBox>
        <SVG category='Fastfood' />
        <h3 style={{ marginLeft: '4px' }}>쉐이크쉑</h3>
      </CardST.NameBox>

      <CardST.Line />

      <CardST.Party>
        <CardST.PtNum>
          <CardST.PtLogo>PARTY</CardST.PtLogo>
          <span style={{ color: 'var(--color-orange)' }}>3</span>&nbsp;/ 5명
        </CardST.PtNum>

        <CardST.PtPic>
          {userArr.map((user) => (
            <ProfilePic
              key={user.id}
              size='36px'
              border='1px solid var(--color-orange)'
              user={user}
            />
          ))}

          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='18' cy='18' r='17.5' fill='white' stroke='#FFDFCD' />
            <circle cx='10' cy='18' r='2' fill='#FFDFCD' />
            <circle cx='18' cy='18' r='2' fill='#FFDFCD' />
            <circle cx='26' cy='18' r='2' fill='#FFDFCD' />
          </svg>

          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='18' cy='18' r='17.5' fill='white' stroke='#FFDFCD' />
            <circle cx='10' cy='18' r='2' fill='#FFDFCD' />
            <circle cx='18' cy='18' r='2' fill='#FFDFCD' />
            <circle cx='26' cy='18' r='2' fill='#FFDFCD' />
          </svg>
        </CardST.PtPic>
      </CardST.Party>
    </CardST.Box>
  );
}

function SVG({ category }) {
  switch (category) {
    case 'Fastfood':
      return (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_261_1024)'>
            <path
              d='M2.50001 8.33333C2.26389 8.33333 2.06612 8.25333 1.90667 8.09333C1.74667 7.93389 1.66667 7.73611 1.66667 7.5C1.66667 5.90278 2.42028 4.67 3.9275 3.80167C5.43417 2.93389 7.45834 2.5 10 2.5C12.5417 2.5 14.5661 2.93389 16.0733 3.80167C17.58 4.67 18.3333 5.90278 18.3333 7.5C18.3333 7.73611 18.2533 7.93389 18.0933 8.09333C17.9339 8.25333 17.7361 8.33333 17.5 8.33333H2.50001ZM1.66667 11.25C1.66667 11.0556 1.73612 10.8644 1.87501 10.6767C2.01389 10.4894 2.20834 10.3333 2.45834 10.2083C2.70834 10.0833 2.97223 9.94778 3.25001 9.80167C3.52778 9.65611 3.93056 9.58333 4.45834 9.58333C5.23612 9.58333 5.76389 9.72222 6.04167 10C6.31945 10.2778 6.70834 10.4167 7.20834 10.4167C7.70834 10.4167 8.10417 10.2778 8.39584 10C8.6875 9.72222 9.22223 9.58333 10 9.58333C10.7778 9.58333 11.3125 9.72222 11.6042 10C11.8958 10.2778 12.2917 10.4167 12.7917 10.4167C13.2917 10.4167 13.6806 10.2778 13.9583 10C14.2361 9.72222 14.7639 9.58333 15.5417 9.58333C16.0556 9.58333 16.4583 9.65278 16.75 9.79167C17.0417 9.93056 17.3056 10.0625 17.5417 10.1875C17.7778 10.3125 17.9689 10.4686 18.115 10.6558C18.2606 10.8436 18.3333 11.0417 18.3333 11.25C18.3333 11.4861 18.2328 11.6736 18.0317 11.8125C17.83 11.9514 17.625 11.9931 17.4167 11.9375C17 11.8264 16.6978 11.6839 16.51 11.51C16.3228 11.3367 16.0278 11.25 15.625 11.25C15.125 11.25 14.7222 11.3889 14.4167 11.6667C14.1111 11.9444 13.5694 12.0833 12.7917 12.0833C12.0139 12.0833 11.4792 11.9444 11.1875 11.6667C10.8958 11.3889 10.5 11.25 10 11.25C9.5 11.25 9.10417 11.3889 8.8125 11.6667C8.52084 11.9444 7.98612 12.0833 7.20834 12.0833C6.43056 12.0833 5.90278 11.9444 5.625 11.6667C5.34723 11.3889 4.95834 11.25 4.45834 11.25C4.05556 11.25 3.75001 11.3367 3.54167 11.51C3.33334 11.6839 3.01389 11.8264 2.58334 11.9375C2.375 11.9931 2.17001 11.9514 1.96834 11.8125C1.76723 11.6736 1.66667 11.4861 1.66667 11.25ZM3.33334 17.5C2.87501 17.5 2.48278 17.3369 2.15667 17.0108C1.83001 16.6842 1.66667 16.2917 1.66667 15.8333V15C1.66667 14.5417 1.83001 14.1492 2.15667 13.8225C2.48278 13.4964 2.87501 13.3333 3.33334 13.3333H16.6667C17.125 13.3333 17.5175 13.4964 17.8442 13.8225C18.1703 14.1492 18.3333 14.5417 18.3333 15V15.8333C18.3333 16.2917 18.1703 16.6842 17.8442 17.0108C17.5175 17.3369 17.125 17.5 16.6667 17.5H3.33334Z'
              fill='#333333'
            />
          </g>
        </svg>
      );
    default:
      return;
  }
}
