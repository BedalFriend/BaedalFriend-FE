import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  __decreaseParticipantThunk,
  __deletePost,
  __getDetailThunk,
  __getThunk,
  __increaseParticipantThunk,
  UPDATE_POST,
} from '../../redux/modules/PostSlice';
import { __enterChannel, __exitChannel } from '../../redux/modules/ChatSlice';

import Layout from '../../components/layout/Layout';
import CurrentLocation from './CurrentLocation';
import ExitModal from './ExitModal';
import DeleteModal from './DeleteModal';
import CurrentMap from './CurrentMap';

import * as DetailST from './DetailPageStyle';
import Timer from '../../components/elements/timer/Timer';
import SVG from '../../shared/SVG';
import ProfilePic from '../../components/elements/profilePic/ProfilePic';
import { UPDATE_USER } from '../../redux/modules/UserSlice';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  let post = useSelector((state) => state.post.post.data);
  const posts = useSelector((state) => state.post.posts);
  const token = useSelector((state) => state.token.accessToken);
  // console.log('posts', posts);
  console.log('post', post);
  // console.log('token', token);
  console.log('user', user);

  //지도 화면 변환
  const [index, setIndex] = useState(false);

  //하단 버튼 변환
  const [custom, setCustom] = useState(0);

  //삭제 모달창
  const [isOpen, setIsOpen] = useState(false);

  //퇴장 모달창
  const [isExitOpen, setIsExitOpen] = useState(false);

  const [aniState, setAniState] = useState(false);
  const [isDeleteHandler, setIsDeleteHandler] = useState(false);
  const openModal = () => {
    setAniState(true);
    setIsOpen(true);
  };

  const openExitModal = () => {
    setAniState(true);
    setIsExitOpen(true);
  };

  // 삭제 핸들러
  const onDeleteHandler = () => {
    dispatch(__deletePost(id));
    navigate('/');
  };

  // 참여 핸들러
  const onEnterHandler = () => {
    dispatch(__enterChannel(id));
    dispatch(__increaseParticipantThunk(id));
    dispatch(UPDATE_USER({ ...user, onGoing: post.postId }));
    // console.log(posts.chatRoomMembers);
    const tempArr = [...post.chatRoomMembers];
    tempArr.push({ member: user });
    dispatch(
      UPDATE_POST({
        ...post,
        chatRoomMembers: tempArr,
      })
    );

    // window.location.reload();
  };

  // 퇴장 핸들러
  const onExitHandler = () => {
    dispatch(__decreaseParticipantThunk(id));

    dispatch(UPDATE_USER({ ...user, onGoing: null }));

    const tempArr = [...post.chatRoomMembers];

    const target = tempArr.findIndex((item) => {
      return item.member.id === user.id;
    });

    tempArr.splice(target, 1);

    dispatch(
      UPDATE_POST({
        ...post,
        chatRoomMembers: tempArr,
      })
    );
    dispatch(__exitChannel(id));
    setIsExitOpen(false);
    // window.location.reload();
  };

  // 참여중인 인원
  const VacUser = () => {
    const result = [];
    for (
      let i = 0;
      i < post?.maxCapacity - post?.chatRoomMembers?.length;
      i++
    ) {
      result.push(
        <svg
          key={i}
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='18' cy='18' r='17.5' fill='white' stroke='#FFDFCD' />
          <circle cx='10' cy='18' r='2' fill='#FFDFCD' />
          <circle cx='18' cy='18' r='2' fill='#FFDFCD' />
          <circle cx='26' cy='18' r='2' fill='#FFDFCD' />
        </svg>
      );
    }
    return result;
  };

  // Limit 계산

  const [gap, setGap] = useState(
    parseInt((new Date(post.limitTime) - new Date()) / 1000)
  );

  useEffect(() => {
    if (post?.limitTime) {
      setGap(parseInt((new Date(post.limitTime) - new Date()) / 1000));
    }
  }, [post?.limitTime]);

  useEffect(() => {
    dispatch(__getDetailThunk(id));
    dispatch(__getThunk());
  }, []);

  useEffect(() => {
    if (user.id === post.memberId) {
      setCustom(3);
    } else if (user.onGoing && user.onGoing !== post.postId) {
      setCustom(1);
    } else if (user.onGoing === post.postId) {
      setCustom(2);
    } else if (post.maxCapacity === post?.chatRoomMembers?.length) {
      setCustom(4);
    } else if (user.onGoing === 0 || user.onGoing === null) {
      setCustom(0);
    }
  }, [user.id, post.memberId, user.onGoing, custom]);

  return (
    <Layout>
      {isOpen && (
        <DeleteModal
          setIsOpen={setIsOpen}
          aniState={aniState}
          setAniState={setAniState}
          onDeleteHandler={onDeleteHandler}
          isDeleteHandler={isDeleteHandler}
          setIsDeleteHandler={setIsDeleteHandler}
        />
      )}
      {index ? (
        <CurrentMap data={post} setIndex={setIndex} />
      ) : (
        <DetailST.DetailBox>
          <DetailST.CardBox>
            <DetailST.AddressBox>
              <DetailST.AddressHeader>
                <DetailST.YellowMarkSvg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g mask='url(#mask0_848_1614)'>
                    <path
                      d='M8.00002 14.4166C7.91113 14.4166 7.82224 14.3999 7.73335 14.3666C7.64446 14.3333 7.56669 14.2888 7.50002 14.2333C5.8778 12.7999 4.66669 11.4695 3.86669 10.2419C3.06669 9.01392 2.66669 7.86659 2.66669 6.79992C2.66669 5.13325 3.20291 3.80547 4.27535 2.81659C5.34735 1.8277 6.58891 1.33325 8.00002 1.33325C9.41113 1.33325 10.6527 1.8277 11.7247 2.81659C12.7971 3.80547 13.3334 5.13325 13.3334 6.79992C13.3334 7.86659 12.9334 9.01392 12.1334 10.2419C11.3334 11.4695 10.1222 12.7999 8.50002 14.2333C8.43335 14.2888 8.35558 14.3333 8.26669 14.3666C8.1778 14.3999 8.08891 14.4166 8.00002 14.4166Z'
                      fill='#FFBA09'
                    />
                  </g>
                  <g mask='url(#mask1_848_1614)'>
                    <path
                      d='M9.33334 9.55553C9.27038 9.55553 9.21764 9.53419 9.17512 9.49153C9.13245 9.44901 9.11112 9.39627 9.11112 9.33331V7.77775H8.8889C8.76667 7.77775 8.66208 7.73419 8.57512 7.64708C8.48801 7.56012 8.44445 7.45553 8.44445 7.33331V6.2222C8.44445 5.91479 8.55282 5.65279 8.76956 5.4362C8.98615 5.21945 9.24815 5.11108 9.55556 5.11108V9.33331C9.55556 9.39627 9.53423 9.44901 9.49156 9.49153C9.44904 9.53419 9.3963 9.55553 9.33334 9.55553ZM7.11112 9.55553C7.04815 9.55553 6.99534 9.53419 6.95267 9.49153C6.91015 9.44901 6.8889 9.39627 6.8889 9.33331V7.5222C6.70001 7.47034 6.54171 7.36664 6.41401 7.21108C6.28615 7.05553 6.22223 6.87405 6.22223 6.66664V5.33331C6.22223 5.27034 6.24349 5.21753 6.28601 5.17486C6.32867 5.13234 6.38149 5.11108 6.44445 5.11108C6.50741 5.11108 6.56023 5.13234 6.6029 5.17486C6.64541 5.21753 6.66667 5.27034 6.66667 5.33331V6.66664H6.8889V5.33331C6.8889 5.27034 6.91015 5.21753 6.95267 5.17486C6.99534 5.13234 7.04815 5.11108 7.11112 5.11108C7.17408 5.11108 7.2269 5.13234 7.26956 5.17486C7.31208 5.21753 7.33334 5.27034 7.33334 5.33331V6.66664H7.55556V5.33331C7.55556 5.27034 7.5769 5.21753 7.61956 5.17486C7.66208 5.13234 7.71482 5.11108 7.77778 5.11108C7.84075 5.11108 7.89356 5.13234 7.93623 5.17486C7.97875 5.21753 8.00001 5.27034 8.00001 5.33331V6.66664C8.00001 6.87405 7.93608 7.05553 7.80823 7.21108C7.68053 7.36664 7.52223 7.47034 7.33334 7.5222V9.33331C7.33334 9.39627 7.31208 9.44901 7.26956 9.49153C7.2269 9.53419 7.17408 9.55553 7.11112 9.55553Z'
                      fill='white'
                    />
                  </g>
                </DetailST.YellowMarkSvg>

                <DetailST.CardAddress>
                  {post?.targetAddress}
                </DetailST.CardAddress>
              </DetailST.AddressHeader>
              {user.id === post.memberId ? (
                <svg
                  onClick={openModal}
                  width='28'
                  height='44'
                  viewBox='0 0 28 44'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='6'
                    cy='22'
                    r='2'
                    transform='rotate(-90 6 22)'
                    fill='#FF5B15'
                  />
                  <circle
                    cx='14'
                    cy='22'
                    r='2'
                    transform='rotate(-90 14 22)'
                    fill='#FF5B15'
                  />
                  <circle
                    cx='22'
                    cy='22'
                    r='2'
                    transform='rotate(-90 22 22)'
                    fill='#FF5B15'
                  />
                </svg>
              ) : null}
            </DetailST.AddressBox>

            <DetailST.TitleBox>
              <DetailST.NameBox>
                <SVG
                  category={post?.category}
                  size='24px'
                  color='var(--color-light-black)'
                />
                <DetailST.TagetName>{post?.targetName}</DetailST.TagetName>
              </DetailST.NameBox>
              <DetailST.CardTimer>
                {gap < 0 ? (
                  <Timer limit='0' />
                ) : gap > 900 ? null : (
                  <Timer limit={gap.toString()} />
                )}
              </DetailST.CardTimer>
            </DetailST.TitleBox>

            <DetailST.BodyBox>
              <DetailST.DeliveryInfo>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='20' height='20' rx='4' fill='#FFEAB5' />
                  <g mask='url(#mask0_848_1488)'>
                    <path
                      d='M5.87204 14.8739C5.30386 14.8739 4.82091 14.6764 4.42318 14.2814C4.02545 13.8864 3.82659 13.4068 3.82659 12.8426C3.45159 12.8426 3.13068 12.7101 2.86386 12.4452C2.59659 12.1797 2.46295 11.8608 2.46295 11.4884V5.39469C2.46295 5.0223 2.59659 4.70362 2.86386 4.43865C3.13068 4.17324 3.45159 4.04053 3.82659 4.04053H12.0084C12.3834 4.04053 12.7045 4.17324 12.9718 4.43865C13.2386 4.70362 13.372 5.0223 13.372 5.39469V6.74886H15.0766C15.1902 6.74886 15.2925 6.77143 15.3834 6.81657C15.4743 6.86171 15.5539 6.92942 15.622 7.01969L17.3266 9.271C17.372 9.32742 17.4061 9.38949 17.4289 9.45719C17.4516 9.5249 17.463 9.59825 17.463 9.67725V12.1655C17.463 12.3574 17.3975 12.5181 17.2666 12.6476C17.1361 12.7776 16.9743 12.8426 16.7811 12.8426H16.0993C16.0993 13.4068 15.9005 13.8864 15.5027 14.2814C15.105 14.6764 14.622 14.8739 14.0539 14.8739C13.4857 14.8739 13.0027 14.6764 12.605 14.2814C12.2073 13.8864 12.0084 13.4068 12.0084 12.8426H7.9175C7.9175 13.4068 7.71863 13.8864 7.32091 14.2814C6.92318 14.6764 6.44022 14.8739 5.87204 14.8739ZM5.87204 13.5197C6.06522 13.5197 6.22727 13.4547 6.35818 13.3247C6.48863 13.1951 6.55386 13.0345 6.55386 12.8426C6.55386 12.6508 6.48863 12.4901 6.35818 12.3605C6.22727 12.2305 6.06522 12.1655 5.87204 12.1655C5.67886 12.1655 5.51682 12.2305 5.38591 12.3605C5.25545 12.4901 5.19022 12.6508 5.19022 12.8426C5.19022 13.0345 5.25545 13.1951 5.38591 13.3247C5.51682 13.4547 5.67886 13.5197 5.87204 13.5197ZM14.0539 13.5197C14.247 13.5197 14.4089 13.4547 14.5393 13.3247C14.6702 13.1951 14.7357 13.0345 14.7357 12.8426C14.7357 12.6508 14.6702 12.4901 14.5393 12.3605C14.4089 12.2305 14.247 12.1655 14.0539 12.1655C13.8607 12.1655 13.6989 12.2305 13.5684 12.3605C13.4375 12.4901 13.372 12.6508 13.372 12.8426C13.372 13.0345 13.4375 13.1951 13.5684 13.3247C13.6989 13.4547 13.8607 13.5197 14.0539 13.5197ZM13.372 10.1343H16.2698L14.7357 8.10303H13.372V10.1343Z'
                      fill='#FFBA09'
                    />
                  </g>
                </svg>

                <DetailST.InfoText>
                  {post?.deliveryTime}분 소요 예상
                </DetailST.InfoText>
              </DetailST.DeliveryInfo>
              <DetailST.DeliveryInfo>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='20' height='20' rx='4' fill='#FFEAB5' />

                  <g mask='url(#mask0_848_1490)'>
                    <path
                      d='M10 12.5C10.6944 12.5 11.2847 12.2569 11.7708 11.7708C12.2569 11.2847 12.5 10.6944 12.5 10C12.5 9.30556 12.2569 8.71528 11.7708 8.22917C11.2847 7.74306 10.6944 7.5 10 7.5C9.30556 7.5 8.71528 7.74306 8.22917 8.22917C7.74306 8.71528 7.5 9.30556 7.5 10C7.5 10.6944 7.74306 11.2847 8.22917 11.7708C8.71528 12.2569 9.30556 12.5 10 12.5ZM4.16667 15C3.70833 15 3.31611 14.8367 2.99 14.51C2.66333 14.1839 2.5 13.7917 2.5 13.3333V6.66667C2.5 6.20833 2.66333 5.81611 2.99 5.49C3.31611 5.16333 3.70833 5 4.16667 5H15.8333C16.2917 5 16.6842 5.16333 17.0108 5.49C17.3369 5.81611 17.5 6.20833 17.5 6.66667V13.3333C17.5 13.7917 17.3369 14.1839 17.0108 14.51C16.6842 14.8367 16.2917 15 15.8333 15H4.16667ZM4.16667 8.33333C4.625 8.33333 5.01722 8.17 5.34333 7.84333C5.67 7.51722 5.83333 7.125 5.83333 6.66667H4.16667V8.33333ZM15.8333 8.33333V6.66667H14.1667C14.1667 7.125 14.3297 7.51722 14.6558 7.84333C14.9825 8.17 15.375 8.33333 15.8333 8.33333ZM4.16667 13.3333H5.83333C5.83333 12.875 5.67 12.4825 5.34333 12.1558C5.01722 11.8297 4.625 11.6667 4.16667 11.6667V13.3333ZM14.1667 13.3333H15.8333V11.6667C15.375 11.6667 14.9825 11.8297 14.6558 12.1558C14.3297 12.4825 14.1667 12.875 14.1667 13.3333Z'
                      fill='#FFBA09'
                    />
                  </g>
                </svg>

                <DetailST.InfoText>
                  {post?.targetAmount}만원 이상 {post?.deliveryFee}원
                </DetailST.InfoText>
              </DetailST.DeliveryInfo>
              <DetailST.DeliveryInfo>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='20' height='20' rx='4' fill='#FFEAB5' />

                  <g mask='url(#mask0_848_1489)'>
                    <path
                      d='M9.99084 16.25C9.07509 16.25 8.21746 16.0805 7.41795 15.7414C6.61795 15.4019 5.92198 14.9433 5.33004 14.3657C4.73761 13.7886 4.26728 13.11 3.91905 12.33C3.57131 11.5505 3.39744 10.7143 3.39744 9.82143C3.39744 8.92857 3.57131 8.09214 3.91905 7.31214C4.26728 6.53262 4.73761 5.85405 5.33004 5.27643C5.92198 4.69929 6.61795 4.24119 7.41795 3.90214C8.21746 3.56262 9.07509 3.39286 9.99084 3.39286C10.9066 3.39286 11.7645 3.56262 12.5645 3.90214C13.364 4.24119 14.06 4.69929 14.6524 5.27643C15.2443 5.85405 15.7144 6.53262 16.0626 7.31214C16.4104 8.09214 16.5842 8.92857 16.5842 9.82143C16.5842 10.7143 16.4104 11.5505 16.0626 12.33C15.7144 13.11 15.2443 13.7886 14.6524 14.3657C14.06 14.9433 13.364 15.4019 12.5645 15.7414C11.7645 16.0805 10.9066 16.25 9.99084 16.25ZM9.25824 6.96429V9.80357C9.25824 9.89881 9.27656 9.99095 9.31319 10.08C9.34982 10.1695 9.40476 10.25 9.47802 10.3214L11.5476 12.3393C11.6819 12.4702 11.8468 12.5357 12.0421 12.5357C12.2375 12.5357 12.4084 12.4643 12.5549 12.3214C12.6893 12.1905 12.7564 12.0238 12.7564 11.8214C12.7564 11.619 12.6893 11.4524 12.5549 11.3214L10.7234 9.53571V6.94643C10.7234 6.74405 10.6534 6.57738 10.5132 6.44643C10.3725 6.31548 10.1984 6.25 9.99084 6.25C9.78327 6.25 9.6094 6.31833 9.46923 6.455C9.32857 6.59214 9.25824 6.7619 9.25824 6.96429ZM3.70879 5.76786C3.57448 5.89881 3.40965 5.96429 3.21429 5.96429C3.01893 5.96429 2.84799 5.89286 2.70147 5.75C2.56716 5.61905 2.5 5.45238 2.5 5.25C2.5 5.04762 2.56716 4.88095 2.70147 4.75L4.80769 2.69643C4.942 2.56548 5.10684 2.5 5.3022 2.5C5.49756 2.5 5.6685 2.57143 5.81502 2.71429C5.94933 2.84524 6.01648 3.0119 6.01648 3.21429C6.01648 3.41667 5.94933 3.58333 5.81502 3.71429L3.70879 5.76786ZM16.2546 5.75L14.1484 3.69643C14.014 3.56548 13.9469 3.40476 13.9469 3.21429C13.9469 3.02381 14.0201 2.85714 14.1667 2.71429C14.301 2.58333 14.4719 2.51786 14.6795 2.51786C14.8871 2.51786 15.058 2.58333 15.1923 2.71429L17.2985 4.76786C17.4328 4.89881 17.5 5.05952 17.5 5.25C17.5 5.44048 17.4267 5.60714 17.2802 5.75C17.1459 5.88095 16.975 5.94643 16.7674 5.94643C16.5598 5.94643 16.3889 5.88095 16.2546 5.75Z'
                      fill='#FFBA09'
                    />
                  </g>
                </svg>

                <DetailST.InfoText>
                  {post?.limitTime?.split(' ')[1].split(':')[0] > 12 ? (
                    <div>
                      오후 {post?.limitTime?.split(' ')[1].split(':')[0] - 12}시
                      {post?.limitTime?.split(' ')[1].split(':')[1]}분 신청 마감
                    </div>
                  ) : (
                    <div>
                      오전 {post?.limitTime?.split(' ')[1].split(':')[0]}시
                      {post?.limitTime?.split(' ')[1].split(':')[1]}분 신청 마감
                    </div>
                  )}
                </DetailST.InfoText>
              </DetailST.DeliveryInfo>
            </DetailST.BodyBox>

            <DetailST.ContentBox>
              <DetailST.UserInfo>
                <ProfilePic
                  key={user.id}
                  size='36px'
                  border='1px solid var(--color-orange)'
                  user={user}
                />
                <DetailST.ProfileNickName>
                  {post.nickname}
                </DetailST.ProfileNickName>
              </DetailST.UserInfo>

              <DetailST.Content>
                <DetailST.ContentText>
                  안녕하세요! 매너있는 공구 진행해요.
                </DetailST.ContentText>
              </DetailST.Content>
            </DetailST.ContentBox>
          </DetailST.CardBox>
          <div>
            <DetailST.PartyHeaderBox>
              <DetailST.PartyHeader>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='24' height='24' rx='4' fill='#FFEAB5' />
                  <g mask='url(#mask0_848_1435)'>
                    <path
                      d='M17.7273 13.9375C17.4955 13.9375 17.3013 13.8565 17.1447 13.6945C16.9876 13.5331 16.9091 13.3328 16.9091 13.0938V11.4062H15.2727C15.0409 11.4062 14.8467 11.3253 14.6902 11.1632C14.5331 11.0018 14.4545 10.8016 14.4545 10.5625C14.4545 10.3234 14.5331 10.1229 14.6902 9.96091C14.8467 9.79947 15.0409 9.71875 15.2727 9.71875H16.9091V8.03125C16.9091 7.79219 16.9876 7.59166 17.1447 7.42966C17.3013 7.26822 17.4955 7.1875 17.7273 7.1875C17.9591 7.1875 18.1533 7.26822 18.3098 7.42966C18.4669 7.59166 18.5455 7.79219 18.5455 8.03125V9.71875H20.1818C20.4136 9.71875 20.6078 9.79947 20.7644 9.96091C20.9215 10.1229 21 10.3234 21 10.5625C21 10.8016 20.9215 11.0018 20.7644 11.1632C20.6078 11.3253 20.4136 11.4062 20.1818 11.4062H18.5455V13.0938C18.5455 13.3328 18.4669 13.5331 18.3098 13.6945C18.1533 13.8565 17.9591 13.9375 17.7273 13.9375ZM9.54545 12.25C8.64545 12.25 7.875 11.9195 7.23409 11.2586C6.59318 10.5977 6.27273 9.80312 6.27273 8.875C6.27273 7.94688 6.59318 7.15234 7.23409 6.49141C7.875 5.83047 8.64545 5.5 9.54545 5.5C10.4455 5.5 11.2159 5.83047 11.8568 6.49141C12.4977 7.15234 12.8182 7.94688 12.8182 8.875C12.8182 9.80312 12.4977 10.5977 11.8568 11.2586C11.2159 11.9195 10.4455 12.25 9.54545 12.25ZM3.81818 19C3.58636 19 3.39218 18.919 3.23564 18.757C3.07855 18.5956 3 18.3953 3 18.1562V16.6375C3 16.1594 3.11945 15.7198 3.35836 15.3187C3.59673 14.9182 3.91364 14.6125 4.30909 14.4016C5.15455 13.9656 6.01364 13.6385 6.88636 13.4203C7.75909 13.2026 8.64545 13.0938 9.54545 13.0938C10.4455 13.0938 11.3318 13.2026 12.2045 13.4203C13.0773 13.6385 13.9364 13.9656 14.7818 14.4016C15.1773 14.6125 15.4942 14.9182 15.7325 15.3187C15.9715 15.7198 16.0909 16.1594 16.0909 16.6375V18.1562C16.0909 18.3953 16.0124 18.5956 15.8553 18.757C15.6987 18.919 15.5045 19 15.2727 19H3.81818Z'
                      fill='#FFBA09'
                    />
                  </g>
                </svg>
                <DetailST.PartyTitle>참여중인 배프</DetailST.PartyTitle>
              </DetailST.PartyHeader>
              <DetailST.PartyTotalMember>
                {post?.chatRoomMembers?.length}/{post.maxCapacity}
              </DetailST.PartyTotalMember>
            </DetailST.PartyHeaderBox>

            <DetailST.PtPicBox>
              {post.chatRoomMembers?.map((user) => (
                <DetailST.UserInfo key={user.member.id}>
                  <ProfilePic
                    key={user.member.id}
                    size='36px'
                    border='1px solid var(--color-orange)'
                    user={user.member}
                  />
                  <DetailST.ProfileNickName>
                    {user.member.nickname}
                  </DetailST.ProfileNickName>
                </DetailST.UserInfo>
              ))}

              <VacUser />
            </DetailST.PtPicBox>
          </div>

          <DetailST.PtMapBox>
            <DetailST.PtMapTitle>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='24' height='24' rx='4' fill='#FFEAB5' />
                <g mask='url(#mask0_848_1438)'>
                  <path
                    d='M13.9773 20.9763C13.7045 21.0376 13.4661 20.98 13.2618 20.8037C13.057 20.628 12.9545 20.3871 12.9545 20.081C12.9545 19.8667 13.0267 19.6717 13.1709 19.496C13.3145 19.3197 13.4924 19.201 13.7045 19.1397C14.0833 19.0479 14.4509 18.9292 14.8073 18.7835C15.163 18.6384 15.5076 18.4587 15.8409 18.2444C16.0379 18.122 16.2539 18.0724 16.4891 18.0957C16.7236 18.1183 16.9167 18.2062 17.0682 18.3592C17.2803 18.5735 17.3752 18.8183 17.3527 19.0938C17.3297 19.3693 17.197 19.5836 16.9545 19.7366C16.4848 20.0427 16.0039 20.2953 15.5118 20.4942C15.0191 20.6932 14.5076 20.8539 13.9773 20.9763ZM18.3636 17.0506C18.2121 16.8976 18.1248 16.7063 18.1018 16.4767C18.0794 16.2471 18.1288 16.0405 18.25 15.8569C18.447 15.5201 18.6212 15.1758 18.7727 14.8238C18.9242 14.4718 19.0455 14.0968 19.1364 13.6989C19.197 13.4846 19.3182 13.3009 19.5 13.1479C19.6818 12.9948 19.8788 12.9183 20.0909 12.9183C20.3939 12.9183 20.6327 13.0255 20.8073 13.2397C20.9812 13.454 21.0303 13.6989 20.9545 13.9744C20.8333 14.5253 20.6703 15.0497 20.4655 15.5474C20.2612 16.0445 20.0076 16.515 19.7045 16.9588C19.553 17.1884 19.3448 17.3145 19.08 17.3371C18.8145 17.3604 18.5758 17.2649 18.3636 17.0506ZM20.0682 11.0817C19.8561 11.0817 19.663 11.0052 19.4891 10.8522C19.3145 10.6991 19.197 10.5155 19.1364 10.3012C19.0455 9.90326 18.9242 9.52432 18.7727 9.16435C18.6212 8.80499 18.447 8.46461 18.25 8.14321C18.1288 7.95955 18.0794 7.75293 18.1018 7.52336C18.1248 7.29379 18.2121 7.10247 18.3636 6.94943C18.5758 6.73516 18.8145 6.63568 19.08 6.65098C19.3448 6.66629 19.553 6.78872 19.7045 7.0183C20.0076 7.46214 20.2652 7.94026 20.4773 8.45267C20.6894 8.96569 20.8561 9.49003 20.9773 10.0257C21.0379 10.3012 20.9773 10.5461 20.7955 10.7603C20.6136 10.9746 20.3712 11.0817 20.0682 11.0817ZM10.1364 20.9534C8.06061 20.4636 6.35212 19.3923 5.01091 17.7394C3.6703 16.0864 3 14.1733 3 12C3 9.81143 3.66667 7.88302 5 6.21479C6.33333 4.54656 8.03788 3.48287 10.1136 3.02373C10.3864 2.96251 10.6252 3.01975 10.83 3.19545C11.0342 3.37176 11.1364 3.60531 11.1364 3.89611C11.1364 4.11037 11.0642 4.30536 10.92 4.48106C10.7764 4.65737 10.5985 4.77614 10.3864 4.83735C8.76515 5.23528 7.43182 6.10001 6.38636 7.43153C5.34091 8.76305 4.81818 10.2859 4.81818 12C4.81818 13.7142 5.34091 15.2257 6.38636 16.5346C7.43182 17.8428 8.76515 18.7112 10.3864 19.1397C10.5985 19.201 10.7764 19.3234 10.92 19.5071C11.0642 19.6907 11.1364 19.8897 11.1364 20.104C11.1364 20.3947 11.0379 20.6243 10.8409 20.7927C10.6439 20.961 10.4091 21.0146 10.1364 20.9534ZM15.9091 5.7786C15.5606 5.56434 15.2045 5.3767 14.8409 5.21569C14.4773 5.0553 14.1061 4.92918 13.7273 4.83735C13.5152 4.77614 13.3333 4.65737 13.1818 4.48106C13.0303 4.30536 12.9545 4.11037 12.9545 3.89611C12.9545 3.60531 13.057 3.37176 13.2618 3.19545C13.4661 3.01975 13.7045 2.96251 13.9773 3.02373C14.5076 3.14617 15.0227 3.30687 15.5227 3.50583C16.0227 3.70479 16.5076 3.95733 16.9773 4.26342C17.2197 4.41647 17.3524 4.63074 17.3755 4.90623C17.3979 5.18171 17.303 5.42659 17.0909 5.64086C16.9394 5.79391 16.7539 5.88574 16.5345 5.91635C16.3145 5.94696 16.1061 5.90104 15.9091 5.7786ZM12.0682 16.2701C11.947 16.2701 11.8333 16.2508 11.7273 16.2122C11.6212 16.1743 11.5227 16.117 11.4318 16.0405C10.4318 15.1069 9.68182 14.2345 9.18182 13.4234C8.68182 12.6122 8.43182 11.8623 8.43182 11.1736C8.43182 10.0257 8.79939 9.11139 9.53455 8.43063C10.2691 7.74926 11.1136 7.40857 12.0682 7.40857C13.0227 7.40857 13.8676 7.74926 14.6027 8.43063C15.3373 9.11139 15.7045 10.0257 15.7045 11.1736C15.7045 11.8623 15.4545 12.6122 14.9545 13.4234C14.4545 14.2345 13.7045 15.1069 12.7045 16.0405C12.6136 16.117 12.5152 16.1743 12.4091 16.2122C12.303 16.2508 12.1894 16.2701 12.0682 16.2701ZM12.0682 12C12.3409 12 12.5721 11.9045 12.7618 11.7135C12.9509 11.5219 13.0455 11.2884 13.0455 11.0129C13.0455 10.7527 12.9509 10.5231 12.7618 10.3241C12.5721 10.1252 12.3409 10.0257 12.0682 10.0257C11.7955 10.0257 11.5642 10.1252 11.3745 10.3241C11.1855 10.5231 11.0909 10.7527 11.0909 11.0129C11.0909 11.2884 11.1855 11.5219 11.3745 11.7135C11.5642 11.9045 11.7955 12 12.0682 12Z'
                    fill='#FFBA09'
                  />
                </g>
              </svg>
              <DetailST.PartyTitle>만나는 장소</DetailST.PartyTitle>
            </DetailST.PtMapTitle>
            <div
              onClick={() => {
                setIndex(true);
              }}
            >
              <CurrentLocation data={post} />
            </div>
          </DetailST.PtMapBox>

          {isExitOpen && (
            <ExitModal
              setIsExitOpen={setIsExitOpen}
              onExitHandler={onExitHandler}
              aniState={aniState}
              setAniState={setAniState}
            />
          )}

          {custom === 0 ? (
            <DetailST.JoinBtn onClick={onEnterHandler}>
              참여하기
            </DetailST.JoinBtn>
          ) : null}
          {custom === 1 ? (
            <DetailST.OverLapBtn>
              이미 다른 공구에 참여중이에요
            </DetailST.OverLapBtn>
          ) : null}
          {custom === 2 ? (
            <DetailST.BottomBtnBox>
              <DetailST.PartyOutBtn onClick={openExitModal}>
                파티에서 나가기
              </DetailST.PartyOutBtn>
              <DetailST.CurrentStatusBtn>참여 중</DetailST.CurrentStatusBtn>
            </DetailST.BottomBtnBox>
          ) : null}
          {custom === 3 ? (
            <DetailST.BottomBtnBox>
              <DetailST.PartyOutBtn>공구 완료하기</DetailST.PartyOutBtn>
              <DetailST.CurrentStatusBtn>진행 중</DetailST.CurrentStatusBtn>
            </DetailST.BottomBtnBox>
          ) : null}
          {custom === 4 ? (
            <DetailST.OverLapBtn>지금은 자리가 없어요</DetailST.OverLapBtn>
          ) : null}
        </DetailST.DetailBox>
      )}
    </Layout>
  );
};

export default DetailPage;
