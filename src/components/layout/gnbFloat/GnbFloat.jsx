import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlarmContext } from '../../../context/AlarmContext';
import { TabContext } from '../../../context/TabContext';
import { getCookieToken } from '../../../shared/storage/Cookie';
import * as GnbST from './GnbFloatStyle';

function GnbFloat() {
  const { tab } = useContext(TabContext);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const refreshToken = getCookieToken();
  const { setIsDP, setIsDone } = useContext(AlarmContext);

  return (
    <GnbST.Box tab={tab}>
      <GnbST.Bar>
        <GnbST.GnbSVG
          width='48'
          height='63'
          viewBox='0 0 48 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            if (location.pathname !== '/') navigate('/');
          }}
        >
          <path
            d='M28.1973 56.832H20.7559V59.9609H28.1973V56.832ZM19.6309 56.293H29.3574V55.1211H25.2441V54.5996C27.0781 54.4941 28.0742 53.9844 28.0801 53.0938C28.0742 52.0859 26.8027 51.5762 24.4941 51.5703C22.1973 51.5762 20.8965 52.0859 20.9082 53.0938C20.8965 53.9844 21.916 54.4941 23.7441 54.5996V55.1211H19.6309V56.293ZM20.0996 51.3008H28.8535V50.1758H25.2441V49.3203H23.7441V50.1758H20.0996V51.3008ZM22.2324 58.8477V57.9453H26.7324V58.8477H22.2324ZM22.502 53.0938C22.502 52.7188 23.1465 52.584 24.4941 52.5781C25.8535 52.584 26.4746 52.7188 26.4746 53.0938C26.4746 53.4512 25.8535 53.6094 24.4941 53.6094C23.1465 53.6094 22.502 53.4512 22.502 53.0938Z'
            fill={tab === 'Home' ? 'var(--color-orange)' : 'var(--color-grey)'}
          />
          <g mask='url(#mask0_2648_2269)'>
            <path
              d='M14.4 40C13.74 40 13.1752 39.7652 12.7056 39.2956C12.2352 38.8252 12 38.26 12 37.6V18.4C12 17.74 12.2352 17.1748 12.7056 16.7044C13.1752 16.2348 13.74 16 14.4 16H33.6C34.26 16 34.8252 16.2348 35.2956 16.7044C35.7652 17.1748 36 17.74 36 18.4V37.6C36 38.26 35.7652 38.8252 35.2956 39.2956C34.8252 39.7652 34.26 40 33.6 40H14.4ZM20.1 36.4C20.36 36.4 20.5752 36.3152 20.7456 36.1456C20.9152 35.9752 21 35.76 21 35.5V28.3C21.52 28.14 21.95 27.8548 22.29 27.4444C22.63 27.0348 22.8 26.54 22.8 25.96V21.4C22.8 21.24 22.74 21.1 22.62 20.98C22.5 20.86 22.36 20.8 22.2 20.8C22.04 20.8 21.9 20.86 21.78 20.98C21.66 21.1 21.6 21.24 21.6 21.4V24.4H20.7V21.4C20.7 21.24 20.64 21.1 20.52 20.98C20.4 20.86 20.26 20.8 20.1 20.8C19.94 20.8 19.8 20.86 19.68 20.98C19.56 21.1 19.5 21.24 19.5 21.4V24.4H18.6V21.4C18.6 21.24 18.54 21.1 18.42 20.98C18.3 20.86 18.16 20.8 18 20.8C17.84 20.8 17.7 20.86 17.58 20.98C17.46 21.1 17.4 21.24 17.4 21.4V25.96C17.4 26.54 17.57 27.0348 17.91 27.4444C18.25 27.8548 18.68 28.14 19.2 28.3V35.5C19.2 35.76 19.2852 35.9752 19.4556 36.1456C19.6252 36.3152 19.84 36.4 20.1 36.4ZM27.3 36.4C27.56 36.4 27.7752 36.3152 27.9456 36.1456C28.1152 35.9752 28.2 35.76 28.2 35.5V28.78C28.86 28.46 29.3752 27.95 29.7456 27.25C30.1152 26.55 30.3 25.73 30.3 24.79C30.3 23.65 30.0152 22.7 29.4456 21.94C28.8752 21.18 28.16 20.8 27.3 20.8C26.44 20.8 25.7252 21.18 25.1556 21.94C24.5852 22.7 24.3 23.65 24.3 24.79C24.3 25.73 24.4852 26.55 24.8556 27.25C25.2252 27.95 25.74 28.46 26.4 28.78V35.5C26.4 35.76 26.4852 35.9752 26.6556 36.1456C26.8252 36.3152 27.04 36.4 27.3 36.4Z'
              fill={
                tab === 'Home' ? 'var(--color-orange)' : 'var(--color-grey)'
              }
            />
          </g>
        </GnbST.GnbSVG>

        <GnbST.GnbSVG
          width='48'
          height='63'
          viewBox='0 0 48 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            if (!location.pathname.includes('/nearby')) navigate('/nearby');
          }}
        >
          <path
            d='M18.3828 52.5898V51.4766H20.7734V50.5508H14.8555V51.4766H17.2578V52.5898C17.2461 54.4004 16.0742 56.3691 14.4922 57.1133L15.1367 57.9922C16.3613 57.3945 17.3457 56.1172 17.832 54.6172C18.3184 56.0176 19.3027 57.1777 20.5391 57.7227L21.1484 56.8555C19.5312 56.1641 18.377 54.3477 18.3828 52.5898ZM22.0977 59.9961H23.2109V49.4961H22.0977V59.9961ZM33.3945 54.3359H27.1953V51.207H33.3008V50.3047H26.082V55.2266H29.1172V57.793H24.8867V58.707H34.4961V57.793H30.2188V55.2266H33.3945V54.3359Z'
            fill={
              tab === 'Nearby' ? 'var(--color-orange)' : 'var(--color-grey)'
            }
          />
          <g mask='url(#mask0_2648_2264)'>
            <path
              d='M29.91 25.72C30.05 25.38 30.0552 25.0548 29.9256 24.7444C29.7952 24.4348 29.57 24.23 29.25 24.13C28.41 23.85 27.5548 23.6448 26.6844 23.5144C25.8148 23.3848 24.92 23.32 24 23.32C23.08 23.32 22.1848 23.3848 21.3144 23.5144C20.4448 23.6448 19.59 23.85 18.75 24.13C18.43 24.23 18.2 24.44 18.06 24.76C17.92 25.08 17.93 25.41 18.09 25.75C18.21 26.03 18.4148 26.2348 18.7044 26.3644C18.9948 26.4948 19.29 26.51 19.59 26.41C20.29 26.19 21.01 26.02 21.75 25.9C22.49 25.78 23.24 25.72 24 25.72C24.76 25.72 25.51 25.78 26.25 25.9C26.99 26.02 27.71 26.19 28.41 26.41C28.71 26.51 29.0052 26.49 29.2956 26.35C29.5852 26.21 29.79 26 29.91 25.72ZM28.35 29.59C28.47 29.27 28.4652 28.96 28.3356 28.66C28.2052 28.36 27.99 28.16 27.69 28.06C27.11 27.88 26.51 27.7448 25.89 27.6544C25.27 27.5648 24.64 27.52 24 27.52C23.36 27.52 22.73 27.5648 22.11 27.6544C21.49 27.7448 20.89 27.88 20.31 28.06C20.01 28.16 19.79 28.36 19.65 28.66C19.51 28.96 19.51 29.27 19.65 29.59C19.77 29.87 19.9748 30.08 20.2644 30.22C20.5548 30.36 20.87 30.38 21.21 30.28C21.67 30.14 22.13 30.0448 22.59 29.9944C23.05 29.9448 23.52 29.92 24 29.92C24.48 29.92 24.95 29.9448 25.41 29.9944C25.87 30.0448 26.33 30.14 26.79 30.28C27.13 30.38 27.4452 30.3648 27.7356 30.2344C28.0252 30.1048 28.23 29.89 28.35 29.59ZM26.7 33.49C26.84 33.15 26.84 32.83 26.7 32.53C26.56 32.23 26.32 32.04 25.98 31.96C25.66 31.88 25.3348 31.82 25.0044 31.78C24.6748 31.74 24.34 31.72 24 31.72C23.66 31.72 23.3248 31.74 22.9944 31.78C22.6648 31.82 22.34 31.88 22.02 31.96C21.68 32.04 21.44 32.23 21.3 32.53C21.16 32.83 21.16 33.15 21.3 33.49C21.4 33.77 21.5952 33.98 21.8856 34.12C22.1752 34.26 22.48 34.3 22.8 34.24C23 34.2 23.2 34.17 23.4 34.15C23.6 34.13 23.8 34.12 24 34.12C24.2 34.12 24.4 34.13 24.6 34.15C24.8 34.17 25 34.2 25.2 34.24C25.52 34.3 25.82 34.26 26.1 34.12C26.38 33.98 26.58 33.77 26.7 33.49ZM36 28C36 29.66 35.6848 31.22 35.0544 32.68C34.4248 34.14 33.57 35.41 32.49 36.49C31.41 37.57 30.14 38.4248 28.68 39.0544C27.22 39.6848 25.66 40 24 40C22.34 40 20.78 39.6848 19.32 39.0544C17.86 38.4248 16.59 37.57 15.51 36.49C14.43 35.41 13.5748 34.14 12.9444 32.68C12.3148 31.22 12 29.66 12 28C12 26.34 12.3148 24.78 12.9444 23.32C13.5748 21.86 14.43 20.59 15.51 19.51C16.59 18.43 17.86 17.5752 19.32 16.9456C20.78 16.3152 22.34 16 24 16C25.66 16 27.22 16.3152 28.68 16.9456C30.14 17.5752 31.41 18.43 32.49 19.51C33.57 20.59 34.4248 21.86 35.0544 23.32C35.6848 24.78 36 26.34 36 28Z'
              fill={
                tab === 'Nearby' ? 'var(--color-orange)' : 'var(--color-grey)'
              }
            />
          </g>
        </GnbST.GnbSVG>

        {user.onGoing ? (
          <GnbST.GnbSVG
            width='48'
            height='63'
            viewBox='0 0 48 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              if (!location.pathname.includes('/detail')) {
                if (refreshToken) {
                  if (user.onGoing) {
                    navigate(`/detail/${user.onGoing}`);
                  }
                } else {
                  setIsDP(true);
                }
              }
            }}
          >
            <path
              d='M11.5449 51.6641V51.5586H13.8301V50.668H11.5566V49.4492H10.4434V50.668H8.1582V51.5586H10.4434V51.6641C10.4434 52.9941 9.44727 54.1895 7.8418 54.6641L8.38086 55.5312C9.62891 55.1445 10.543 54.3301 11.0059 53.2812C11.4746 54.2363 12.3711 54.9805 13.584 55.332L14.0996 54.4648C12.4941 54.002 11.5449 52.877 11.5449 51.6641ZM9.41211 59.8672H16.1152V56.1641H9.41211V59.8672ZM10.502 58.9648V57.043H15.0137V58.9648H10.502ZM15.002 55.6953H16.1152V53.0234H17.6387V52.0977H16.1152V49.4961H15.002V55.6953ZM21.084 50.2812C19.5195 50.2871 18.4121 51.7168 18.4238 53.9609C18.4121 56.2285 19.5195 57.6582 21.084 57.6523C22.0977 57.6582 22.918 57.043 23.3691 55.9883H25.8887V60.0195H26.9902V49.4961H25.8887V51.7812H23.293C22.8301 50.832 22.0449 50.2871 21.084 50.2812ZM19.4785 53.9609C19.4844 52.3145 20.1348 51.2832 21.084 51.2773C22.0332 51.2832 22.6836 52.3145 22.6895 53.9609C22.6836 55.6309 22.0332 56.6562 21.084 56.6562C20.1348 56.6562 19.4844 55.6309 19.4785 53.9609ZM23.6094 52.6953H25.8887V55.0742H23.6387C23.709 54.7285 23.7441 54.3594 23.7441 53.9609C23.7441 53.5039 23.6914 53.082 23.6094 52.6953ZM41.1113 54.3594H31.5371V55.2617H35.7676V56.2695C33.8164 56.3691 32.6738 57.0195 32.6738 58.1211C32.6738 59.3105 34.0332 59.9785 36.3184 59.9727C38.5742 59.9785 39.9336 59.3105 39.9395 58.1211C39.9336 57.0195 38.791 56.375 36.8691 56.2695V55.2617H41.1113V54.3594ZM32.041 52.9297L32.4277 53.8086C34.25 53.5977 35.7441 52.8301 36.3242 51.7168C36.8926 52.8301 38.3984 53.5977 40.2207 53.8086L40.6191 52.9297C38.6973 52.7363 37.2207 51.8867 37.0684 50.8672H40.2559V49.9766H32.416V50.8672H35.5684C35.416 51.8809 33.9277 52.7363 32.041 52.9297ZM33.7988 58.1211C33.793 57.4707 34.7129 57.1191 36.3184 57.1133C37.9004 57.1191 38.8262 57.4707 38.8262 58.1211C38.8262 58.7598 37.9004 59.1289 36.3184 59.1172C34.7129 59.1289 33.793 58.7598 33.7988 58.1211Z'
              fill={
                location.pathname === `/detail/${user.onGoing}`
                  ? 'var(--color-orange)'
                  : 'var(--color-grey)'
              }
            />
            <g mask='url(#mask0_566_833)'>
              <path
                d='M18 39C17.1667 39 16.4583 38.7083 15.875 38.125C15.2917 37.5417 15 36.8333 15 36C15 35.1667 15.2917 34.4583 15.875 33.875C16.4583 33.2917 17.1667 33 18 33C18.2333 33 18.45 33.025 18.65 33.075C18.85 33.125 19.0417 33.1917 19.225 33.275L20.65 31.5C20.1833 30.9833 19.8583 30.4 19.675 29.75C19.4917 29.1 19.45 28.45 19.55 27.8L17.525 27.125C17.2417 27.5417 16.8833 27.875 16.45 28.125C16.0167 28.375 15.5333 28.5 15 28.5C14.1667 28.5 13.4583 28.2083 12.875 27.625C12.2917 27.0417 12 26.3333 12 25.5C12 24.6667 12.2917 23.9583 12.875 23.375C13.4583 22.7917 14.1667 22.5 15 22.5C15.8333 22.5 16.5417 22.7917 17.125 23.375C17.7083 23.9583 18 24.6667 18 25.5V25.7L20.025 26.4C20.3583 25.8 20.8043 25.2917 21.363 24.875C21.921 24.4583 22.55 24.1917 23.25 24.075V21.9C22.6 21.7167 22.0623 21.3623 21.637 20.837C21.2123 20.3123 21 19.7 21 19C21 18.1667 21.2917 17.4583 21.875 16.875C22.4583 16.2917 23.1667 16 24 16C24.8333 16 25.5417 16.2917 26.125 16.875C26.7083 17.4583 27 18.1667 27 19C27 19.7 26.7833 20.3123 26.35 20.837C25.9167 21.3623 25.3833 21.7167 24.75 21.9V24.075C25.45 24.1917 26.0793 24.4583 26.638 24.875C27.196 25.2917 27.6417 25.8 27.975 26.4L30 25.7V25.5C30 24.6667 30.2917 23.9583 30.875 23.375C31.4583 22.7917 32.1667 22.5 33 22.5C33.8333 22.5 34.5417 22.7917 35.125 23.375C35.7083 23.9583 36 24.6667 36 25.5C36 26.3333 35.7083 27.0417 35.125 27.625C34.5417 28.2083 33.8333 28.5 33 28.5C32.4667 28.5 31.9793 28.375 31.538 28.125C31.096 27.875 30.7417 27.5417 30.475 27.125L28.45 27.8C28.55 28.45 28.5083 29.0957 28.325 29.737C28.1417 30.379 27.8167 30.9667 27.35 31.5L28.775 33.25C28.9583 33.1667 29.15 33.104 29.35 33.062C29.55 33.0207 29.7667 33 30 33C30.8333 33 31.5417 33.2917 32.125 33.875C32.7083 34.4583 33 35.1667 33 36C33 36.8333 32.7083 37.5417 32.125 38.125C31.5417 38.7083 30.8333 39 30 39C29.1667 39 28.4583 38.7083 27.875 38.125C27.2917 37.5417 27 36.8333 27 36C27 35.6667 27.0543 35.346 27.163 35.038C27.271 34.7293 27.4167 34.45 27.6 34.2L26.175 32.425C25.4917 32.8083 24.7627 33 23.988 33C23.2127 33 22.4833 32.8083 21.8 32.425L20.4 34.2C20.5833 34.45 20.7293 34.7293 20.838 35.038C20.946 35.346 21 35.6667 21 36C21 36.8333 20.7083 37.5417 20.125 38.125C19.5417 38.7083 18.8333 39 18 39Z'
                fill={
                  location.pathname === `/detail/${user.onGoing}`
                    ? 'var(--color-orange)'
                    : 'var(--color-grey)'
                }
              />
            </g>
          </GnbST.GnbSVG>
        ) : (
          <GnbST.GnbSVG
            width='48'
            height='63'
            viewBox='0 0 48 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              if (!location.pathname.includes('/post')) {
                if (refreshToken) {
                  navigate(`/post`);
                } else {
                  setIsDP(true);
                }
              }
            }}
          >
            <path
              d='M11.7363 49.9766C10.1309 49.9648 8.97656 50.9844 8.98242 52.4141C8.97656 53.8613 10.1309 54.875 11.7363 54.875C13.1309 54.875 14.209 54.0664 14.4258 52.8594H16.4707V55.1328H17.584V49.4961H16.4707V51.9453H14.4199C14.1914 50.7676 13.1191 49.9648 11.7363 49.9766ZM10.0488 52.4141C10.043 51.5117 10.7461 50.8965 11.7363 50.9023C12.709 50.8965 13.4004 51.5117 13.4004 52.4141C13.4004 53.3105 12.709 53.9375 11.7363 53.9375C10.7461 53.9375 10.043 53.3105 10.0488 52.4141ZM10.7402 59.8672H17.584V55.6367H16.4707V56.8555H11.8418V55.6367H10.7402V59.8672ZM11.8418 58.9531V57.7344H16.4707V58.9531H11.8418ZM28.8105 57.8047H24.5332V55.9648H27.8848V55.0508H21.4746V53.5156H27.6387V50.2344H20.3496V51.1484H26.5371V52.625H20.373V55.9648H23.4316V57.8047H19.2012V58.7422H28.8105V57.8047ZM38.0801 54.4766H31.8691V51.3477H37.9863V50.4336H30.7676V55.3906H38.0801V54.4766ZM29.5723 58.6133H39.1816V57.6875H29.5723V58.6133Z'
              fill={
                tab === 'Upload' ? 'var(--color-orange)' : 'var(--color-grey)'
              }
            />
            <g mask='url(#mask0_2648_2249)'>
              <path
                d='M33.3103 25.7074L26.2345 18.7676L28.0138 16.9914C28.6759 16.3305 29.4692 16 30.3939 16C31.3175 16 32.0966 16.3305 32.731 16.9914L35.0483 19.346C35.6828 19.9793 36 20.7504 36 21.6592C36 22.568 35.6828 23.3391 35.0483 23.9725L33.3103 25.7074ZM13.6552 40C13.1862 40 12.7934 39.8419 12.4767 39.5258C12.1589 39.2085 12 38.8158 12 38.3477V34.3408C12 33.9002 12.0828 33.4799 12.2483 33.0801C12.4138 32.6813 12.6483 32.3305 12.9517 32.0275L23.8759 21.1222L30.9517 28.062L19.9862 39.0086C19.6828 39.3115 19.3313 39.5528 18.9319 39.7323C18.5313 39.9108 18.1103 40 17.669 40H13.6552Z'
                fill={
                  tab === 'Upload' ? 'var(--color-orange)' : 'var(--color-grey)'
                }
              />
            </g>
          </GnbST.GnbSVG>
        )}

        {user.onGoing ? (
          <GnbST.GnbSVG
            width='48'
            height='63'
            viewBox='0 0 48 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              if (!location.pathname.includes('/chat')) {
                if (refreshToken) {
                  if (user.onGoing) {
                    navigate(`/chat/${user.onGoing}`);
                  }
                } else {
                  setIsDP(true);
                }
              }
            }}
          >
            <path
              d='M17.6562 52.707V52.3203H19.5664V51.3945H17.6562V49.8711H16.6133V51.3945H14.668V52.3203H16.6133V52.707C16.6016 54.4004 15.8457 56.1875 14.3984 57.0312L15.0547 57.8516C16.0684 57.2656 16.7715 56.1699 17.1406 54.9043C17.5215 56.0879 18.2305 57.0898 19.25 57.6289L19.8828 56.7969C18.418 56.0293 17.6562 54.3418 17.6562 52.707ZM20.2109 59.4805H21.2656V54.6055H22.5195V59.9961H23.5859V49.4961H22.5195V53.668H21.2656V49.6953H20.2109V59.4805ZM30.5352 50.2578H25.4844V55.2969H26.3516C28.6484 55.3027 29.9551 55.2617 31.4727 55.0156L31.3555 54.1133C29.9316 54.3594 28.707 54.3945 26.6094 54.3828V53.1875H30.2422V52.3086H26.6094V51.1484H30.5352V50.2578ZM26.5039 58.0391C26.5039 59.2754 27.8457 59.9785 30.0781 59.9727C32.2754 59.9785 33.6465 59.2754 33.6523 58.0391C33.6465 56.8145 32.2754 56.1055 30.0781 56.1055C27.8457 56.1055 26.5039 56.8145 26.5039 58.0391ZM27.6172 58.0391C27.6113 57.3711 28.5137 56.9785 30.0781 56.9844C31.6133 56.9785 32.5449 57.3711 32.5391 58.0391C32.5449 58.7246 31.6133 59.1113 30.0781 59.1172C28.5137 59.1113 27.6113 58.7246 27.6172 58.0391ZM32.4805 55.9648H33.5938V49.5078H32.4805V55.9648Z'
              fill={
                tab === 'Chat' ? 'var(--color-orange)' : 'var(--color-grey)'
              }
            />
            <g mask='url(#mask0_2648_2254)'>
              <path
                d='M14.4 38C13.74 38 13.1752 37.7554 12.7056 37.2663C12.2352 36.7763 12 36.1875 12 35.5V20.5C12 19.8125 12.2352 19.2242 12.7056 18.735C13.1752 18.245 13.74 18 14.4 18H33.6C34.26 18 34.8252 18.245 35.2956 18.735C35.7652 19.2242 36 19.8125 36 20.5V35.5C36 36.1875 35.7652 36.7763 35.2956 37.2663C34.8252 37.7554 34.26 38 33.6 38H14.4ZM24 29.0312C24.1 29.0312 24.2048 29.0154 24.3144 28.9837C24.4248 28.9529 24.53 28.9062 24.63 28.8438L33.12 23.3125C33.28 23.2083 33.4 23.0783 33.48 22.9225C33.56 22.7658 33.6 22.5938 33.6 22.4062C33.6 21.9896 33.43 21.6771 33.09 21.4688C32.75 21.2604 32.4 21.2708 32.04 21.5L24 26.75L15.96 21.5C15.6 21.2708 15.25 21.2654 14.91 21.4838C14.57 21.7029 14.4 22.0104 14.4 22.4062C14.4 22.6146 14.44 22.7967 14.52 22.9525C14.6 23.1092 14.72 23.2292 14.88 23.3125L23.37 28.8438C23.47 28.9062 23.5752 28.9529 23.6856 28.9837C23.7952 29.0154 23.9 29.0312 24 29.0312Z'
                fill={
                  tab === 'Chat' ? 'var(--color-orange)' : 'var(--color-grey)'
                }
              />
            </g>
          </GnbST.GnbSVG>
        ) : (
          <GnbST.GnbSVG
            width='48'
            height='63'
            viewBox='0 0 48 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              if (!location.pathname.includes('/chat')) {
                if (refreshToken) {
                  if (user.onGoing) {
                    navigate(`/chat/${user.onGoing}`);
                  }
                } else {
                  setIsDP(true);
                }
              }
            }}
          >
            <path
              d='M17.6562 52.707V52.3203H19.5664V51.3945H17.6562V49.8711H16.6133V51.3945H14.668V52.3203H16.6133V52.707C16.6016 54.4004 15.8457 56.1875 14.3984 57.0312L15.0547 57.8516C16.0684 57.2656 16.7715 56.1699 17.1406 54.9043C17.5215 56.0879 18.2305 57.0898 19.25 57.6289L19.8828 56.7969C18.418 56.0293 17.6562 54.3418 17.6562 52.707ZM20.2109 59.4805H21.2656V54.6055H22.5195V59.9961H23.5859V49.4961H22.5195V53.668H21.2656V49.6953H20.2109V59.4805ZM30.5352 50.2578H25.4844V55.2969H26.3516C28.6484 55.3027 29.9551 55.2617 31.4727 55.0156L31.3555 54.1133C29.9316 54.3594 28.707 54.3945 26.6094 54.3828V53.1875H30.2422V52.3086H26.6094V51.1484H30.5352V50.2578ZM26.5039 58.0391C26.5039 59.2754 27.8457 59.9785 30.0781 59.9727C32.2754 59.9785 33.6465 59.2754 33.6523 58.0391C33.6465 56.8145 32.2754 56.1055 30.0781 56.1055C27.8457 56.1055 26.5039 56.8145 26.5039 58.0391ZM27.6172 58.0391C27.6113 57.3711 28.5137 56.9785 30.0781 56.9844C31.6133 56.9785 32.5449 57.3711 32.5391 58.0391C32.5449 58.7246 31.6133 59.1113 30.0781 59.1172C28.5137 59.1113 27.6113 58.7246 27.6172 58.0391ZM32.4805 55.9648H33.5938V49.5078H32.4805V55.9648Z'
              fill={
                tab === 'Chat'
                  ? 'var(--color-orange)'
                  : 'var(--color-blur-white)'
              }
            />
            <g mask='url(#mask0_2648_2254)'>
              <path
                d='M14.4 38C13.74 38 13.1752 37.7554 12.7056 37.2663C12.2352 36.7763 12 36.1875 12 35.5V20.5C12 19.8125 12.2352 19.2242 12.7056 18.735C13.1752 18.245 13.74 18 14.4 18H33.6C34.26 18 34.8252 18.245 35.2956 18.735C35.7652 19.2242 36 19.8125 36 20.5V35.5C36 36.1875 35.7652 36.7763 35.2956 37.2663C34.8252 37.7554 34.26 38 33.6 38H14.4ZM24 29.0312C24.1 29.0312 24.2048 29.0154 24.3144 28.9837C24.4248 28.9529 24.53 28.9062 24.63 28.8438L33.12 23.3125C33.28 23.2083 33.4 23.0783 33.48 22.9225C33.56 22.7658 33.6 22.5938 33.6 22.4062C33.6 21.9896 33.43 21.6771 33.09 21.4688C32.75 21.2604 32.4 21.2708 32.04 21.5L24 26.75L15.96 21.5C15.6 21.2708 15.25 21.2654 14.91 21.4838C14.57 21.7029 14.4 22.0104 14.4 22.4062C14.4 22.6146 14.44 22.7967 14.52 22.9525C14.6 23.1092 14.72 23.2292 14.88 23.3125L23.37 28.8438C23.47 28.9062 23.5752 28.9529 23.6856 28.9837C23.7952 29.0154 23.9 29.0312 24 29.0312Z'
                fill={
                  tab === 'Chat'
                    ? 'var(--color-orange)'
                    : 'var(--color-blur-white)'
                }
              />
            </g>
          </GnbST.GnbSVG>
        )}

        <GnbST.GnbSVG
          width='48'
          height='63'
          viewBox='0 0 48 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            if (!location.pathname.includes('/mypage')) navigate('/mypage');
          }}
        >
          <path
            d='M18.4395 57.7461H8.83008V58.6836H18.4395V57.7461ZM9.65039 51.418H11.2441V54.9219H9.67383V55.8125H17.5254V54.9219H15.9551V51.418H17.5605V50.5039H9.65039V51.418ZM12.3457 54.9219V51.418H14.8652V54.9219H12.3457ZM28.8105 57.8047H24.5332V55.9648H27.8848V55.0508H21.4746V53.5156H27.6387V50.2344H20.3496V51.1484H26.5371V52.625H20.373V55.9648H23.4316V57.8047H19.2012V58.7422H28.8105V57.8047ZM38.3027 49.4961H37.1777V54.9219H38.3027V49.4961ZM29.748 53.7148L29.877 54.6055C31.7227 54.6113 34.166 54.5352 36.2637 54.2188L36.2168 53.4102C35.7422 53.4688 35.2383 53.5156 34.7285 53.5508V51.0664H35.7363V50.1875H30.0293V51.0664H31.0254V53.7031C30.5801 53.709 30.1465 53.7148 29.748 53.7148ZM31.3301 56.2812H37.2012V57.1953H31.3652V59.8906H38.666V59H32.4551V58.0039H38.3027V55.4023H31.3301V56.2812ZM32.0918 53.6797V51.0664H33.6621V53.6152C33.1348 53.6445 32.6074 53.6621 32.0918 53.6797Z'
            fill={
              tab === 'Mypage' ? 'var(--color-orange)' : 'var(--color-grey)'
            }
          />
          <g mask='url(#mask0_2648_2259)'>
            <path
              d='M19.2 33.1111H28.8V32.4389C28.8 31.5222 28.36 30.7938 27.48 30.2536C26.6 29.7141 25.44 29.4444 24 29.4444C22.56 29.4444 21.4 29.7141 20.52 30.2536C19.64 30.7938 19.2 31.5222 19.2 32.4389V33.1111ZM24 28.2222C24.66 28.2222 25.2252 27.9827 25.6956 27.5036C26.1652 27.0253 26.4 26.45 26.4 25.7778C26.4 25.1056 26.1652 24.5299 25.6956 24.0508C25.2252 23.5725 24.66 23.3333 24 23.3333C23.34 23.3333 22.7752 23.5725 22.3056 24.0508C21.8352 24.5299 21.6 25.1056 21.6 25.7778C21.6 26.45 21.8352 27.0253 22.3056 27.5036C22.7752 27.9827 23.34 28.2222 24 28.2222ZM14.4 38C13.74 38 13.1752 37.7609 12.7056 37.2826C12.2352 36.8034 12 36.2278 12 35.5556V20.8889C12 20.2167 12.2352 19.6414 12.7056 19.1631C13.1752 18.684 13.74 18.4444 14.4 18.4444H18.18L19.68 16.7944C19.9 16.5296 20.1648 16.3308 20.4744 16.198C20.7848 16.066 21.11 16 21.45 16H26.55C26.89 16 27.2152 16.066 27.5256 16.198C27.8352 16.3308 28.1 16.5296 28.32 16.7944L29.82 18.4444H33.6C34.26 18.4444 34.8252 18.684 35.2956 19.1631C35.7652 19.6414 36 20.2167 36 20.8889V35.5556C36 36.2278 35.7652 36.8034 35.2956 37.2826C34.8252 37.7609 34.26 38 33.6 38H14.4Z'
              fill={
                tab === 'Mypage' ? 'var(--color-orange)' : 'var(--color-grey)'
              }
            />
          </g>
        </GnbST.GnbSVG>
      </GnbST.Bar>
    </GnbST.Box>
  );
}

export default GnbFloat;
