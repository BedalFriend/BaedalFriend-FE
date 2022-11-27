import { React, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TabContext } from '../../context/TabContext';

import Layout from '../../components/layout/Layout';
import * as myST from './MyPageStyle'
import ProfilePic from '../../components/elements/profilePic/ProfilePic'
import MyPageModal from './MyPageModal'

export default function MyPage() {

  const { setTab } = useContext(TabContext);

  //tab
  useEffect(() => {
    setTab('Mypage');
    // eslint-disable-next-line
  }, []);

  //정렬 모달창
  const [isOpen, setIsOpen] = useState(false);
  const [aniState, setAniState] = useState(false);
  const openModal = () => {
    setAniState(true);
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  const user = useSelector(state => state.user);
  const nickname = useSelector(state => state.user.nickname);
  const email = useSelector(state => state.user.email);

  return (
    <Layout>
      <myST.SearchBg>
        {/* 프로필 */}
        <myST.MainBox>

          <myST.Profile>
            <ProfilePic size='56px' border='1px solid var(--color-orange)' user={user}/>
            <myST.VerticalBox>
              <myST.NickText>{nickname}</myST.NickText>
              <myST.EmailText>{email}</myST.EmailText>
            </myST.VerticalBox>
          </myST.Profile>

          <myST.ContentBox>
            {/* 받은 리뷰 */}
            <myST.Content>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="#FFEBE3"/>
                  <mask id="mask0_1093_2294" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                    <rect width="40" height="40" fill="#D9D9D9"/>
                  </mask>
                <g mask="url(#mask0_1093_2294)">
                  <path d="M12.1053 30C11.5263 30 11.0309 29.8043 10.6189 29.413C10.2063 29.021 10 28.55 10 28V12C10 11.45 10.2063 10.979 10.6189 10.587C11.0309 10.1957 11.5263 10 12.1053 10H19.6579C19.9386 10 20.2063 10.05 20.4611 10.15C20.7151 10.25 20.9386 10.3917 21.1316 10.575L26.2368 15.425C26.4298 15.6083 26.5789 15.8207 26.6842 16.062C26.7895 16.304 26.8421 16.5583 26.8421 16.825V19.1L18.4211 27.075V30H12.1053ZM21.0526 30C20.9123 30 20.7895 29.95 20.6842 29.85C20.5789 29.75 20.5263 29.6333 20.5263 29.5V28.3C20.5263 28.1667 20.5572 28.0333 20.6189 27.9C20.68 27.7667 20.7544 27.6583 20.8421 27.575L25.9474 22.7L28.2105 24.8L23.0789 29.7C22.9912 29.8 22.8772 29.875 22.7368 29.925C22.5965 29.975 22.4561 30 22.3158 30H21.0526ZM28.9737 24.1L26.7368 21.975L27.4737 21.275C27.6842 21.075 27.9386 20.975 28.2368 20.975C28.5351 20.975 28.7807 21.075 28.9737 21.275L29.7105 22C29.9035 22.2 30 22.4373 30 22.712C30 22.9873 29.9035 23.2167 29.7105 23.4L28.9737 24.1ZM20.5263 17H24.7368L19.4737 12V16C19.4737 16.2833 19.5747 16.5207 19.7768 16.712C19.9782 16.904 20.2281 17 20.5263 17Z" fill="#FF5B15"/>
                </g>
              </svg>
              <myST.VerticalBox>
                <myST.ContentText>받은 리뷰</myST.ContentText>
                <myST.CountText>4개</myST.CountText>
              </myST.VerticalBox>
            </myST.Content>
            {/* 배프와 만남 */}
            <myST.Content>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="#FFEBE3"/>
                  <mask id="mask0_1093_2294" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                    <rect width="40" height="40" fill="#D9D9D9"/>
                  </mask>
                <g mask="url(#mask0_1093_2294)">
                  <path d="M12.1053 30C11.5263 30 11.0309 29.8043 10.6189 29.413C10.2063 29.021 10 28.55 10 28V12C10 11.45 10.2063 10.979 10.6189 10.587C11.0309 10.1957 11.5263 10 12.1053 10H19.6579C19.9386 10 20.2063 10.05 20.4611 10.15C20.7151 10.25 20.9386 10.3917 21.1316 10.575L26.2368 15.425C26.4298 15.6083 26.5789 15.8207 26.6842 16.062C26.7895 16.304 26.8421 16.5583 26.8421 16.825V19.1L18.4211 27.075V30H12.1053ZM21.0526 30C20.9123 30 20.7895 29.95 20.6842 29.85C20.5789 29.75 20.5263 29.6333 20.5263 29.5V28.3C20.5263 28.1667 20.5572 28.0333 20.6189 27.9C20.68 27.7667 20.7544 27.6583 20.8421 27.575L25.9474 22.7L28.2105 24.8L23.0789 29.7C22.9912 29.8 22.8772 29.875 22.7368 29.925C22.5965 29.975 22.4561 30 22.3158 30H21.0526ZM28.9737 24.1L26.7368 21.975L27.4737 21.275C27.6842 21.075 27.9386 20.975 28.2368 20.975C28.5351 20.975 28.7807 21.075 28.9737 21.275L29.7105 22C29.9035 22.2 30 22.4373 30 22.712C30 22.9873 29.9035 23.2167 29.7105 23.4L28.9737 24.1ZM20.5263 17H24.7368L19.4737 12V16C19.4737 16.2833 19.5747 16.5207 19.7768 16.712C19.9782 16.904 20.2281 17 20.5263 17Z" fill="#FF5B15"/>
                </g>
              </svg>
              <myST.VerticalBox>
                <myST.ContentText>배프와 만남</myST.ContentText>
                <myST.CountText>6번</myST.CountText>
              </myST.VerticalBox>
            </myST.Content>
          </myST.ContentBox>

          <myST.MenuDot onClick={openModal}>
            <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="22" r="2" transform="rotate(-90 6 22)" fill="#FF5B15"/>
              <circle cx="14" cy="22" r="2" transform="rotate(-90 14 22)" fill="#FF5B15"/>
              <circle cx="22" cy="22" r="2" transform="rotate(-90 22 22)" fill="#FF5B15"/>
            </svg>
          </myST.MenuDot>
          {isOpen &&
          (<MyPageModal
            aniState={aniState}
            setAniState={setAniState}
            closeModal={closeModal}/>)}

        </myST.MainBox>

        {/* 메뉴 */}
        <myST.MenuBox>
          <myST.MenuOne>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#FFEAB5"/>
                <mask id="mask0_1249_1560" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
              <g mask="url(#mask0_1249_1560)">
                <path d="M4.70977 20.3472C4.38373 20.4617 4.09846 20.3901 3.85393 20.1324C3.60941 19.8748 3.54149 19.5742 3.65016 19.2307L6.27879 11.4798C6.48256 10.8786 6.87651 10.5101 7.46065 10.3744C8.04479 10.2382 8.54742 10.3919 8.96854 10.8356L12.6771 14.7433C13.0983 15.187 13.2442 15.7166 13.1148 16.3321C12.9861 16.9476 12.6364 17.3627 12.0658 17.5774L4.70977 20.3472ZM12.8809 12.3815C12.7587 12.2527 12.6975 12.1024 12.6975 11.9306C12.6975 11.7589 12.7587 11.6086 12.8809 11.4798L17.0174 7.1212C17.4521 6.66316 17.9752 6.43414 18.5865 6.43414C19.1978 6.43414 19.7208 6.66316 20.1555 7.1212L20.237 7.20708C20.3457 7.32159 20.4 7.46473 20.4 7.6365C20.4 7.80826 20.3389 7.95856 20.2166 8.08738C20.0944 8.21621 19.9517 8.28062 19.7887 8.28062C19.6257 8.28062 19.483 8.21621 19.3608 8.08738L19.2997 8.02297C19.1095 7.82258 18.8717 7.72238 18.5865 7.72238C18.3012 7.72238 18.0634 7.82258 17.8733 8.02297L13.7164 12.403C13.6077 12.5175 13.4718 12.5748 13.3088 12.5748C13.1458 12.5748 13.0032 12.5103 12.8809 12.3815ZM9.62061 8.94621C9.49834 8.81739 9.43721 8.66709 9.43721 8.49533C9.43721 8.32356 9.49834 8.17327 9.62061 8.04444L9.68174 7.98003C9.87192 7.77964 9.96701 7.5363 9.96701 7.25003C9.96701 6.96375 9.87192 6.72041 9.68174 6.52002L9.55948 6.3912C9.4508 6.27669 9.39646 6.13355 9.39646 5.96178C9.39646 5.79002 9.45759 5.63972 9.57985 5.5109C9.70212 5.38207 9.84475 5.31766 10.0078 5.31766C10.1708 5.31766 10.3134 5.38207 10.4357 5.5109L10.5376 5.61825C10.9723 6.07629 11.1896 6.62022 11.1896 7.25003C11.1896 7.87983 10.9723 8.42376 10.5376 8.8818L10.4561 8.96768C10.3474 9.08219 10.2115 9.13945 10.0485 9.13945C9.88551 9.13945 9.74287 9.07504 9.62061 8.94621ZM11.2508 10.6639C11.1285 10.535 11.0674 10.3847 11.0674 10.213C11.0674 10.0412 11.1285 9.89092 11.2508 9.7621L13.7571 7.1212C13.9473 6.92081 14.0424 6.67032 14.0424 6.36973C14.0424 6.06914 13.9473 5.81865 13.7571 5.61825L12.8605 4.67354C12.7519 4.55903 12.6975 4.41589 12.6975 4.24413C12.6975 4.07236 12.7587 3.92207 12.8809 3.79324C13.0032 3.66442 13.1458 3.60001 13.3088 3.60001C13.4718 3.60001 13.6145 3.66442 13.7367 3.79324L14.613 4.71648C15.0477 5.17452 15.265 5.72561 15.265 6.36973C15.265 7.01385 15.0477 7.56493 14.613 8.02297L12.0862 10.6853C11.9775 10.7998 11.8417 10.8571 11.6787 10.8571C11.5157 10.8571 11.373 10.7927 11.2508 10.6639ZM14.5111 14.0992C14.3888 13.9704 14.3277 13.8201 14.3277 13.6483C14.3277 13.4765 14.3888 13.3262 14.5111 13.1974L15.3873 12.2742C15.822 11.8161 16.345 11.5871 16.9563 11.5871C17.5676 11.5871 18.0906 11.8161 18.5253 12.2742L19.4219 13.2189C19.5306 13.3334 19.5849 13.4765 19.5849 13.6483C19.5849 13.8201 19.5238 13.9704 19.4015 14.0992C19.2793 14.228 19.1366 14.2924 18.9736 14.2924C18.8106 14.2924 18.668 14.228 18.5457 14.0992L17.6695 13.1759C17.4793 12.9755 17.2416 12.8753 16.9563 12.8753C16.671 12.8753 16.4333 12.9755 16.2431 13.1759L15.3465 14.1207C15.2378 14.2352 15.102 14.2924 14.939 14.2924C14.776 14.2924 14.6333 14.228 14.5111 14.0992Z" fill="#FFBA09"/>
              </g>
            </svg>
            <myST.MenuText>작성한 게시글</myST.MenuText>
          </myST.MenuOne>
          <myST.MenuTwo>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#FFEAB5"/>
                <mask id="mask0_1249_1560" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
              <g mask="url(#mask0_1249_1560)">
                <path d="M4.70977 20.3472C4.38373 20.4617 4.09846 20.3901 3.85393 20.1324C3.60941 19.8748 3.54149 19.5742 3.65016 19.2307L6.27879 11.4798C6.48256 10.8786 6.87651 10.5101 7.46065 10.3744C8.04479 10.2382 8.54742 10.3919 8.96854 10.8356L12.6771 14.7433C13.0983 15.187 13.2442 15.7166 13.1148 16.3321C12.9861 16.9476 12.6364 17.3627 12.0658 17.5774L4.70977 20.3472ZM12.8809 12.3815C12.7587 12.2527 12.6975 12.1024 12.6975 11.9306C12.6975 11.7589 12.7587 11.6086 12.8809 11.4798L17.0174 7.1212C17.4521 6.66316 17.9752 6.43414 18.5865 6.43414C19.1978 6.43414 19.7208 6.66316 20.1555 7.1212L20.237 7.20708C20.3457 7.32159 20.4 7.46473 20.4 7.6365C20.4 7.80826 20.3389 7.95856 20.2166 8.08738C20.0944 8.21621 19.9517 8.28062 19.7887 8.28062C19.6257 8.28062 19.483 8.21621 19.3608 8.08738L19.2997 8.02297C19.1095 7.82258 18.8717 7.72238 18.5865 7.72238C18.3012 7.72238 18.0634 7.82258 17.8733 8.02297L13.7164 12.403C13.6077 12.5175 13.4718 12.5748 13.3088 12.5748C13.1458 12.5748 13.0032 12.5103 12.8809 12.3815ZM9.62061 8.94621C9.49834 8.81739 9.43721 8.66709 9.43721 8.49533C9.43721 8.32356 9.49834 8.17327 9.62061 8.04444L9.68174 7.98003C9.87192 7.77964 9.96701 7.5363 9.96701 7.25003C9.96701 6.96375 9.87192 6.72041 9.68174 6.52002L9.55948 6.3912C9.4508 6.27669 9.39646 6.13355 9.39646 5.96178C9.39646 5.79002 9.45759 5.63972 9.57985 5.5109C9.70212 5.38207 9.84475 5.31766 10.0078 5.31766C10.1708 5.31766 10.3134 5.38207 10.4357 5.5109L10.5376 5.61825C10.9723 6.07629 11.1896 6.62022 11.1896 7.25003C11.1896 7.87983 10.9723 8.42376 10.5376 8.8818L10.4561 8.96768C10.3474 9.08219 10.2115 9.13945 10.0485 9.13945C9.88551 9.13945 9.74287 9.07504 9.62061 8.94621ZM11.2508 10.6639C11.1285 10.535 11.0674 10.3847 11.0674 10.213C11.0674 10.0412 11.1285 9.89092 11.2508 9.7621L13.7571 7.1212C13.9473 6.92081 14.0424 6.67032 14.0424 6.36973C14.0424 6.06914 13.9473 5.81865 13.7571 5.61825L12.8605 4.67354C12.7519 4.55903 12.6975 4.41589 12.6975 4.24413C12.6975 4.07236 12.7587 3.92207 12.8809 3.79324C13.0032 3.66442 13.1458 3.60001 13.3088 3.60001C13.4718 3.60001 13.6145 3.66442 13.7367 3.79324L14.613 4.71648C15.0477 5.17452 15.265 5.72561 15.265 6.36973C15.265 7.01385 15.0477 7.56493 14.613 8.02297L12.0862 10.6853C11.9775 10.7998 11.8417 10.8571 11.6787 10.8571C11.5157 10.8571 11.373 10.7927 11.2508 10.6639ZM14.5111 14.0992C14.3888 13.9704 14.3277 13.8201 14.3277 13.6483C14.3277 13.4765 14.3888 13.3262 14.5111 13.1974L15.3873 12.2742C15.822 11.8161 16.345 11.5871 16.9563 11.5871C17.5676 11.5871 18.0906 11.8161 18.5253 12.2742L19.4219 13.2189C19.5306 13.3334 19.5849 13.4765 19.5849 13.6483C19.5849 13.8201 19.5238 13.9704 19.4015 14.0992C19.2793 14.228 19.1366 14.2924 18.9736 14.2924C18.8106 14.2924 18.668 14.228 18.5457 14.0992L17.6695 13.1759C17.4793 12.9755 17.2416 12.8753 16.9563 12.8753C16.671 12.8753 16.4333 12.9755 16.2431 13.1759L15.3465 14.1207C15.2378 14.2352 15.102 14.2924 14.939 14.2924C14.776 14.2924 14.6333 14.228 14.5111 14.0992Z" fill="#FFBA09"/>
              </g>
            </svg>
            <myST.MenuText>이벤트 및 공지사항</myST.MenuText>
            <myST.Alarm>+1</myST.Alarm>
          </myST.MenuTwo>
          <myST.MenuThree>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#FFEAB5"/>
                <mask id="mask0_1249_1561" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
              <g mask="url(#mask0_1249_1561)">
                <path d="M11.958 17.04C12.252 17.04 12.5006 16.9383 12.7039 16.7351C12.9066 16.5323 13.008 16.284 13.008 15.99C13.008 15.696 12.9066 15.4476 12.7039 15.2449C12.5006 15.0416 12.252 14.94 11.958 14.94C11.664 14.94 11.4154 15.0416 11.2121 15.2449C11.0094 15.4476 10.908 15.696 10.908 15.99C10.908 16.284 11.0094 16.5323 11.2121 16.7351C11.4154 16.9383 11.664 17.04 11.958 17.04ZM12.084 8.38798C12.476 8.38798 12.791 8.49634 13.029 8.71306C13.267 8.93034 13.386 9.21398 13.386 9.56398C13.386 9.80198 13.3056 10.0433 13.1449 10.2881C12.9836 10.5333 12.756 10.789 12.462 11.055C12.042 11.419 11.734 11.769 11.538 12.105C11.342 12.441 11.244 12.777 11.244 13.113C11.244 13.309 11.3176 13.4733 11.4649 13.6061C11.6116 13.7393 11.783 13.806 11.979 13.806C12.175 13.806 12.35 13.736 12.504 13.596C12.658 13.456 12.756 13.281 12.798 13.071C12.84 12.833 12.9346 12.6126 13.0819 12.4099C13.2286 12.2066 13.47 11.944 13.806 11.622C14.24 11.216 14.5446 10.845 14.7199 10.509C14.8946 10.173 14.982 9.80198 14.982 9.39598C14.982 8.68198 14.7126 8.09734 14.1739 7.64206C13.6346 7.18734 12.938 6.95998 12.084 6.95998C11.496 6.95998 10.9746 7.07198 10.5199 7.29598C10.0646 7.51998 9.71101 7.86298 9.45901 8.32498C9.36101 8.50698 9.32601 8.68534 9.35401 8.86006C9.38201 9.03534 9.48001 9.17898 9.64801 9.29098C9.83001 9.40298 10.0296 9.43798 10.2469 9.39598C10.4636 9.35398 10.642 9.23498 10.782 9.03898C10.936 8.82898 11.1216 8.66798 11.3389 8.55598C11.5556 8.44398 11.804 8.38798 12.084 8.38798ZM12 20.4C10.852 20.4 9.76701 20.1793 8.74501 19.7381C7.72301 19.2973 6.83065 18.699 6.06793 17.943C5.30465 17.187 4.70265 16.298 4.26193 15.276C3.82065 14.254 3.60001 13.162 3.60001 12C3.60001 10.838 3.82065 9.74598 4.26193 8.72398C4.70265 7.70198 5.30465 6.81298 6.06793 6.05698C6.83065 5.30098 7.72301 4.70234 8.74501 4.26106C9.76701 3.82034 10.852 3.59998 12 3.59998C13.176 3.59998 14.275 3.82034 15.297 4.26106C16.319 4.70234 17.208 5.30098 17.964 6.05698C18.72 6.81298 19.315 7.70198 19.749 8.72398C20.183 9.74598 20.4 10.838 20.4 12C20.4 13.162 20.183 14.254 19.749 15.276C19.315 16.298 18.72 17.187 17.964 17.943C17.208 18.699 16.319 19.2973 15.297 19.7381C14.275 20.1793 13.176 20.4 12 20.4Z" fill="#FFBA09"/>
              </g>
            </svg>
            <myST.MenuText>1:1 고객센터</myST.MenuText>
          </myST.MenuThree>
        </myST.MenuBox>

        <myST.Line/>

        {/* 탈퇴하기 */}
        <myST.QuitBox>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1249_1575" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <rect width="20" height="20" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1249_1575)">
              <path d="M6.8 10.8H13.22C13.4467 10.8 13.6333 10.7232 13.78 10.5696C13.9267 10.4165 14 10.2267 14 10C14 9.77333 13.9232 9.5832 13.7696 9.4296C13.6165 9.27653 13.4267 9.2 13.2 9.2H6.78C6.55333 9.2 6.36667 9.27653 6.22 9.4296C6.07333 9.5832 6 9.77333 6 10C6 10.2267 6.07653 10.4165 6.2296 10.5696C6.3832 10.7232 6.57333 10.8 6.8 10.8ZM10 18C8.89333 18 7.85333 17.7899 6.88 17.3696C5.90667 16.9499 5.06 16.38 4.34 15.66C3.62 14.94 3.05013 14.0933 2.6304 13.12C2.21013 12.1467 2 11.1067 2 10C2 8.89333 2.21013 7.85333 2.6304 6.88C3.05013 5.90667 3.62 5.06 4.34 4.34C5.06 3.62 5.90667 3.04987 6.88 2.6296C7.85333 2.20987 8.89333 2 10 2C11.1067 2 12.1467 2.20987 13.12 2.6296C14.0933 3.04987 14.94 3.62 15.66 4.34C16.38 5.06 16.9499 5.90667 17.3696 6.88C17.7899 7.85333 18 8.89333 18 10C18 11.1067 17.7899 12.1467 17.3696 13.12C16.9499 14.0933 16.38 14.94 15.66 15.66C14.94 16.38 14.0933 16.9499 13.12 17.3696C12.1467 17.7899 11.1067 18 10 18Z" fill="#DCDCDC"/>
            </g>
          </svg>
          &nbsp;서비스 탈퇴하기
        </myST.QuitBox>
      </myST.SearchBg>
    </Layout>
  );
};