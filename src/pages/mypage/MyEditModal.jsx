import React, { useEffect, useRef } from 'react';
import * as ModalST from './MyEditModalStyle';
import useOutSideClick from '../../hooks/useOutSideClick';
import BasicPath from '../../imgs/BasicProfile.png'

export default function MyEditModal({closeModal, setProfilepost, profilePost, setPreviewImg, setChanged}) {

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

  //이미지 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setPreviewImg(reader.result);
        setChanged(true);
        resolve();
      };
    });
  };

  return (
    <ModalST.Overlay>
      <ModalST.ModalWrap ref={modalRef}>

        <ModalST.TopBox>
            <label htmlFor="file" style={{ cursor: 'pointer'}}>
            <ModalST.SelectText>기기에서 가져오기</ModalST.SelectText>  
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
                setProfilepost({
                  ...profilePost,
                  imgUrl: e.target.files[0]});
                closeModal(e);
              }}
              style={{ visibility: "hidden" }}/>
        </ModalST.TopBox>

        <ModalST.BottomBox
          onClick={(e) => {
            setPreviewImg(BasicPath);
            setProfilepost({
              ...profilePost,
              imgUrl: "basic"});
            setChanged(true);
            closeModal(e);}}
            >
            <ModalST.SelectText>기본 이미지로 변경</ModalST.SelectText>
        </ModalST.BottomBox>    

      </ModalST.ModalWrap>
    </ModalST.Overlay>
  );
};