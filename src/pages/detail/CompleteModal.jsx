import React, { useEffect, useRef } from 'react';
import useOutSideClick from '../../hooks/useOutSideClick';

import * as ModalST from './DeleteModalStyle';

export default function CompleteModal({
  isCompleteHandler,
  setIsCompleteHandler,
  setIsCompleteOpen,
  onCompleteHandler,
}) {
  //배경 클릭 시 모달창 닫기
  const modalRef = useRef(null);

  const handleClose = () => {
    setIsCompleteOpen(false);
  };

  useOutSideClick(modalRef, handleClose);

  //외부 스크롤 막기
  useEffect(() => {
    const $body = document.querySelector('body');
    $body.style.overflow = 'hidden';
    return () => ($body.style.overflow = 'auto');
  }, []);

  return (
    <>
      {isCompleteHandler ? (
        <ModalST.Overlay>
          <ModalST.ModalWrap ref={modalRef}>
            <ModalST.ReTopBox>
              <ModalST.ErrorSvg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g mask='url(#mask0_1270_2714)'>
                  <path
                    d='M15.5 11C15.9333 11 16.2917 10.8583 16.575 10.575C16.8583 10.2917 17 9.93333 17 9.5C17 9.06667 16.8583 8.70833 16.575 8.425C16.2917 8.14167 15.9333 8 15.5 8C15.0667 8 14.7083 8.14167 14.425 8.425C14.1417 8.70833 14 9.06667 14 9.5C14 9.93333 14.1417 10.2917 14.425 10.575C14.7083 10.8583 15.0667 11 15.5 11ZM8.5 11C8.93333 11 9.29167 10.8583 9.575 10.575C9.85833 10.2917 10 9.93333 10 9.5C10 9.06667 9.85833 8.70833 9.575 8.425C9.29167 8.14167 8.93333 8 8.5 8C8.06667 8 7.70833 8.14167 7.425 8.425C7.14167 8.70833 7 9.06667 7 9.5C7 9.93333 7.14167 10.2917 7.425 10.575C7.70833 10.8583 8.06667 11 8.5 11ZM12 17.5C12.95 17.5 13.8167 17.2877 14.6 16.863C15.3833 16.4377 15.9917 15.9 16.425 15.25C16.625 14.95 16.6543 14.6667 16.513 14.4C16.371 14.1333 16.15 14 15.85 14C15.7333 14 15.6167 14.0333 15.5 14.1C15.3833 14.1667 15.2917 14.25 15.225 14.35C14.8583 14.85 14.4 15.25 13.85 15.55C13.3 15.85 12.6833 16 12 16C11.3167 16 10.7 15.85 10.15 15.55C9.6 15.25 9.14167 14.85 8.775 14.35C8.70833 14.25 8.61267 14.1667 8.488 14.1C8.36267 14.0333 8.24167 14 8.125 14C7.84167 14 7.62933 14.129 7.488 14.387C7.346 14.6457 7.36667 14.9167 7.55 15.2C8 15.8833 8.61667 16.4377 9.4 16.863C10.1833 17.2877 11.05 17.5 12 17.5ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z'
                    fill='#51D486'
                  />
                </g>
              </ModalST.ErrorSvg>
              <ModalST.InfoBoldText>공구를 완료했어요!</ModalST.InfoBoldText>
              <ModalST.InfoText>
                오늘 만난 베프들에게 리뷰를 보내주세요.
              </ModalST.InfoText>
            </ModalST.ReTopBox>

            <ModalST.BottomBtnBox>
              <ModalST.DeleteBtnBox>
                <ModalST.DeleteBtn
                  onClick={() => {
                    setIsCompleteOpen(false);
                    setIsCompleteHandler(false);
                  }}
                >
                  나중에 남기기
                </ModalST.DeleteBtn>
              </ModalST.DeleteBtnBox>
              <ModalST.DeleteBtnBox>
                <ModalST.CancelBtn>리뷰 남기기</ModalST.CancelBtn>
              </ModalST.DeleteBtnBox>
            </ModalST.BottomBtnBox>
          </ModalST.ModalWrap>
        </ModalST.Overlay>
      ) : (
        <ModalST.Overlay>
          <ModalST.ModalWrap ref={modalRef}>
            <ModalST.ReTopBox>
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
              <ModalST.InfoBoldText>
                공동 구매를 완료할까요?
              </ModalST.InfoBoldText>
              <ModalST.InfoText>
                공구를 종료하면 채팅방이 사라져요.
              </ModalST.InfoText>
            </ModalST.ReTopBox>

            <ModalST.BottomBtnBox>
              <ModalST.DeleteBtnBox>
                <ModalST.DeleteBtn onClick={onCompleteHandler}>
                  완료
                </ModalST.DeleteBtn>
              </ModalST.DeleteBtnBox>
              <ModalST.DeleteBtnBox>
                <ModalST.CancelBtn
                  onClick={() => {
                    setIsCompleteOpen(false);
                  }}
                >
                  돌아가기
                </ModalST.CancelBtn>
              </ModalST.DeleteBtnBox>
            </ModalST.BottomBtnBox>
          </ModalST.ModalWrap>
        </ModalST.Overlay>
      )}
    </>
  );
}
