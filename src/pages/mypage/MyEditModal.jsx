import React, { useEffect, useRef } from 'react';
import * as ModalST from './MyEditModalStyle';
import useOutSideClick from '../../hooks/useOutSideClick';
import BasicPath from '../../imgs/BasicProfile.png'
import imageCompression from 'browser-image-compression';

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

  //이미지 리사이징
  const actionImgCompress = async (fileSrc) => {
    const options = {
      maxWidthOrHeight: 200,
    }
    try {
      const compressedFile = await imageCompression(fileSrc, options);
      return compressedFile;
    } catch (error) {
      console.log(error);
    }
  }

  //이미지 디코딩
  const onBringImg = async (e) => {
    const compressed = await actionImgCompress(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(compressed);
    reader.onloadend = () => {
      const base64data = reader.result;
      const byteString = window.atob(base64data.split(",")[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i=0; i<byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ia], {
        type: 'image/*'
      });
      const file = new File([blob], "image.*");
      setProfilepost({
        ...profilePost,
        imgUrl: file});
    }
  }

  return (
    <ModalST.Overlay>
      <ModalST.ModalWrap ref={modalRef}>

        <ModalST.TopBox>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
              onBringImg(e);
              closeModal(e);
            }}
            style={{ visibility: "hidden" }}/>
            <label htmlFor="file" style={{ cursor: 'pointer'}}>
            <ModalST.TopText>기기에서 가져오기</ModalST.TopText>  
            </label>
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
            <ModalST.BottomText>기본 이미지로 변경</ModalST.BottomText>
        </ModalST.BottomBox>    

      </ModalST.ModalWrap>
    </ModalST.Overlay>
  );
};