import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as MainST from './MainPageStyle';

import Layout from '../../components/layout/Layout';
import Carousel from '../../components/carousel/Carousel';

import { TabContext } from '../../context/TabContext';
import { useEffect } from 'react';
import Card from '../../components/elements/card/Card';

export default function MainPage(props) {

  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const { setTab } = useContext(TabContext);

  useEffect(() => {
    setTab('Home');
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <MainST.Top>
        <Carousel />
      </MainST.Top>

      <MainST.Search
        onClick={() => {
          navigate('/search');
        }}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_329_44)'>
            <path
              d='M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z'
              fill='#939393'
            />
          </g>
        </svg>

        <MainST.SearchText>검색어를 입력해주세요.</MainST.SearchText>
      </MainST.Search>

      <MainST.CtgSection>
        <MainST.CtgBox onClick={() => navigate(`/category/전체`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_204_158)'>
              <MainST.CtgPath
                d='M5.5875 16.5C5.0125 16.5 4.5815 16.256 4.2945 15.768C4.0065 15.281 4 14.7875 4.275 14.2875L9.225 5.3625C9.375 5.0875 9.5625 4.8875 9.7875 4.7625C10.0125 4.6375 10.2625 4.575 10.5375 4.575C10.8125 4.575 11.0625 4.6375 11.2875 4.7625C11.5125 4.8875 11.7 5.0875 11.85 5.3625L16.8 14.2875C17.075 14.7875 17.069 15.281 16.782 15.768C16.494 16.256 16.0625 16.5 15.4875 16.5H5.5875ZM10.5375 31.5C8.8875 31.5 7.475 30.9125 6.3 29.7375C5.125 28.5625 4.5375 27.15 4.5375 25.5C4.5375 23.825 5.125 22.406 6.3 21.243C7.475 20.081 8.8875 19.5 10.5375 19.5C12.1875 19.5 13.6 20.0875 14.775 21.2625C15.95 22.4375 16.5375 23.85 16.5375 25.5C16.5375 27.15 15.95 28.5625 14.775 29.7375C13.6 30.9125 12.1875 31.5 10.5375 31.5ZM21.0375 31.5C20.6125 31.5 20.256 31.356 19.968 31.068C19.681 30.781 19.5375 30.425 19.5375 30V21C19.5375 20.575 19.681 20.2185 19.968 19.9305C20.256 19.6435 20.6125 19.5 21.0375 19.5H30.0375C30.4625 19.5 30.819 19.6435 31.107 19.9305C31.394 20.2185 31.5375 20.575 31.5375 21V30C31.5375 30.425 31.394 30.781 31.107 31.068C30.819 31.356 30.4625 31.5 30.0375 31.5H21.0375ZM25.5375 15.9375C25.3375 15.9375 25.1375 15.906 24.9375 15.843C24.7375 15.781 24.5625 15.6875 24.4125 15.5625C23.0375 14.4125 21.931 13.4625 21.093 12.7125C20.256 11.9625 19.6125 11.3125 19.1625 10.7625C18.7125 10.2125 18.4125 9.7125 18.2625 9.2625C18.1125 8.8125 18.0375 8.3125 18.0375 7.7625C18.0375 6.6375 18.431 5.6875 19.218 4.9125C20.006 4.1375 20.9875 3.75 22.1625 3.75C22.8375 3.75 23.469 3.906 24.057 4.218C24.644 4.531 25.1375 4.9625 25.5375 5.5125C25.9375 4.9625 26.4315 4.531 27.0195 4.218C27.6065 3.906 28.2375 3.75 28.9125 3.75C30.0875 3.75 31.069 4.1375 31.857 4.9125C32.644 5.6875 33.0375 6.6375 33.0375 7.7625C33.0375 8.2875 32.969 8.775 32.832 9.225C32.694 9.675 32.4 10.175 31.95 10.725C31.5 11.275 30.8565 11.931 30.0195 12.693C29.1815 13.456 28.075 14.4125 26.7 15.5625C26.55 15.6875 26.369 15.781 26.157 15.843C25.944 15.906 25.7375 15.9375 25.5375 15.9375Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>전체</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/패스트푸드`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_470)'>
              <MainST.CtgPath
                d='M4.5 15C4.075 15 3.719 14.856 3.432 14.568C3.144 14.281 3 13.925 3 13.5C3 10.625 4.3565 8.406 7.0695 6.843C9.7815 5.281 13.425 4.5 18 4.5C22.575 4.5 26.219 5.281 28.932 6.843C31.644 8.406 33 10.625 33 13.5C33 13.925 32.856 14.281 32.568 14.568C32.281 14.856 31.925 15 31.5 15H4.5ZM3 20.25C3 19.9 3.125 19.556 3.375 19.218C3.625 18.881 3.975 18.6 4.425 18.375C4.875 18.15 5.35 17.906 5.85 17.643C6.35 17.381 7.075 17.25 8.025 17.25C9.425 17.25 10.375 17.5 10.875 18C11.375 18.5 12.075 18.75 12.975 18.75C13.875 18.75 14.5875 18.5 15.1125 18C15.6375 17.5 16.6 17.25 18 17.25C19.4 17.25 20.3625 17.5 20.8875 18C21.4125 18.5 22.125 18.75 23.025 18.75C23.925 18.75 24.625 18.5 25.125 18C25.625 17.5 26.575 17.25 27.975 17.25C28.9 17.25 29.625 17.375 30.15 17.625C30.675 17.875 31.15 18.1125 31.575 18.3375C32 18.5625 32.344 18.8435 32.607 19.1805C32.869 19.5185 33 19.875 33 20.25C33 20.675 32.819 21.0125 32.457 21.2625C32.094 21.5125 31.725 21.5875 31.35 21.4875C30.6 21.2875 30.056 21.031 29.718 20.718C29.381 20.406 28.85 20.25 28.125 20.25C27.225 20.25 26.5 20.5 25.95 21C25.4 21.5 24.425 21.75 23.025 21.75C21.625 21.75 20.6625 21.5 20.1375 21C19.6125 20.5 18.9 20.25 18 20.25C17.1 20.25 16.3875 20.5 15.8625 21C15.3375 21.5 14.375 21.75 12.975 21.75C11.575 21.75 10.625 21.5 10.125 21C9.625 20.5 8.925 20.25 8.025 20.25C7.3 20.25 6.75 20.406 6.375 20.718C6 21.031 5.425 21.2875 4.65 21.4875C4.275 21.5875 3.906 21.5125 3.543 21.2625C3.181 21.0125 3 20.675 3 20.25ZM6 31.5C5.175 31.5 4.469 31.2065 3.882 30.6195C3.294 30.0315 3 29.325 3 28.5V27C3 26.175 3.294 25.4685 3.882 24.8805C4.469 24.2935 5.175 24 6 24H30C30.825 24 31.5315 24.2935 32.1195 24.8805C32.7065 25.4685 33 26.175 33 27V28.5C33 29.325 32.7065 30.0315 32.1195 30.6195C31.5315 31.2065 30.825 31.5 30 31.5H6Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>
          <MainST.CtgText>패스트푸드</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox  onClick={() => navigate(`/category/치킨`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <MainST.CtgPath
              d='M8.81639 23.1677L7.49487 24.4932H6.55854C5.15603 24.4932 3.97378 25.6408 4.00044 27.0443C4.01232 27.6577 4.24904 28.2453 4.66564 28.6956C5.08224 29.1458 5.64971 29.4274 6.26026 29.4869C6.32564 29.4927 6.3869 29.5213 6.43331 29.5677C6.47972 29.6141 6.50832 29.6753 6.5141 29.7407C6.57397 30.351 6.85574 30.9181 7.30595 31.3345C7.75617 31.7508 8.34353 31.9875 8.95664 31.9996C10.3592 32.0262 11.5078 30.844 11.5078 29.4405V28.5032L12.8293 27.1806C12.8576 27.1527 12.8789 27.1185 12.8916 27.0809C12.9043 27.0432 12.908 27.0031 12.9025 26.9638C12.8969 26.9244 12.8822 26.8869 12.8596 26.8543C12.8369 26.8216 12.807 26.7947 12.7721 26.7757C11.2739 25.954 10.0406 24.7228 9.2164 23.226C9.19718 23.192 9.17046 23.1629 9.13826 23.1409C9.10607 23.1188 9.06927 23.1045 9.03067 23.0988C8.99207 23.0932 8.95269 23.0965 8.91555 23.1084C8.87841 23.1204 8.84449 23.1406 8.81639 23.1677V23.1677Z'
              fill='var(--color-light-orange)'
            />
            <MainST.CtgPath
              d='M22.803 4.00168C20.6126 3.9602 18.4768 4.68706 16.7664 6.0561C15.056 7.42513 13.879 9.34989 13.4397 11.4962C13.2382 12.522 12.7573 13.4722 12.0501 14.242C10.8347 15.5435 10.1746 17.2676 10.21 19.0481C10.2495 20.8232 10.9723 22.5147 12.2278 23.7702C13.4833 25.0257 15.1748 25.7485 16.95 25.788C18.7301 25.8231 20.4537 25.1631 21.7551 23.948C22.525 23.2404 23.4756 22.7594 24.5018 22.5583C26.6481 22.1188 28.5728 20.9416 29.9416 19.231C31.3105 17.5204 32.0371 15.3845 31.9954 13.1941C31.9015 8.18057 27.8165 4.09551 22.803 4.00168ZM18.39 10.0493C18.2744 10.0493 18.1599 10.0265 18.053 9.98219C17.9462 9.9379 17.8491 9.87299 17.7674 9.79117C17.6857 9.70935 17.6209 9.61222 17.5767 9.50533C17.5325 9.39845 17.5099 9.28391 17.51 9.16826C17.51 8.93486 17.6027 8.71102 17.7677 8.54598C17.9328 8.38095 18.1566 8.28823 18.39 8.28823C18.5057 8.2881 18.6202 8.31077 18.7271 8.35493C18.834 8.3991 18.9311 8.4639 19.0129 8.54563C19.0948 8.62737 19.1597 8.72442 19.204 8.83126C19.2482 8.93809 19.271 9.05261 19.271 9.16826C19.271 9.40192 19.1782 9.62601 19.013 9.79123C18.8478 9.95645 18.6237 10.0493 18.39 10.0493V10.0493ZM20.7437 11.5308C20.6281 11.5308 20.5137 11.508 20.4069 11.4638C20.3001 11.4196 20.2031 11.3548 20.1214 11.273C20.0397 11.1913 19.9749 11.0943 19.9306 10.9875C19.8864 10.8808 19.8636 10.7663 19.8636 10.6508C19.8635 10.5351 19.8862 10.4206 19.9303 10.3137C19.9745 10.2068 20.0393 10.1097 20.121 10.0279C20.2028 9.94604 20.2998 9.88113 20.4067 9.83684C20.5135 9.79255 20.628 9.76976 20.7437 9.76976C20.8593 9.76976 20.9738 9.79255 21.0807 9.83684C21.1875 9.88113 21.2846 9.94604 21.3663 10.0279C21.448 10.1097 21.5128 10.2068 21.557 10.3137C21.6012 10.4206 21.6238 10.5351 21.6237 10.6508C21.6242 10.7668 21.6018 10.8817 21.5578 10.989C21.5137 11.0963 21.4489 11.1938 21.367 11.2759C21.2851 11.3581 21.1878 11.4233 21.0807 11.4677C20.9735 11.5121 20.8587 11.5349 20.7427 11.5347L20.7437 11.5308ZM21.2602 8.78602C21.1446 8.78602 21.0301 8.76323 20.9232 8.71894C20.8164 8.67465 20.7193 8.60974 20.6376 8.52792C20.5559 8.4461 20.4911 8.34897 20.4469 8.24208C20.4027 8.1352 20.3801 8.02066 20.3802 7.90501C20.3802 7.67161 20.4729 7.44777 20.638 7.28274C20.803 7.1177 21.0268 7.02498 21.2602 7.02498C21.3759 7.02485 21.4904 7.04752 21.5973 7.09169C21.7042 7.13586 21.8013 7.20066 21.8831 7.28239C21.965 7.36412 22.0299 7.46118 22.0742 7.56801C22.1184 7.67484 22.1412 7.78936 22.1412 7.90501C22.1416 8.02104 22.1191 8.136 22.0749 8.2433C22.0308 8.35059 21.9659 8.44811 21.8839 8.53025C21.8019 8.61238 21.7046 8.67752 21.5974 8.72193C21.4902 8.76633 21.3753 8.78912 21.2592 8.78899L21.2602 8.78602Z'
              fill='var(--color-light-orange)'
            />
          </svg>

          <MainST.CtgText>치킨</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/분식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_471)'>
              <MainST.CtgPath
                d='M9.375 33.375V28.5H8.25C7.2 28.5 6.3125 28.1375 5.5875 27.4125C4.8625 26.6875 4.5 25.8 4.5 24.75C4.5 23.7 4.8625 22.8125 5.5875 22.0875C6.3125 21.3625 7.2 21 8.25 21H9.375V19.5H6C5.575 19.5 5.219 19.356 4.932 19.068C4.644 18.781 4.5 18.425 4.5 18V13.5C4.5 13.075 4.644 12.7185 4.932 12.4305C5.219 12.1435 5.575 12 6 12H9.375V10.5H8.25C7.2 10.5 6.3125 10.1375 5.5875 9.4125C4.8625 8.6875 4.5 7.8 4.5 6.75C4.5 5.7 4.8625 4.8125 5.5875 4.0875C6.3125 3.3625 7.2 3 8.25 3H9.375V2.625C9.375 2.3 9.4815 2.031 9.6945 1.818C9.9065 1.606 10.175 1.5 10.5 1.5C10.825 1.5 11.0935 1.606 11.3055 1.818C11.5185 2.031 11.625 2.3 11.625 2.625V3H12.75C13.8 3 14.6875 3.3625 15.4125 4.0875C16.1375 4.8125 16.5 5.7 16.5 6.75C16.5 7.8 16.1375 8.6875 15.4125 9.4125C14.6875 10.1375 13.8 10.5 12.75 10.5H11.625V12H15C15.425 12 15.7815 12.1435 16.0695 12.4305C16.3565 12.7185 16.5 13.075 16.5 13.5V18C16.5 18.425 16.3565 18.781 16.0695 19.068C15.7815 19.356 15.425 19.5 15 19.5H11.625V21H12.75C13.8 21 14.6875 21.3625 15.4125 22.0875C16.1375 22.8125 16.5 23.7 16.5 24.75C16.5 25.8 16.1375 26.6875 15.4125 27.4125C14.6875 28.1375 13.8 28.5 12.75 28.5H11.625V33.375C11.625 33.7 11.5185 33.969 11.3055 34.182C11.0935 34.394 10.825 34.5 10.5 34.5C10.175 34.5 9.9065 34.394 9.6945 34.182C9.4815 33.969 9.375 33.7 9.375 33.375ZM24.375 33.375V28.5H23.25C22.2 28.5 21.3125 28.1375 20.5875 27.4125C19.8625 26.6875 19.5 25.8 19.5 24.75C19.5 23.7 19.8625 22.8125 20.5875 22.0875C21.3125 21.3625 22.2 21 23.25 21H24.375V19.5H21C20.575 19.5 20.219 19.356 19.932 19.068C19.644 18.781 19.5 18.425 19.5 18V13.5C19.5 13.075 19.644 12.7185 19.932 12.4305C20.219 12.1435 20.575 12 21 12H24.375V10.5H23.25C22.2 10.5 21.3125 10.1375 20.5875 9.4125C19.8625 8.6875 19.5 7.8 19.5 6.75C19.5 5.7 19.8625 4.8125 20.5875 4.0875C21.3125 3.3625 22.2 3 23.25 3H24.375V2.625C24.375 2.3 24.481 2.031 24.693 1.818C24.906 1.606 25.175 1.5 25.5 1.5C25.825 1.5 26.094 1.606 26.307 1.818C26.519 2.031 26.625 2.3 26.625 2.625V3H27.75C28.8 3 29.6875 3.3625 30.4125 4.0875C31.1375 4.8125 31.5 5.7 31.5 6.75C31.5 7.8 31.1375 8.6875 30.4125 9.4125C29.6875 10.1375 28.8 10.5 27.75 10.5H26.625V12H30C30.425 12 30.781 12.1435 31.068 12.4305C31.356 12.7185 31.5 13.075 31.5 13.5V18C31.5 18.425 31.356 18.781 31.068 19.068C30.781 19.356 30.425 19.5 30 19.5H26.625V21H27.75C28.8 21 29.6875 21.3625 30.4125 22.0875C31.1375 22.8125 31.5 23.7 31.5 24.75C31.5 25.8 31.1375 26.6875 30.4125 27.4125C29.6875 28.1375 28.8 28.5 27.75 28.5H26.625V33.375C26.625 33.7 26.519 33.969 26.307 34.182C26.094 34.394 25.825 34.5 25.5 34.5C25.175 34.5 24.906 34.394 24.693 34.182C24.481 33.969 24.375 33.7 24.375 33.375Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>
          <MainST.CtgText>분식</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/야식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_529)'>
              <MainST.CtgPath
                d='M27.1128 31.2764C25.3444 32.3133 23.4736 32.9533 21.5007 33.1965C19.5283 33.4406 17.61 33.3191 15.7456 32.8321C13.881 32.3465 12.1472 31.5158 10.5444 30.3399C8.94252 29.1636 7.62315 27.6911 6.58635 25.9227C5.5369 24.1326 4.89343 22.257 4.65592 20.2958C4.41878 18.3332 4.5437 16.4198 5.03068 14.5555C5.5163 12.6908 6.34703 10.9571 7.52288 9.35426C8.69924 7.75233 10.1717 6.43297 11.9401 5.39616C12.8891 4.83983 13.8656 4.40469 14.8697 4.09075C15.8743 3.77766 16.8939 3.56421 17.9284 3.45037C18.3188 3.42433 18.5974 3.52878 18.7641 3.76372C18.9313 3.99953 18.9272 4.31377 18.7517 4.70646C17.808 6.85357 17.382 9.11743 17.4736 11.498C17.5651 13.8786 18.2495 16.158 19.5265 18.3363C20.8035 20.5146 22.4583 22.225 24.4909 23.4677C26.5235 24.7103 28.7071 25.4442 31.0416 25.6695C31.47 25.7081 31.7462 25.858 31.8703 26.1191C31.9939 26.3793 31.949 26.6735 31.7355 27.0014C31.1309 27.8485 30.4464 28.6335 29.6821 29.3564C28.9182 30.0801 28.0618 30.7201 27.1128 31.2764Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>야식</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/한식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_472)'>
              <MainST.CtgPath
                d='M12 33V30.375C9.35 29.325 7.1875 27.7 5.5125 25.5C3.8375 23.3 3 20.8 3 18C3 15.925 3.394 13.975 4.182 12.15C4.969 10.325 6.0375 8.7375 7.3875 7.3875C8.7375 6.0375 10.325 4.9685 12.15 4.1805C13.975 3.3935 15.925 3 18 3C20.075 3 22.025 3.3935 23.85 4.1805C25.675 4.9685 27.2625 6.0375 28.6125 7.3875C29.9625 8.7375 31.031 10.325 31.818 12.15C32.606 13.975 33 15.925 33 18C33 20.8 32.1625 23.3 30.4875 25.5C28.8125 27.7 26.65 29.325 24 30.375V33H12ZM15 18H21V6.375C20.5 6.25 20.006 6.156 19.518 6.093C19.031 6.031 18.525 6 18 6C17.475 6 16.969 6.031 16.482 6.093C15.994 6.156 15.5 6.25 15 6.375V18ZM6 18H12V7.6125C10.2 8.6625 8.75 10.094 7.65 11.907C6.55 13.719 6 15.75 6 18ZM24 18H30C30 15.75 29.45 13.719 28.35 11.907C27.25 10.094 25.8 8.6625 24 7.6125V18Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>한식</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/중식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_463)'>
              <MainST.CtgPath
                d='M13.4625 33C13.0375 33 12.6815 32.856 12.3945 32.568C12.1065 32.281 11.9625 31.925 11.9625 31.5V30.375C9.5625 29.425 7.56899 28.019 5.982 26.157C4.394 24.294 3.425 22.15 3.075 19.725C3.025 19.275 3.156 18.875 3.468 18.525C3.781 18.175 4.1875 18 4.6875 18H5.9625V7.34999C5.9625 6.97499 6.0935 6.64349 6.3555 6.35549C6.6185 6.06849 6.9375 5.89999 7.3125 5.84999L31.725 3.14999C32.075 3.09999 32.369 3.18099 32.607 3.39299C32.844 3.60599 32.9625 3.88749 32.9625 4.23749C32.9625 4.51249 32.869 4.75599 32.682 4.96799C32.494 5.18099 32.2625 5.31249 31.9875 5.36249L15.7125 7.2V9.74999H31.8375C32.1625 9.74999 32.4315 9.85649 32.6445 10.0695C32.8565 10.2815 32.9625 10.55 32.9625 10.875C32.9625 11.2 32.8565 11.4685 32.6445 11.6805C32.4315 11.8935 32.1625 12 31.8375 12H15.7125V18H31.2375C31.7375 18 32.144 18.175 32.457 18.525C32.769 18.875 32.9 19.275 32.85 19.725C32.5 22.15 31.531 24.294 29.943 26.157C28.356 28.019 26.3625 29.425 23.9625 30.375V31.5C23.9625 31.925 23.819 32.281 23.532 32.568C23.244 32.856 22.8875 33 22.4625 33H13.4625ZM11.9625 9.74999H13.4625V7.42499L11.9625 7.575V9.74999ZM8.2125 9.74999H9.7125V7.87499L8.2125 8.02499V9.74999ZM11.9625 18H13.4625V12H11.9625V18ZM8.2125 18H9.7125V12H8.2125V18Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>중식</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/양식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_465)'>
              <MainST.CtgPath
                d='M18 30.6C17.525 30.6 17.0625 30.4875 16.6125 30.2625C16.1625 30.0375 15.7875 29.7 15.4875 29.25L4.68751 13.0125C4.21251 12.2875 4.04401 11.4935 4.18201 10.6305C4.31901 9.7685 4.72501 9.1125 5.40001 8.6625C7.27501 7.3875 9.27501 6.375 11.4 5.625C13.525 4.875 15.725 4.5 18 4.5C20.275 4.5 22.475 4.8685 24.6 5.6055C26.725 6.3435 28.725 7.3625 30.6 8.6625C31.25 9.1125 31.65 9.7685 31.8 10.6305C31.95 11.4935 31.7875 12.2875 31.3125 13.0125L20.5125 29.25C20.2125 29.7 19.8375 30.0375 19.3875 30.2625C18.9375 30.4875 18.475 30.6 18 30.6ZM14.25 15C14.875 15 15.406 14.781 15.843 14.343C16.281 13.906 16.5 13.375 16.5 12.75C16.5 12.125 16.281 11.594 15.843 11.157C15.406 10.719 14.875 10.5 14.25 10.5C13.625 10.5 13.094 10.719 12.657 11.157C12.219 11.594 12 12.125 12 12.75C12 13.375 12.219 13.906 12.657 14.343C13.094 14.781 13.625 15 14.25 15ZM18 22.5C18.625 22.5 19.156 22.281 19.593 21.843C20.031 21.406 20.25 20.875 20.25 20.25C20.25 19.625 20.031 19.094 19.593 18.657C19.156 18.219 18.625 18 18 18C17.375 18 16.844 18.219 16.407 18.657C15.969 19.094 15.75 19.625 15.75 20.25C15.75 20.875 15.969 21.406 16.407 21.843C16.844 22.281 17.375 22.5 18 22.5Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>
          <MainST.CtgText>양식</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/일식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_467)'>
              <MainST.CtgPath
                d='M4.5 22.5C3.675 22.5 2.969 22.206 2.382 21.618C1.794 21.031 1.5 20.325 1.5 19.5V6C1.5 5.175 1.794 4.4685 2.382 3.8805C2.969 3.2935 3.675 3 4.5 3H31.5C32.325 3 33.0315 3.2935 33.6195 3.8805C34.2065 4.4685 34.5 5.175 34.5 6V19.5C34.5 20.325 34.2065 21.031 33.6195 21.618C33.0315 22.206 32.325 22.5 31.5 22.5H4.5ZM5.7375 27.675C5.4125 27.7 5.1375 27.6125 4.9125 27.4125C4.6875 27.2125 4.5625 26.95 4.5375 26.625C4.5125 26.3 4.6065 26.025 4.8195 25.8C5.0315 25.575 5.3 25.45 5.625 25.425L30.3375 24.15C30.6625 24.125 30.9375 24.2125 31.1625 24.4125C31.3875 24.6125 31.5125 24.875 31.5375 25.2C31.5625 25.525 31.4685 25.8 31.2555 26.025C31.0435 26.25 30.775 26.375 30.45 26.4L5.7375 27.675ZM5.625 31.4625C5.3 31.4625 5.0315 31.3565 4.8195 31.1445C4.6065 30.9315 4.5 30.6625 4.5 30.3375C4.5 30.0125 4.6065 29.744 4.8195 29.532C5.0315 29.319 5.3 29.2125 5.625 29.2125H30.375C30.7 29.2125 30.969 29.319 31.182 29.532C31.394 29.744 31.5 30.0125 31.5 30.3375C31.5 30.6625 31.394 30.9315 31.182 31.1445C30.969 31.3565 30.7 31.4625 30.375 31.4625H5.625ZM5.925 13.5375C6.55 14.1875 7.6315 14.9685 9.1695 15.8805C10.7065 16.7935 12.775 17.25 15.375 17.25C18.25 17.25 20.4815 16.706 22.0695 15.618C23.6565 14.531 24.7 13.7125 25.2 13.1625C25.325 13.9375 25.7 14.6185 26.325 15.2055C26.95 15.7935 27.7375 16.1875 28.6875 16.3875C29.0375 16.4625 29.344 16.381 29.607 16.143C29.869 15.906 30 15.6125 30 15.2625V10.275C30 9.925 29.869 9.631 29.607 9.393C29.344 9.156 29.0375 9.075 28.6875 9.15C27.7375 9.35 26.95 9.7375 26.325 10.3125C25.7 10.8875 25.325 11.5625 25.2 12.3375C24.7 11.7875 23.6565 10.969 22.0695 9.882C20.4815 8.794 18.25 8.25 15.375 8.25C12.775 8.25 10.7065 8.7125 9.1695 9.6375C7.6315 10.5625 6.55 11.35 5.925 12C5.725 12.225 5.625 12.481 5.625 12.768C5.625 13.056 5.725 13.3125 5.925 13.5375Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>일식/회</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/디저트`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_607)'>
              <MainST.CtgPath
                d='M18.075 32.7375C17.8 32.7375 17.5375 32.675 17.2875 32.55C17.0375 32.425 16.85 32.225 16.725 31.95L11.025 21C9.25 21.075 7.7185 20.5625 6.4305 19.4625C5.1435 18.3625 4.5 16.875 4.5 15C4.5 13.725 4.869 12.575 5.607 11.55C6.344 10.525 7.275 9.8 8.4 9.375C8.85 7.1 9.969 5.2185 11.757 3.7305C13.544 2.2435 15.625 1.5 18 1.5C20.375 1.5 22.4565 2.2435 24.2445 3.7305C26.0315 5.2185 27.15 7.1 27.6 9.375C28.725 9.8 29.6565 10.525 30.3945 11.55C31.1315 12.575 31.5 13.725 31.5 15C31.5 16.875 30.8375 18.3625 29.5125 19.4625C28.1875 20.5625 26.7 21.075 25.05 21L19.3875 31.95C19.2625 32.225 19.081 32.425 18.843 32.55C18.606 32.675 18.35 32.7375 18.075 32.7375ZM18.075 27.975L22.125 20.1C21.525 20.4 20.875 20.625 20.175 20.775C19.475 20.925 18.75 21 18 21C17.325 21 16.644 20.925 15.957 20.775C15.269 20.625 14.6 20.4 13.95 20.1L18.075 27.975Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>디저트</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/채식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_504)'>
              <MainST.CtgPath
                d='M30 6H18C14.65 6 11.8125 7.1625 9.4875 9.4875C7.1625 11.8125 6 14.65 6 18C6 19.4 6.219 20.725 6.657 21.975C7.094 23.225 7.7125 24.3625 8.5125 25.3875L6.45 27.45C6.175 27.725 6.0375 28.075 6.0375 28.5C6.0375 28.925 6.175 29.275 6.45 29.55C6.725 29.825 7.075 29.9625 7.5 29.9625C7.925 29.9625 8.275 29.825 8.55 29.55L10.65 27.4875C11.675 28.2875 12.8065 28.906 14.0445 29.343C15.2815 29.781 16.6 30 18 30C21.35 30 24.1875 28.8375 26.5125 26.5125C28.8375 24.1875 30 21.35 30 18V6ZM20.55 15.45C20.85 15.75 21 16.106 21 16.518C21 16.931 20.85 17.2875 20.55 17.5875L14.6625 23.475C14.3625 23.775 14 23.931 13.575 23.943C13.15 23.956 12.8 23.8 12.525 23.475C12.25 23.175 12.1125 22.819 12.1125 22.407C12.1125 21.994 12.25 21.65 12.525 21.375L18.45 15.45C18.725 15.175 19.075 15.0375 19.5 15.0375C19.925 15.0375 20.275 15.175 20.55 15.45Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>채식</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/아시안`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_104_92)'>
              <MainST.CtgPath
                d='M6.33748 31.5C6.23748 31.5 6.14349 31.481 6.05549 31.443C5.96849 31.406 5.88748 31.35 5.81248 31.275L4.31248 29.775C4.06248 29.525 3.99998 29.25 4.12498 28.95C4.24998 28.65 4.48748 28.5 4.83748 28.5H31.2375C31.5875 28.5 31.825 28.65 31.95 28.95C32.075 29.25 32.0125 29.525 31.7625 29.775L30.2625 31.275C30.1875 31.35 30.1065 31.406 30.0195 31.443C29.9315 31.481 29.8375 31.5 29.7375 31.5H6.33748ZM4.53748 27C4.68748 26.55 4.88748 26.125 5.13748 25.725C5.38748 25.325 5.68748 24.95 6.03749 24.6V13.5H5.66249C5.33748 13.5 5.06898 13.3935 4.85698 13.1805C4.64398 12.9685 4.53748 12.7 4.53748 12.375C4.53748 12.05 4.64398 11.7815 4.85698 11.5695C5.06898 11.3565 5.33748 11.25 5.66249 11.25H6.03749V10.125H5.66249C5.33748 10.125 5.06898 10.0185 4.85698 9.8055C4.64398 9.5935 4.53748 9.325 4.53748 9C4.53748 8.675 4.64398 8.4065 4.85698 8.1945C5.06898 7.9815 5.33748 7.875 5.66249 7.875H6.03749V6.75H5.66249C5.33748 6.75 5.06898 6.6435 4.85698 6.4305C4.64398 6.2185 4.53748 5.95 4.53748 5.625C4.53748 5.3 4.64398 5.031 4.85698 4.818C5.06898 4.606 5.33748 4.5 5.66249 4.5H14.6625C15.6125 4.5 16.4125 4.825 17.0625 5.475C17.7125 6.125 18.0375 6.925 18.0375 7.875H30.4125C30.7375 7.875 31.006 7.9815 31.218 8.1945C31.431 8.4065 31.5375 8.675 31.5375 9C31.5375 9.325 31.431 9.5935 31.218 9.8055C31.006 10.0185 30.7375 10.125 30.4125 10.125H18.0375C18.0375 11.075 17.7125 11.875 17.0625 12.525C16.4125 13.175 15.6125 13.5 14.6625 13.5H12.0375V22.65C12.4125 22.7 12.769 22.775 13.107 22.875C13.444 22.975 13.7625 23.125 14.0625 23.325C14.6625 21.775 15.6565 20.5 17.0445 19.5C18.4315 18.5 20.0125 18 21.7875 18C24.2125 18 26.2375 18.8875 27.8625 20.6625C29.4875 22.4375 30.1875 24.55 29.9625 27H4.53748ZM12.0375 7.875H15.0375V6.75H12.0375V7.875ZM12.0375 11.25H15.0375V10.125H12.0375V11.25ZM8.28749 7.875H9.78749V6.75H8.28749V7.875ZM8.28749 11.25H9.78749V10.125H8.28749V11.25ZM8.28749 23.025C8.51249 22.9 8.74999 22.806 8.99999 22.743C9.24999 22.681 9.51249 22.625 9.78749 22.575V13.5H8.28749V23.025Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>아시안</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/건강식`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <MainST.CtgPath
              d='M18 3C16.331 2.99972 14.7011 3.50547 13.3255 4.45052C11.9498 5.39557 10.893 6.7355 10.2945 8.2935C9.67229 8.11408 9.04151 7.9659 8.4045 7.8495C7.09443 7.61232 5.76536 7.49583 4.434 7.5015L4.176 7.5075L4.104 7.5105L4.074 7.512C3.79725 7.52711 3.53582 7.64385 3.33983 7.83983C3.14385 8.03581 3.02711 8.29725 3.012 8.574L3.0075 8.6775C2.99724 9.06948 2.99974 9.46168 3.015 9.8535C3.045 10.623 3.129 11.694 3.3495 12.9045C3.5505 14.007 3.8715 15.252 4.3845 16.5H4.119C3.82222 16.5 3.5376 16.6179 3.32775 16.8277C3.11789 17.0376 3 17.3222 3 17.619V18C3 19.5675 3.24 21.0795 3.687 22.5H32.313C32.7697 21.0437 33.0013 19.5262 33 18V17.619C33 17.3222 32.8821 17.0376 32.6722 16.8277C32.4624 16.6179 32.1778 16.5 31.881 16.5H31.4955C31.5379 14.8445 31.0173 13.2237 30.019 11.9025C29.0207 10.5812 27.6036 9.63783 25.9995 9.2265C25.5486 7.44645 24.5169 5.86761 23.0678 4.73986C21.6186 3.6121 19.8348 2.99985 17.9985 3H18ZM18 5.25C19.1998 5.25018 20.3721 5.60999 21.3654 6.28299C22.3587 6.95598 23.1275 7.91125 23.5725 9.0255C22.2826 9.13391 21.0446 9.58257 19.9847 10.3257C18.9248 11.0688 18.0811 12.0798 17.5395 13.2555C17.1349 12.6562 16.6744 12.0967 16.164 11.5845C15.0405 10.461 13.734 9.6495 12.411 9.06C12.8516 7.93669 13.6206 6.97227 14.6176 6.29261C15.6146 5.61295 16.7934 5.24961 18 5.25ZM29.247 16.3125C29.247 16.3755 29.247 16.4385 29.244 16.5H19.1505L19.1235 16.425V16.3125C19.1235 14.9698 19.6569 13.6822 20.6063 12.7328C21.5557 11.7834 22.8433 11.25 24.186 11.25C25.5287 11.25 26.8163 11.7834 27.7657 12.7328C28.7151 13.6822 29.2485 14.9698 29.2485 16.3125H29.247ZM14.574 13.176C15.5385 14.139 16.2375 15.2985 16.7415 16.5H13.5915L10.92 13.83C10.817 13.7195 10.6928 13.6308 10.5548 13.5693C10.4168 13.5078 10.2678 13.4748 10.1168 13.4721C9.96573 13.4694 9.81568 13.4972 9.6756 13.5538C9.53552 13.6104 9.40827 13.6946 9.30144 13.8014C9.19461 13.9083 9.1104 14.0355 9.05381 14.1756C8.99723 14.3157 8.96945 14.4657 8.97211 14.6168C8.97478 14.7678 9.00784 14.9168 9.06933 15.0548C9.13081 15.1928 9.21947 15.317 9.33 15.42L10.41 16.5H6.855C6.195 15.186 5.799 13.7805 5.565 12.4995C5.40089 11.5967 5.30065 10.6834 5.265 9.7665V9.7635H5.2665C5.9565 9.789 6.918 9.8655 7.9995 10.0635C10.1895 10.464 12.7395 11.3385 14.574 13.176ZM4.6005 24.75C5.85079 27.2312 7.76565 29.3164 10.1316 30.7731C12.4975 32.2298 15.2216 33.0007 18 33C20.7784 33.0007 23.5025 32.2298 25.8684 30.7731C28.2343 29.3164 30.1492 27.2312 31.3995 24.75H4.6005ZM19.1235 16.425L19.1505 16.5L19.1235 16.425Z'
              fill='var(--color-light-orange)'
            />
          </svg>

          <MainST.CtgText>건강식</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/샌드위치`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_82_466)'>
              <MainST.CtgPath
                d='M9 31.5C8.175 31.5 7.469 31.2065 6.882 30.6195C6.294 30.0315 6 29.325 6 28.5V15.675C5.075 15.125 4.344 14.3935 3.807 13.4805C3.269 12.5685 3 11.575 3 10.5C3 8.85 3.5875 7.4375 4.7625 6.2625C5.9375 5.0875 7.35 4.5 9 4.5H27C28.65 4.5 30.0625 5.0875 31.2375 6.2625C32.4125 7.4375 33 8.85 33 10.5C33 11.575 32.731 12.5685 32.193 13.4805C31.656 14.3935 30.925 15.125 30 15.675V28.5C30 29.325 29.7065 30.0315 29.1195 30.6195C28.5315 31.2065 27.825 31.5 27 31.5H9ZM16.95 25.05C17.25 25.325 17.6065 25.4625 18.0195 25.4625C18.4315 25.4625 18.775 25.325 19.05 25.05L23.55 20.55C23.85 20.25 24 19.8935 24 19.4805C24 19.0685 23.85 18.725 23.55 18.45L19.05 13.95C18.775 13.65 18.4315 13.5 18.0195 13.5C17.6065 13.5 17.25 13.65 16.95 13.95L12.45 18.45C12.175 18.725 12.0375 19.0685 12.0375 19.4805C12.0375 19.8935 12.175 20.25 12.45 20.55L16.95 25.05ZM18 21.9L15.6 19.5L18 17.1L20.4 19.5L18 21.9Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>샌드위치</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgBox onClick={() => navigate(`/category/편의점`)}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_159_62)'>
              <MainST.CtgPath
                d='M12.7875 27H15.7875C15.9875 27 16.1625 26.925 16.3125 26.775C16.4625 26.625 16.5375 26.45 16.5375 26.25C16.5375 26.05 16.4625 25.875 16.3125 25.725C16.1625 25.575 15.9875 25.5 15.7875 25.5H13.5375V24H15.7875C15.9875 24 16.1625 23.925 16.3125 23.775C16.4625 23.625 16.5375 23.45 16.5375 23.25V20.25C16.5375 20.05 16.4625 19.875 16.3125 19.725C16.1625 19.575 15.9875 19.5 15.7875 19.5H12.7875C12.5875 19.5 12.4125 19.575 12.2625 19.725C12.1125 19.875 12.0375 20.05 12.0375 20.25C12.0375 20.45 12.1125 20.625 12.2625 20.775C12.4125 20.925 12.5875 21 12.7875 21H15.0375V22.5H12.7875C12.5875 22.5 12.4125 22.575 12.2625 22.725C12.1125 22.875 12.0375 23.05 12.0375 23.25V26.25C12.0375 26.45 12.1125 26.625 12.2625 26.775C12.4125 26.925 12.5875 27 12.7875 27ZM23.2875 27C23.4875 27 23.6625 26.925 23.8125 26.775C23.9625 26.625 24.0375 26.45 24.0375 26.25V20.25C24.0375 20.05 23.9625 19.875 23.8125 19.725C23.6625 19.575 23.4875 19.5 23.2875 19.5C23.0875 19.5 22.9125 19.575 22.7625 19.725C22.6125 19.875 22.5375 20.05 22.5375 20.25V22.5H21.0375V20.25C21.0375 20.05 20.9625 19.875 20.8125 19.725C20.6625 19.575 20.4875 19.5 20.2875 19.5C20.0875 19.5 19.9125 19.575 19.7625 19.725C19.6125 19.875 19.5375 20.05 19.5375 20.25V23.25C19.5375 23.45 19.6125 23.625 19.7625 23.775C19.9125 23.925 20.0875 24 20.2875 24H22.5375V26.25C22.5375 26.45 22.6125 26.625 22.7625 26.775C22.9125 26.925 23.0875 27 23.2875 27ZM31.5375 16.575V28.5C31.5375 29.325 31.244 30.0315 30.657 30.6195C30.069 31.2065 29.3625 31.5 28.5375 31.5H7.53751C6.71251 31.5 6.00651 31.2065 5.41951 30.6195C4.83151 30.0315 4.53751 29.325 4.53751 28.5V16.575C3.96251 16.05 3.51901 15.375 3.20701 14.55C2.89401 13.725 2.88751 12.825 3.18751 11.85L4.76251 6.75C4.96251 6.1 5.31901 5.5625 5.83201 5.1375C6.34401 4.7125 6.93751 4.5 7.61251 4.5H28.4625C29.1375 4.5 29.725 4.706 30.225 5.118C30.725 5.531 31.0875 6.075 31.3125 6.75L32.8875 11.85C33.1875 12.825 33.1815 13.7125 32.8695 14.5125C32.5565 15.3125 32.1125 16 31.5375 16.575ZM21.3375 15C22.0125 15 22.525 14.7685 22.875 14.3055C23.225 13.8435 23.3625 13.325 23.2875 12.75L22.4625 7.5H19.5375V13.05C19.5375 13.575 19.7125 14.0315 20.0625 14.4195C20.4125 14.8065 20.8375 15 21.3375 15ZM14.5875 15C15.1625 15 15.6315 14.8065 15.9945 14.4195C16.3565 14.0315 16.5375 13.575 16.5375 13.05V7.5H13.6125L12.7875 12.75C12.6875 13.35 12.819 13.875 13.182 14.325C13.544 14.775 14.0125 15 14.5875 15ZM7.91251 15C8.36251 15 8.75601 14.8375 9.09301 14.5125C9.43101 14.1875 9.63751 13.775 9.71251 13.275L10.5375 7.5H7.61251L6.11251 12.525C5.96251 13.025 6.04351 13.5625 6.35551 14.1375C6.66851 14.7125 7.18751 15 7.91251 15ZM28.1625 15C28.8875 15 29.4125 14.7125 29.7375 14.1375C30.0625 13.5625 30.1375 13.025 29.9625 12.525L28.3875 7.5H25.5375L26.3625 13.275C26.4375 13.775 26.644 14.1875 26.982 14.5125C27.319 14.8375 27.7125 15 28.1625 15Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>

          <MainST.CtgText>편의점</MainST.CtgText>
        </MainST.CtgBox>

        <MainST.CtgVac />
        <MainST.CtgVac />
        <MainST.CtgVac />
        <MainST.CtgVac />
        <MainST.CtgVac />
      </MainST.CtgSection>

      <MainST.Line />

      <MainST.LimitBox>
        <div style={{ marginBottom: '4px' }}>
          <MainST.LimitAdr>
            서울시 마포구 양화로 12길{' '}
            <span style={{ fontWeight: 'var(--weight-regular)' }}>근처</span>
          </MainST.LimitAdr>
          <h2 style={{ color: 'var(--color-light-black)', marginTop: '8px' }}>
            <span
              style={{
                fontWeight: 'var(--weight-bold)',
                color: 'var(--color-orange)',
              }}
            >
              주문 임박!
            </span>{' '}
            곧 마감되는 공구에요.
          </h2>
        </div>

        <MainST.LimitList>
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </MainST.LimitList>
      </MainST.LimitBox>

      <div style={{ width: '100%', height: '152px' }}></div>
    </Layout>
  );
}
