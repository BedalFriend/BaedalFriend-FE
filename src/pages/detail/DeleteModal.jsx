import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as ModalST from './DeleteModalStyle';

export default function DeleteModal({
  setIsOpen,
  aniState,
  setAniState,
  closeModal,
  onDeleteHandler,
  isDeleteHandler,
  setIsDeleteHandler,
}) {
  //외부 스크롤 막기
  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <ModalST.Overlay aniState={aniState}>
        {isDeleteHandler ? (
          <ModalST.ModalWrap>
            <ModalST.ReTopBox>
              <div>
                <ModalST.ErrorSvg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g mask='url(#mask0_1282_2008)'>
                    <path
                      d='M12 13C12.2833 13 12.521 12.904 12.713 12.712C12.9043 12.5207 13 12.2833 13 12V7.975C13 7.69167 12.9043 7.45833 12.713 7.275C12.521 7.09167 12.2833 7 12 7C11.7167 7 11.4793 7.09567 11.288 7.287C11.096 7.479 11 7.71667 11 8V12.025C11 12.3083 11.096 12.5417 11.288 12.725C11.4793 12.9083 11.7167 13 12 13ZM12 17C12.2833 17 12.521 16.904 12.713 16.712C12.9043 16.5207 13 16.2833 13 16C13 15.7167 12.9043 15.479 12.713 15.287C12.521 15.0957 12.2833 15 12 15C11.7167 15 11.4793 15.0957 11.288 15.287C11.096 15.479 11 15.7167 11 16C11 16.2833 11.096 16.5207 11.288 16.712C11.4793 16.904 11.7167 17 12 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z'
                      fill='#FF6651'
                    />
                  </g>
                </ModalST.ErrorSvg>
                <ModalST.InfoText>게시글을 삭제할까요?</ModalST.InfoText>
                <ModalST.InfoText>
                  게시글을 삭제하면 채팅방이 사라져요.
                </ModalST.InfoText>
              </div>
            </ModalST.ReTopBox>

            <ModalST.BottomBox></ModalST.BottomBox>

            <ModalST.BottomBtnBox>
              <ModalST.DeleteBtnBox>
                <ModalST.DeleteBtn onClick={onDeleteHandler}>
                  삭제
                </ModalST.DeleteBtn>
              </ModalST.DeleteBtnBox>
              <ModalST.DeleteBtnBox>
                <ModalST.CancelBtn
                  onClick={() => {
                    setIsDeleteHandler(false);
                  }}
                >
                  취소
                </ModalST.CancelBtn>
              </ModalST.DeleteBtnBox>
            </ModalST.BottomBtnBox>
          </ModalST.ModalWrap>
        ) : (
          <ModalST.ModalWrap>
            <ModalST.TopBox>
              <ModalST.SelectText
                onClick={() => {
                  navigate(`/modify/${id}`);
                }}
              >
                게시글 수정하기
              </ModalST.SelectText>
            </ModalST.TopBox>
            <ModalST.SelectBox>
              <ModalST.SelectText
                onClick={() => {
                  setIsDeleteHandler(true);
                }}
              >
                게시글 삭제하기
              </ModalST.SelectText>
            </ModalST.SelectBox>

            <ModalST.BottomBox></ModalST.BottomBox>

            <ModalST.CloseSelectBox>
              <ModalST.SelectText
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                돌아가기
              </ModalST.SelectText>
            </ModalST.CloseSelectBox>
          </ModalST.ModalWrap>
        )}
      </ModalST.Overlay>
    </>
  );
}
