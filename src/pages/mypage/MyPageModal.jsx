import {React, useEffect, useRef} from 'react';
import * as ModalST from './MyPageModalStyle';
import useOutSideClick from '../../hooks/useOutSideClick';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../shared/api/Users';
import { removeCookieToken } from '../../shared/storage/Cookie';
import { DELETE_USER } from '../../redux/modules/UserSlice';
import { DELETE_TOKEN } from '../../redux/modules/AuthSlice';

export default function MyPageModal({closeModal}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //배경 클릭 시 모달창 닫기
  const modalRef = useRef(null)

  const handleClose = () => {
    closeModal();
  };

  useOutSideClick(modalRef, handleClose);

  //외부 스크롤 막기
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  //로그아웃
  const onLogoutHandler = async () => {
    await logoutUser();
    closeModal();
    navigate('/');
    removeCookieToken();
    dispatch(DELETE_TOKEN());
    dispatch(DELETE_USER());
    
  };

  return (
    <ModalST.Overlay>
      <ModalST.ModalWrap ref={modalRef}>

        <ModalST.TopBox onClick={() => {navigate('/myEdit')}}>
            <ModalST.SelectText>프로필 수정하기</ModalST.SelectText>
        </ModalST.TopBox>

        <ModalST.BottomBox onClick={() => onLogoutHandler()}>
            <ModalST.SelectText>로그아웃</ModalST.SelectText>
        </ModalST.BottomBox>

        <ModalST.SelectBox onClick={() => handleClose()}>
            <ModalST.BackText>돌아가기</ModalST.BackText>
        </ModalST.SelectBox>        

      </ModalST.ModalWrap>
    </ModalST.Overlay>
  );
};