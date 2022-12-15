import React, { useEffect, useRef } from 'react';

import * as ModalST from './NearbyModalStyle';

import useOutSideClick from '../../hooks/useOutSideClick';

export default function NearbyModal({ closeModal, setSelect, select }) {
  //배경 클릭 시 모달창 닫기
  const modalRef = useRef(null);

  const handleClose = () => {
    closeModal();
  };

  const selectHandler = (e) => {
    setSelect(e.target.textContent);
    closeModal();
  };

  useOutSideClick(modalRef, handleClose);

  //외부 스크롤 막기
  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  return (
    <ModalST.Overlay>
      <ModalST.ModalWrap ref={modalRef}>
        <ModalST.TopBox onClick={selectHandler}>
          <ModalST.SelectText
            focused={select === '마감 임박 순' ? true : false}
          >
            마감 임박 순
          </ModalST.SelectText>
        </ModalST.TopBox>
        <ModalST.SelectBox onClick={selectHandler}>
          <ModalST.SelectText
            focused={select === '신규 등록 순' ? true : false}
          >
            신규 등록 순
          </ModalST.SelectText>
        </ModalST.SelectBox>
        <ModalST.SelectBox onClick={selectHandler}>
          <ModalST.SelectText
            focused={select === '참여자 많은 순' ? true : false}
          >
            참여자 많은 순
          </ModalST.SelectText>
        </ModalST.SelectBox>
        <ModalST.SelectBox onClick={selectHandler}>
          <ModalST.SelectText
            focused={select === '참여자 적은 순' ? true : false}
          >
            참여자 적은 순
          </ModalST.SelectText>
        </ModalST.SelectBox>
        <ModalST.BottomBox>
          <ModalST.SelectText style={{ color: `var(--color-blur-white)` }}>
            매너 사용자 우선 순
          </ModalST.SelectText>
        </ModalST.BottomBox>
      </ModalST.ModalWrap>
    </ModalST.Overlay>
  );
}
