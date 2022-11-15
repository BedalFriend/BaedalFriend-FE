import React, {useEffect, useRef} from 'react';
import * as ModalST from './SearchModalStyle';
import useOutSideClick from '../../hooks/useOutSideClick';

export default function SearchModal({onClose}) {

    //배경 클릭 시 모달창 닫기
    const modalRef = useRef(null)
    const handleClose = () => {
        onClose?.();
    };

    useOutSideClick(modalRef, handleClose);

    //외부 스크롤 막기
    useEffect(() => {
        const $body = document.querySelector("body");
        $body.style.overflow = "hidden";
        return () => ($body.style.overflow = "auto");
    }, []);

    return (
        <>
        <ModalST.Overlay/>

        <ModalST.ModalWrap ref={modalRef}>
            <ModalST.SelectBox>
                <ModalST.SelectText>마감 임박 순</ModalST.SelectText>
            </ModalST.SelectBox>
            <ModalST.SelectBox>
                <ModalST.SelectText>신규 등록 순</ModalST.SelectText>
            </ModalST.SelectBox>
            <ModalST.SelectBox>
                <ModalST.SelectText>참여자 많은 순</ModalST.SelectText>
            </ModalST.SelectBox>
            <ModalST.SelectBox>
                <ModalST.SelectText>참여자 적은 순</ModalST.SelectText>
            </ModalST.SelectBox>
            <ModalST.SelectBox>
                <ModalST.SelectText>매너 사용자 우선 순</ModalST.SelectText>
            </ModalST.SelectBox>
        </ModalST.ModalWrap>
        </>
    );
};