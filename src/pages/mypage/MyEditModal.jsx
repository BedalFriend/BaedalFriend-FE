import React, {useEffect, useRef} from 'react';
import * as ModalST from './MyEditModalStyle';
import useOutSideClick from '../../hooks/useOutSideClick';

export default function SearchModal({aniState, setAniState, closeModal}) {

  //배경 클릭 시 모달창 닫기
  const modalRef = useRef(null)

  const handleClose = () => {
    setAniState(false);
    setTimeout(() => {
        closeModal();
    }, 500);
  };

  useOutSideClick(modalRef, handleClose);

  //외부 스크롤 막기
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  return (
    <ModalST.Overlay aniState={aniState}>
      <ModalST.ModalWrap ref={modalRef}>

        <ModalST.TopBox>
            <ModalST.SelectText>기기에서 가져오기</ModalST.SelectText>
        </ModalST.TopBox>

        <ModalST.BottomBox>
            <ModalST.SelectText>기본 이미지로 변경</ModalST.SelectText>
        </ModalST.BottomBox>    

      </ModalST.ModalWrap>
    </ModalST.Overlay>
  );
};