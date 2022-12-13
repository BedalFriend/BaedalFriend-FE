import store from '../../redux/config/ConfigStore';
import axios from 'axios';
import { getCookieToken } from '../../shared/storage/Cookie';
import { basePath } from '../../shared/api/Request';
import { checkNickname } from '../../shared/api/Users';
import Layout from '../../components/layout/Layout'

import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as myEditST from './MyEditPageStyle';
import ProfilePic from '../../components/elements/profilePic/ProfilePic';
import MyEditModal from './MyEditModal';


export default function MyEditPage() {

  const navigate = useNavigate();

  //토큰
  const authorization = store.getState()?.token?.accessToken;
  const refreshToken = getCookieToken();

  //USER 정보
  const user = useSelector(state => state.user);
  const email = useSelector(state => state.user.email);
  const nickname = useSelector(state => state.user.nickname);
  const userId = useSelector((state) => state.user.id);
  const profileURL = useSelector((state) => state.user.profileURL);

  //프로필사진, 닉네임
  const [previewImg, setPreviewImg] = useState();
  const [editNick, setEditNick] = useState();
  const [profilePost, setProfilepost] = useState();
  const [changed, setChanged] = useState(false);

  //닉네임 중복검사
  const [inCheck, setInCheck] = useState(false);
  const [isNicknameFail, setIsNicknameFail] = useState(true);
  const [helpNicknameText, setHelpNicknameText] = useState('');

  //모달
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    setInCheck(true);
    const nicknameHandler = setTimeout(async() => {
      const response = await checkNickname(editNick);
      if (response.status) {
        setInCheck(false);
        setIsNicknameFail(false);
        setHelpNicknameText('사용 가능한 별명이에요!');
      } else {
        setInCheck(false);
        setIsNicknameFail(true);
        if (response.headers.message && (nickname === editNick)) {
          setHelpNicknameText('이전과 같은 닉네임이에요!');
        }
        else if(response.headers.message) {
          setHelpNicknameText('다른 사용자가 사용 중인 별명이에요.');
        }
        else setHelpNicknameText(response.headers.error.message);
      }
    }, 500);

    setProfilepost({
      ...profilePost,
      nickname: editNick})

    return () => {
      clearTimeout(nicknameHandler);
    };
  }, [editNick]);

  //수정사항 적용하기
  const onSubmitHandler = () => {
    const formData = new FormData();
    
    if(profilePost?.imgUrl === null || profilePost?.imgUrl === undefined) {
      formData.append('imgUrl', profileURL);
    } else if (profilePost?.imgUrl === "basic" && profilePost?.nickname) {
      formData.append('nickname',
      new Blob(
        [
          JSON.stringify({
            nickname: profilePost?.nickname,
            profileURL: "BasicProfile",
          }),
        ],
        { type: 'application/json'}
      )
      ); 
    } else if (profilePost?.imgUrl === "basic") {
      formData.append('nickname',
      new Blob(
        [
          JSON.stringify({
            profileURL: "BasicProfile",
          }),
        ],
        { type: 'application/json'}
      )
    );
    } 
    else {
      formData.append('imgUrl', profilePost?.imgUrl);
    }
    
    if(profilePost?.nickname === null || profilePost?.nickname === undefined) {
      formData.append('nickname',
        new Blob(
          [
            JSON.stringify({
              nickname: nickname,
            }),
          ],
          { type: 'application/json'}
        )
      );
    } else {
      formData.append('nickname',
        new Blob(
          [
            JSON.stringify({
              nickname: profilePost?.nickname,
            }),
          ],
          { type: 'application/json'}
        )
      );
    }

    // for (const keyValue of formData)
    // console.log(keyValue);

    axios
      .patch(`https://sparta-bds.shop/v1/mypages/edit/${userId}`, formData,
      { headers:
        { 'Authorization' : `${authorization}`,
          'Refresh_Token' : `${refreshToken}`,
          'Content-Type' : 'multipart/form-data'} })
      .then((res) => {
        if (res.data.success) {
          window.location.replace("/mypage")
        }
      });
  }

  return (
    <Layout>
      <myEditST.myEditBG>
        {/* 뒤로가기 */}
        <myEditST.backSVG>

        </myEditST.backSVG>

        {/* 프로필사진 변경 */}
        <myEditST.picText>프로필 사진</myEditST.picText>
        <myEditST.picWrap>
          {previewImg ?
            <myEditST.EditPic src={previewImg} alt="previewImg"/>
            :
            <ProfilePic size='100px' border='' user={user}/>
          }
          <myEditST.picButton onClick={openModal}>변경하기</myEditST.picButton>
        </myEditST.picWrap>
        {isOpen &&
            (<MyEditModal
              closeModal={closeModal}
              setProfilepost={setProfilepost}
              setPreviewImg={setPreviewImg}
              profilePost={profilePost}
              setChanged={setChanged}/>)}

        {/* 이메일 아이디 */}
        <myEditST.checkText>이메일 아이디</myEditST.checkText>
        <myEditST.emailBox>
          { email !== null && email !== undefined ?
            (email)
            :
            ("이메일이 등록되지 않았습니다.")
          }
        </myEditST.emailBox>
        <myEditST.emailCheck>
          { email !== null && email !== undefined ?
          (<>
            <svg width="14" height="14" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_616_793" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                <rect x="0.187866" y="0.200195" width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_616_793)">
                <path d="M10.7879 14.0002L8.61287 11.8252C8.42953 11.6419 8.20453 11.5502 7.93787 11.5502C7.6712 11.5502 7.43787 11.6502 7.23787 11.8502C7.05453 12.0335 6.96287 12.2669 6.96287 12.5502C6.96287 12.8335 7.05453 13.0669 7.23787 13.2502L10.0879 16.1002C10.2712 16.2835 10.5045 16.3752 10.7879 16.3752C11.0712 16.3752 11.3045 16.2835 11.4879 16.1002L17.1629 10.4252C17.3462 10.2419 17.4379 10.0169 17.4379 9.7502C17.4379 9.48353 17.3379 9.2502 17.1379 9.0502C16.9545 8.86686 16.7212 8.7752 16.4379 8.7752C16.1545 8.7752 15.9212 8.86686 15.7379 9.0502L10.7879 14.0002ZM12.1879 22.2002C10.8045 22.2002 9.50453 21.9375 8.28787 21.4122C7.0712 20.8875 6.01287 20.1752 5.11287 19.2752C4.21287 18.3752 3.50053 17.3169 2.97587 16.1002C2.45053 14.8835 2.18787 13.5835 2.18787 12.2002C2.18787 10.8169 2.45053 9.51686 2.97587 8.3002C3.50053 7.08353 4.21287 6.0252 5.11287 5.1252C6.01287 4.2252 7.0712 3.51253 8.28787 2.9872C9.50453 2.46253 10.8045 2.2002 12.1879 2.2002C13.5712 2.2002 14.8712 2.46253 16.0879 2.9872C17.3045 3.51253 18.3629 4.2252 19.2629 5.1252C20.1629 6.0252 20.8752 7.08353 21.3999 8.3002C21.9252 9.51686 22.1879 10.8169 22.1879 12.2002C22.1879 13.5835 21.9252 14.8835 21.3999 16.1002C20.8752 17.3169 20.1629 18.3752 19.2629 19.2752C18.3629 20.1752 17.3045 20.8875 16.0879 21.4122C14.8712 21.9375 13.5712 22.2002 12.1879 22.2002Z" fill="#51D486"/>
              </g>
            </svg>
            인증이 완료된 아이디에요.
          </>  
          )
          :
          (null)
          }
        </myEditST.emailCheck>

        {/* 닉네임 */}
        <myEditST.checkText>닉네임</myEditST.checkText>
        <myEditST.nickBox>
          <myEditST.nickText
            type="text"
            name="editNick"
            placeholder="6자 이하로 설정해주세요."
            maxLength='6'
            defaultValue={nickname}
            onChange={(e) => {
              setEditNick(e.target.value);
            }}
            />
          {/* <myEditST.nickEditBtn>변경하기</myEditST.nickEditBtn> */}
        </myEditST.nickBox>

        {/* 닉네임 중복검사 */}
        {editNick ? (
          <myEditST.HelpBox>
            {inCheck ? null : isNicknameFail ? (
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g mask='url(#mask0_616_847)'>
                  <path
                    d='M6.99999 7.58329C7.16527 7.58329 7.30391 7.52729 7.41591 7.41529C7.52752 7.30368 7.58332 7.16524 7.58332 6.99996V4.65204C7.58332 4.48676 7.52752 4.35065 7.41591 4.24371C7.30391 4.13676 7.16527 4.08329 6.99999 4.08329C6.83471 4.08329 6.69627 4.1391 6.58466 4.25071C6.47266 4.36271 6.41666 4.50135 6.41666 4.66663V7.01454C6.41666 7.17982 6.47266 7.31593 6.58466 7.42288C6.69627 7.52982 6.83471 7.58329 6.99999 7.58329ZM6.99999 9.91663C7.16527 9.91663 7.30391 9.86063 7.41591 9.74863C7.52752 9.63701 7.58332 9.49857 7.58332 9.33329C7.58332 9.16801 7.52752 9.02938 7.41591 8.91738C7.30391 8.80576 7.16527 8.74996 6.99999 8.74996C6.83471 8.74996 6.69627 8.80576 6.58466 8.91738C6.47266 9.02938 6.41666 9.16801 6.41666 9.33329C6.41666 9.49857 6.47266 9.63701 6.58466 9.74863C6.69627 9.86063 6.83471 9.91663 6.99999 9.91663ZM6.99999 12.8333C6.19305 12.8333 5.43471 12.6801 4.72499 12.3736C4.01527 12.0676 3.39791 11.652 2.87291 11.127C2.34791 10.602 1.93238 9.98468 1.62632 9.27496C1.31988 8.56524 1.16666 7.8069 1.16666 6.99996C1.16666 6.19301 1.31988 5.43468 1.62632 4.72496C1.93238 4.01524 2.34791 3.39788 2.87291 2.87288C3.39791 2.34788 4.01527 1.93215 4.72499 1.62571C5.43471 1.31965 6.19305 1.16663 6.99999 1.16663C7.80693 1.16663 8.56527 1.31965 9.27499 1.62571C9.98471 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8333 6.19301 12.8333 6.99996C12.8333 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98471 12.0676 9.27499 12.3736C8.56527 12.6801 7.80693 12.8333 6.99999 12.8333Z'
                    fill='var(--color-system-error)'
                  />
                </g>
              </svg>
            ) : (
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g mask='url(#mask0_616_794)'>
                  <path
                    d='M6.18333 8.04996L4.91458 6.78121C4.80764 6.67426 4.67639 6.62079 4.52083 6.62079C4.36528 6.62079 4.22916 6.67913 4.1125 6.79579C4.00555 6.90274 3.95208 7.03885 3.95208 7.20413C3.95208 7.3694 4.00555 7.50551 4.1125 7.61246L5.775 9.27496C5.88194 9.3819 6.01805 9.43538 6.18333 9.43538C6.34861 9.43538 6.48472 9.3819 6.59166 9.27496L9.90208 5.96454C10.009 5.8576 10.0625 5.72635 10.0625 5.57079C10.0625 5.41524 10.0042 5.27913 9.8875 5.16246C9.78055 5.05552 9.64444 5.00204 9.47916 5.00204C9.31389 5.00204 9.17778 5.05552 9.07083 5.16246L6.18333 8.04996ZM7 12.8333C6.19305 12.8333 5.43472 12.6801 4.725 12.3736C4.01528 12.0676 3.39791 11.652 2.87291 11.127C2.34791 10.602 1.93239 9.98468 1.62633 9.27496C1.31989 8.56524 1.16666 7.8069 1.16666 6.99996C1.16666 6.19301 1.31989 5.43468 1.62633 4.72496C1.93239 4.01524 2.34791 3.39788 2.87291 2.87288C3.39791 2.34788 4.01528 1.93215 4.725 1.62571C5.43472 1.31965 6.19305 1.16663 7 1.16663C7.80694 1.16663 8.56527 1.31965 9.275 1.62571C9.98472 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8333 6.19301 12.8333 6.99996C12.8333 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98472 12.0676 9.275 12.3736C8.56527 12.6801 7.80694 12.8333 7 12.8333Z'
                    fill='var(--color-system-success)'
                  />
                </g>
              </svg>
            )}

            {inCheck ? null : (
              <myEditST.HelpText isFail={isNicknameFail}>
                {helpNicknameText}
              </myEditST.HelpText>
            )}
          </myEditST.HelpBox>
        ) : null}

        {/* 버튼 */}
        <myEditST.buttonWrap>
          <myEditST.cancelBtn onClick={() => {navigate(-1);}}>
            취소하기
          </myEditST.cancelBtn>
          <myEditST.submitBtn
            onClick={onSubmitHandler}
            disabled={
              (changed===false) &&
              (isNicknameFail===true)
            }>
            적용하기
          </myEditST.submitBtn>
        </myEditST.buttonWrap>
      </myEditST.myEditBG> 
    </Layout>  
    );
};