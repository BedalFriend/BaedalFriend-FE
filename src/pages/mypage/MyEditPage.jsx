import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as myEditST from './MyEditPageStyle';
import ProfilePic from '../../components/elements/profilePic/ProfilePic';
import MyEditModal from './MyEditModal';


export default function MyEditPage() {

  const navigate = useNavigate();

  const user = useSelector(state => state.user);
  const email = useSelector(state => state.user.email);
  const nickname = useSelector(state => state.user.nickname);

  //모달
  const [isOpen, setIsOpen] = useState(false);
  const [aniState, setAniState] = useState(false);
  const openModal = () => {
    setAniState(true);
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <myEditST.myEditBG>

      {/* 뒤로가기 */}
      <myEditST.backSVG>
        <svg
          width='44' height='48' viewBox='0 0 44 48' fill='none' xmlns='http://www.w3.org/2000/svg'
          style={{ position: 'absolute', bottom: '0px'}} onClick={() => {navigate(-1);}}>
          <g mask='url(#mask0_243_490)'>
            <path
              d='M22.424 33.6042L12.3295 24.7388C12.2097 24.6332 12.125 24.5189 12.0755 24.3958C12.0252 24.2726 12 24.1407 12 24C12 23.8593 12.0252 23.7274 12.0755 23.6042C12.125 23.4811 12.2097 23.3668 12.3295 23.2612L22.424 14.3694C22.7035 14.1231 23.053 14 23.4724 14C23.8917 14 24.2512 14.1319 24.5507 14.3958C24.8502 14.6596 25 14.9675 25 15.3193C25 15.6711 24.8502 15.9789 24.5507 16.2427L15.7442 24L24.5507 31.7573C24.8303 32.0035 24.97 32.3068 24.97 32.667C24.97 33.028 24.8203 33.3404 24.5207 33.6042C24.2212 33.8681 23.8717 34 23.4724 34C23.073 34 22.7235 33.8681 22.424 33.6042Z'
              fill='var(--color-grey)'
            />
          </g>
        </svg>
      </myEditST.backSVG>

      {/* 프로필사진 변경 */}
      <myEditST.picText>프로필 사진</myEditST.picText>
      <myEditST.picWrap>
        <ProfilePic size='100px' border='' user={user}/>
        <myEditST.picButton onClick={openModal}>변경하기</myEditST.picButton>
        {isOpen &&
          (<MyEditModal
            aniState={aniState}
            setAniState={setAniState}
            closeModal={closeModal}/>)}
      </myEditST.picWrap>

      {/* 이메일 아이디 */}
      <myEditST.checkText>이메일 아이디</myEditST.checkText>
      <myEditST.emailBox>{email}</myEditST.emailBox>
      <myEditST.emailCheck>
        <svg width="14" height="14" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_616_793" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
            <rect x="0.187866" y="0.200195" width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_616_793)">
            <path d="M10.7879 14.0002L8.61287 11.8252C8.42953 11.6419 8.20453 11.5502 7.93787 11.5502C7.6712 11.5502 7.43787 11.6502 7.23787 11.8502C7.05453 12.0335 6.96287 12.2669 6.96287 12.5502C6.96287 12.8335 7.05453 13.0669 7.23787 13.2502L10.0879 16.1002C10.2712 16.2835 10.5045 16.3752 10.7879 16.3752C11.0712 16.3752 11.3045 16.2835 11.4879 16.1002L17.1629 10.4252C17.3462 10.2419 17.4379 10.0169 17.4379 9.7502C17.4379 9.48353 17.3379 9.2502 17.1379 9.0502C16.9545 8.86686 16.7212 8.7752 16.4379 8.7752C16.1545 8.7752 15.9212 8.86686 15.7379 9.0502L10.7879 14.0002ZM12.1879 22.2002C10.8045 22.2002 9.50453 21.9375 8.28787 21.4122C7.0712 20.8875 6.01287 20.1752 5.11287 19.2752C4.21287 18.3752 3.50053 17.3169 2.97587 16.1002C2.45053 14.8835 2.18787 13.5835 2.18787 12.2002C2.18787 10.8169 2.45053 9.51686 2.97587 8.3002C3.50053 7.08353 4.21287 6.0252 5.11287 5.1252C6.01287 4.2252 7.0712 3.51253 8.28787 2.9872C9.50453 2.46253 10.8045 2.2002 12.1879 2.2002C13.5712 2.2002 14.8712 2.46253 16.0879 2.9872C17.3045 3.51253 18.3629 4.2252 19.2629 5.1252C20.1629 6.0252 20.8752 7.08353 21.3999 8.3002C21.9252 9.51686 22.1879 10.8169 22.1879 12.2002C22.1879 13.5835 21.9252 14.8835 21.3999 16.1002C20.8752 17.3169 20.1629 18.3752 19.2629 19.2752C18.3629 20.1752 17.3045 20.8875 16.0879 21.4122C14.8712 21.9375 13.5712 22.2002 12.1879 22.2002Z" fill="#51D486"/>
          </g>
        </svg>
        인증이 완료된 아이디에요.
      </myEditST.emailCheck>

      {/* 닉네임 */}
      <myEditST.checkText>닉네임</myEditST.checkText>
      <myEditST.emailBox>
        {nickname}
        <myEditST.nickEditBtn>변경하기</myEditST.nickEditBtn>
      </myEditST.emailBox>
      {/* <myEditST.emailCheck>
        <svg width="14" height="14" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_616_793" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
            <rect x="0.187866" y="0.200195" width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_616_793)">
            <path d="M10.7879 14.0002L8.61287 11.8252C8.42953 11.6419 8.20453 11.5502 7.93787 11.5502C7.6712 11.5502 7.43787 11.6502 7.23787 11.8502C7.05453 12.0335 6.96287 12.2669 6.96287 12.5502C6.96287 12.8335 7.05453 13.0669 7.23787 13.2502L10.0879 16.1002C10.2712 16.2835 10.5045 16.3752 10.7879 16.3752C11.0712 16.3752 11.3045 16.2835 11.4879 16.1002L17.1629 10.4252C17.3462 10.2419 17.4379 10.0169 17.4379 9.7502C17.4379 9.48353 17.3379 9.2502 17.1379 9.0502C16.9545 8.86686 16.7212 8.7752 16.4379 8.7752C16.1545 8.7752 15.9212 8.86686 15.7379 9.0502L10.7879 14.0002ZM12.1879 22.2002C10.8045 22.2002 9.50453 21.9375 8.28787 21.4122C7.0712 20.8875 6.01287 20.1752 5.11287 19.2752C4.21287 18.3752 3.50053 17.3169 2.97587 16.1002C2.45053 14.8835 2.18787 13.5835 2.18787 12.2002C2.18787 10.8169 2.45053 9.51686 2.97587 8.3002C3.50053 7.08353 4.21287 6.0252 5.11287 5.1252C6.01287 4.2252 7.0712 3.51253 8.28787 2.9872C9.50453 2.46253 10.8045 2.2002 12.1879 2.2002C13.5712 2.2002 14.8712 2.46253 16.0879 2.9872C17.3045 3.51253 18.3629 4.2252 19.2629 5.1252C20.1629 6.0252 20.8752 7.08353 21.3999 8.3002C21.9252 9.51686 22.1879 10.8169 22.1879 12.2002C22.1879 13.5835 21.9252 14.8835 21.3999 16.1002C20.8752 17.3169 20.1629 18.3752 19.2629 19.2752C18.3629 20.1752 17.3045 20.8875 16.0879 21.4122C14.8712 21.9375 13.5712 22.2002 12.1879 22.2002Z" fill="#51D486"/>
          </g>
        </svg>
        인증이 완료된 아이디에요.
      </myEditST.emailCheck> */}

      {/* 버튼 */}
      <myEditST.buttonWrap>
        <myEditST.cancelBtn onClick={() => {navigate(-1);}}>
          취소하기
        </myEditST.cancelBtn>
        <myEditST.submitBtn>
          적용하기
        </myEditST.submitBtn>
      </myEditST.buttonWrap>

    </myEditST.myEditBG>
  );
};