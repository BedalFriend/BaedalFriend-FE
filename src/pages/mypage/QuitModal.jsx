import store from '../../redux/config/ConfigStore';
import axios from 'axios';
import { getCookieToken } from '../../shared/storage/Cookie';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import * as QuitST from './QuitModalStyle'
import useOutSideClick from '../../hooks/useOutSideClick';
import ErrorModal from './ErrorModal';

export default function QuitModal({closeModal2}) {

  //토큰
  const authorization = store.getState()?.token?.accessToken;
  const refreshToken = getCookieToken();
  const userId = useSelector((state) => state.user.id);

  const modalRef = useRef(null)
  const [errorOpen, setErrorOpen] = useState(false);

  const closeErrorModal = () => {
    setErrorOpen(false);
  }

  const handleClose = () => {
    closeModal2();
  };

  useOutSideClick(modalRef, handleClose);

  //외부 스크롤 막기
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  const onQuitHandler = () => {
    axios
      .delete(`https://sparta-bds.shop/v1/withdrawal/${userId}`,
      { headers:
        { 'Authorization' : `${authorization}`,
          'Refresh_Token' : `${refreshToken}`,} })
      .then((res) => {
        if (res.data.success === false) {
          setErrorOpen(true);
        } else {
          window.location.replace("/")
        }
        console.log(res)
      });
  }

  return (
    <QuitST.Overlay>
      <QuitST.ModalWrap ref={modalRef}>
        {errorOpen === true ?
          (<ErrorModal
            closeErrorModal={closeErrorModal}
            closeModal2={closeModal2}/>)
          :
          (<>
          <QuitST.InfoBox>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_566_568" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="white"/>
              </mask>
              <g mask="url(#mask0_566_568)">
                <path d="M12 13C12.2833 13 12.521 12.904 12.713 12.712C12.9043 12.5207 13 12.2833 13 12V7.975C13 7.69167 12.9043 7.45833 12.713 7.275C12.521 7.09167 12.2833 7 12 7C11.7167 7 11.4793 7.09567 11.288 7.287C11.096 7.479 11 7.71667 11 8V12.025C11 12.3083 11.096 12.5417 11.288 12.725C11.4793 12.9083 11.7167 13 12 13ZM12 17C12.2833 17 12.521 16.904 12.713 16.712C12.9043 16.5207 13 16.2833 13 16C13 15.7167 12.9043 15.479 12.713 15.287C12.521 15.0957 12.2833 15 12 15C11.7167 15 11.4793 15.0957 11.288 15.287C11.096 15.479 11 15.7167 11 16C11 16.2833 11.096 16.5207 11.288 16.712C11.4793 16.904 11.7167 17 12 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z" fill="#FF6651"/>
              </g>
            </svg>
            <QuitST.InfoText>
              <b>정말 탈퇴하시겠습니까?</b><br/>
              가입된 계정 및 데이터가 모두 사라집니다.
            </QuitST.InfoText>
          </QuitST.InfoBox>

          <QuitST.ModalBtnSet>
            <QuitST.ModalBtn
              style={{ color: 'var(--color-system-error)' }}
              onClick={onQuitHandler}
            >
              탈퇴하기
            </QuitST.ModalBtn>
            <QuitST.ModalBtn
              style={{ color: 'var(--color-system-success)' }}
              onClick={() => {
                closeModal2();
              }}
            >
              돌아가기
            </QuitST.ModalBtn>
          </QuitST.ModalBtnSet>
          </>)
        }
      </QuitST.ModalWrap>
    </QuitST.Overlay>
  );
};