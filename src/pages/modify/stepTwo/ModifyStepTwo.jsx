import React, { useEffect, useState } from 'react';

import { Toggle } from './toggle/Toggle';
import CurrentLocation from './currentLocation/CurrentLocation';

import * as ModifyST from '../ModifyPageStyle';

const ModifySTepTwo = ({
  data,
  setData,
  addressManager,
  isSecondChecked,
  setNextStepTwo,
  setIndex,
}) => {
  // AM PM 토글 관리
  const [toggle, setToggle] = useState(false);

  // isFail === false 일때 error 메세지 숨김
  const [isFistTimeFail, setIsFistTimeFail] = useState(false);
  const [isSecondTimeFail, setIsSecondTimeFail] = useState(false);
  const [isTextAreaFail, setIsTextAreaFail] = useState(false);
  const [isTextAreaLengthFail, setIsTextAreaLengthFail] = useState(false);

  // LimitTime
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  const [nowTime, setNowTime] = useState({
    hour: 0,
    minute: 0,
  });

  const newHourHandler = (e) => {
    const { value, name } = e.target;
    if (value.length < 3 && value < 13) {
      setNowTime({ ...nowTime, [name]: value.replace(/[^0-9]/g, '') });
    }
  };

  const newMinnuteHandler = (e) => {
    const { value, name } = e.target;
    if (value < 60 && value.length < 3) {
      setNowTime({ ...nowTime, [name]: value.replace(/[^0-9]/g, '') });
    }
  };

  const textAreaHandler = (e) => {
    const { value, name } = e.target;
    const text_length = value.replace(/<br\s*\/?>/gm, '\n').length;

    const max_length = 40;

    const text_line = value.split('\n').length;

    if (text_length < max_length && text_line < 3) {
      setData({ ...data, [name]: value });
      setIsTextAreaLengthFail(false);
    } else {
      setIsTextAreaLengthFail(true);
    }
  };

  useEffect(() => {
    if (
      data.limitTime.split(' ')[1].split(':')[0] > 12 &&
      data.limitTime.split(' ')[1].split(':')[0] !== ''
    ) {
      setNowTime({
        hour: data.limitTime.split(' ')[1].split(':')[0] - 12,
        minute: data.limitTime.split(' ')[1].split(':')[1],
      });
      setToggle(true);
    } else {
      setNowTime({
        hour: data.limitTime.split(' ')[1].split(':')[0],
        minute: data.limitTime.split(' ')[1].split(':')[1],
      });
      setToggle(false);
    }
  }, []);

  // 에러메세지 유효성검사

  useEffect(() => {
    if (toggle === true) {
      if (nowTime.minute.length === 1) {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          (Number(nowTime.hour) + 12) +
          ':' +
          '0' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            (Number(nowTime.hour) + 12) +
            ':' +
            '0' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      } else {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          (Number(nowTime.hour) + 12) +
          ':' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            (Number(nowTime.hour) + 12) +
            ':' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      }
    } else if (
      toggle === false &&
      (data.limitTime.split(' ')[1].split(':')[0].length === 1 ||
        data.limitTime.split(' ')[1].split(':')[0] === '')
    ) {
      if (nowTime.minute.length === 1) {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          '0' +
          nowTime.hour +
          ':' +
          '0' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            '0' +
            nowTime.hour +
            ':' +
            '0' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      } else {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          '0' +
          nowTime.hour +
          ':' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            '0' +
            nowTime.hour +
            ':' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      }
    } else if (
      toggle === false &&
      data.limitTime.split(' ')[1].split(':')[0].length === 2 &&
      data.limitTime.split(' ')[1].split(':')[0] > 12 &&
      data.limitTime.split(' ')[1].split(':')[0] < 22
    ) {
      if (nowTime.minute.length === 1) {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          '0' +
          nowTime.hour +
          ':' +
          '0' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            '0' +
            nowTime.hour +
            ':' +
            '0' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      } else {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          '0' +
          nowTime.hour +
          ':' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            '0' +
            nowTime.hour +
            ':' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      }
    } else if (
      toggle === false &&
      data.limitTime.split(' ')[1].split(':')[0].length === 2 &&
      nowTime.hour < 12
    ) {
      if (nowTime.minute.length === 1) {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          nowTime.hour +
          ':' +
          '0' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            nowTime.hour +
            ':' +
            '0' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      } else {
        const dateString =
          year +
          '-' +
          month +
          '-' +
          day +
          ' ' +
          nowTime.hour +
          ':' +
          nowTime.minute +
          ':' +
          '00';

        if (parseInt(new Date(dateString) - new Date()) < 0) {
          const reChangeDate = new Date(dateString);
          const plusDate = new Date(
            reChangeDate.setDate(reChangeDate.getDate() + 1)
          );
          const plusYear = plusDate.getFullYear();
          const plusMonth = ('0' + (plusDate.getMonth() + 1)).slice(-2);
          const plusDay = ('0' + plusDate.getDate()).slice(-2);

          const plusDateString =
            plusYear +
            '-' +
            plusMonth +
            '-' +
            plusDay +
            ' ' +
            nowTime.hour +
            ':' +
            nowTime.minute +
            ':' +
            '00';

          setData({
            ...data,
            limitTime: plusDateString,
          });
        } else {
          setData({
            ...data,
            limitTime: dateString,
          });
        }
      }
    }
  }, [nowTime.hour, toggle, nowTime.minute]);

  // FistTime
  useEffect(() => {
    if (nowTime.hour === '' && isSecondChecked) {
      setIsFistTimeFail(true);
    } else {
      setIsFistTimeFail(false);
    }
  }, [nowTime.hour, isSecondChecked]);

  // SecondTime
  useEffect(() => {
    if (nowTime.minute === '' && isSecondChecked) {
      setIsSecondTimeFail(true);
    } else {
      setIsSecondTimeFail(false);
    }
  }, [nowTime.minute, isSecondChecked]);

  // Content
  useEffect(() => {
    if (data.content === '' && isSecondChecked) {
      setIsTextAreaFail(true);
    } else {
      setIsTextAreaFail(false);
    }
  }, [data.content, isSecondChecked]);

  // NextStepTwo
  useEffect(() => {
    if (
      nowTime.hour !== '' &&
      nowTime.minute !== '' &&
      data.content !== '' &&
      isTextAreaFail === false
    ) {
      setNextStepTwo(true);
    } else {
      setNextStepTwo(false);
    }
    // eslint-disable-next-line
  }, [nowTime.hour, nowTime.minute, data.content]);

  return (
    <ModifyST.StepTwoBox>
      <ModifyST.StepOneHeader>
        <div>
          <ModifyST.StepOneTitle>Step 2.</ModifyST.StepOneTitle>
        </div>
        <ModifyST.StepOneContent>
          배프와의 만남에 대한 정보를 입력해주세요.
        </ModifyST.StepOneContent>
      </ModifyST.StepOneHeader>

      <ModifyST.MenuBox>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='20' height='20' rx='4' fill='white' />
          <g mask='url(#mask0_1649_2271)'>
            <path
              d='M14.7727 11.6145C14.5795 11.6145 14.4177 11.547 14.2873 11.412C14.1564 11.2775 14.0909 11.1106 14.0909 10.9114V9.50513H12.7273C12.5341 9.50513 12.3723 9.43763 12.2418 9.30263C12.1109 9.1681 12.0455 9.00122 12.0455 8.802C12.0455 8.60278 12.1109 8.43567 12.2418 8.30067C12.3723 8.16614 12.5341 8.09888 12.7273 8.09888H14.0909V6.69263C14.0909 6.49341 14.1564 6.3263 14.2873 6.1913C14.4177 6.05677 14.5795 5.9895 14.7727 5.9895C14.9659 5.9895 15.1277 6.05677 15.2582 6.1913C15.3891 6.3263 15.4545 6.49341 15.4545 6.69263V8.09888H16.8182C17.0114 8.09888 17.1732 8.16614 17.3036 8.30067C17.4345 8.43567 17.5 8.60278 17.5 8.802C17.5 9.00122 17.4345 9.1681 17.3036 9.30263C17.1732 9.43763 17.0114 9.50513 16.8182 9.50513H15.4545V10.9114C15.4545 11.1106 15.3891 11.2775 15.2582 11.412C15.1277 11.547 14.9659 11.6145 14.7727 11.6145ZM7.95455 10.2083C7.20455 10.2083 6.5625 9.93286 6.02841 9.38208C5.49432 8.8313 5.22727 8.16919 5.22727 7.39575C5.22727 6.62231 5.49432 5.96021 6.02841 5.40942C6.5625 4.85864 7.20455 4.58325 7.95455 4.58325C8.70455 4.58325 9.34659 4.85864 9.88068 5.40942C10.4148 5.96021 10.6818 6.62231 10.6818 7.39575C10.6818 8.16919 10.4148 8.8313 9.88068 9.38208C9.34659 9.93286 8.70455 10.2083 7.95455 10.2083ZM3.18182 15.8333C2.98864 15.8333 2.82682 15.7658 2.69636 15.6308C2.56545 15.4962 2.5 15.3293 2.5 15.1301V13.8645C2.5 13.4661 2.59955 13.0997 2.79864 12.7655C2.99727 12.4318 3.26136 12.177 3.59091 12.0012C4.29545 11.6379 5.01136 11.3654 5.73864 11.1835C6.46591 11.0021 7.20455 10.9114 7.95455 10.9114C8.70455 10.9114 9.44318 11.0021 10.1705 11.1835C10.8977 11.3654 11.6136 11.6379 12.3182 12.0012C12.6477 12.177 12.9118 12.4318 13.1105 12.7655C13.3095 13.0997 13.4091 13.4661 13.4091 13.8645V15.1301C13.4091 15.3293 13.3436 15.4962 13.2127 15.6308C13.0823 15.7658 12.9205 15.8333 12.7273 15.8333H3.18182Z'
              fill='#FFEAB5'
            />
          </g>
        </svg>

        <ModifyST.BlurMenuTitle>함께 할 인원</ModifyST.BlurMenuTitle>
      </ModifyST.MenuBox>
      <ModifyST.SelectBox>
        <ModifyST.SelectInput>
          <ModifyST.SelectValue>{data.maxCapacity} 명</ModifyST.SelectValue>
        </ModifyST.SelectInput>
      </ModifyST.SelectBox>

      <div>
        <ModifyST.MenuBox>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='20' height='20' rx='4' fill='white' />
            <g mask='url(#mask0_1649_2277)'>
              <path
                d='M9.99084 17.0833C9.07509 17.0833 8.21746 16.9137 7.41795 16.5747C6.61795 16.2352 5.92198 15.7766 5.33004 15.199C4.73761 14.6218 4.26728 13.9433 3.91905 13.1633C3.57131 12.3837 3.39744 11.5475 3.39744 10.6547C3.39744 9.76182 3.57131 8.9254 3.91905 8.1454C4.26728 7.36587 4.73761 6.6873 5.33004 6.10968C5.92198 5.53254 6.61795 5.07444 7.41795 4.73539C8.21746 4.39587 9.07509 4.22611 9.99084 4.22611C10.9066 4.22611 11.7645 4.39587 12.5645 4.73539C13.364 5.07444 14.06 5.53254 14.6524 6.10968C15.2443 6.6873 15.7144 7.36587 16.0626 8.1454C16.4104 8.9254 16.5842 9.76182 16.5842 10.6547C16.5842 11.5475 16.4104 12.3837 16.0626 13.1633C15.7144 13.9433 15.2443 14.6218 14.6524 15.199C14.06 15.7766 13.364 16.2352 12.5645 16.5747C11.7645 16.9137 10.9066 17.0833 9.99084 17.0833ZM9.25824 7.79754V10.6368C9.25824 10.7321 9.27656 10.8242 9.31319 10.9133C9.34982 11.0028 9.40476 11.0833 9.47802 11.1547L11.5476 13.1725C11.6819 13.3035 11.8468 13.369 12.0421 13.369C12.2375 13.369 12.4084 13.2975 12.5549 13.1547C12.6893 13.0237 12.7564 12.8571 12.7564 12.6547C12.7564 12.4523 12.6893 12.2856 12.5549 12.1547L10.7234 10.369V7.77968C10.7234 7.5773 10.6534 7.41063 10.5132 7.27968C10.3725 7.14873 10.1984 7.08325 9.99084 7.08325C9.78327 7.08325 9.6094 7.15159 9.46923 7.28825C9.32857 7.4254 9.25824 7.59516 9.25824 7.79754ZM3.70879 6.60111C3.57448 6.73206 3.40965 6.79754 3.21429 6.79754C3.01893 6.79754 2.84799 6.72611 2.70147 6.58325C2.56716 6.4523 2.5 6.28563 2.5 6.08325C2.5 5.88087 2.56716 5.7142 2.70147 5.58325L4.80769 3.52968C4.942 3.39873 5.10684 3.33325 5.3022 3.33325C5.49756 3.33325 5.6685 3.40468 5.81502 3.54754C5.94933 3.67849 6.01648 3.84516 6.01648 4.04754C6.01648 4.24992 5.94933 4.41659 5.81502 4.54754L3.70879 6.60111ZM16.2546 6.58325L14.1484 4.52968C14.014 4.39873 13.9469 4.23801 13.9469 4.04754C13.9469 3.85706 14.0201 3.69039 14.1667 3.54754C14.301 3.41659 14.4719 3.35111 14.6795 3.35111C14.8871 3.35111 15.058 3.41659 15.1923 3.54754L17.2985 5.60111C17.4328 5.73206 17.5 5.89278 17.5 6.08325C17.5 6.27373 17.4267 6.4404 17.2802 6.58325C17.1459 6.7142 16.975 6.77968 16.7674 6.77968C16.5598 6.77968 16.3889 6.7142 16.2546 6.58325Z'
                fill='#FFBA09'
              />
            </g>
          </svg>

          <ModifyST.MenuTitle>모집 마감시간</ModifyST.MenuTitle>
        </ModifyST.MenuBox>

        <ModifyST.LimitTimeBox>
          <Toggle
            toggle={toggle}
            setToggle={setToggle}
            data={data}
            nowTime={nowTime}
          />
          <ModifyST.TimeInputBox>
            <ModifyST.TimeInput
              name='hour'
              type='text'
              placeholder='0'
              value={nowTime.hour}
              onChange={newHourHandler}
            />
            <ModifyST.InputText>시</ModifyST.InputText>
          </ModifyST.TimeInputBox>

          <ModifyST.TimeInputBox>
            <ModifyST.TimeInput
              name='minute'
              type='text'
              placeholder='0'
              value={nowTime.minute}
              onChange={newMinnuteHandler}
            />
            <ModifyST.InputText>분</ModifyST.InputText>
          </ModifyST.TimeInputBox>
        </ModifyST.LimitTimeBox>

        {isFistTimeFail || isSecondTimeFail ? (
          <ModifyST.ErrorMsgBox>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g mask='url(#mask0_928_1188)'>
                <path
                  d='M7.00002 7.58329C7.1653 7.58329 7.30394 7.52729 7.41594 7.41529C7.52755 7.30368 7.58335 7.16524 7.58335 6.99996V4.65204C7.58335 4.48676 7.52755 4.35065 7.41594 4.24371C7.30394 4.13676 7.1653 4.08329 7.00002 4.08329C6.83474 4.08329 6.6963 4.1391 6.58469 4.25071C6.47269 4.36271 6.41669 4.50135 6.41669 4.66663V7.01454C6.41669 7.17982 6.47269 7.31593 6.58469 7.42288C6.6963 7.52982 6.83474 7.58329 7.00002 7.58329ZM7.00002 9.91663C7.1653 9.91663 7.30394 9.86063 7.41594 9.74863C7.52755 9.63701 7.58335 9.49857 7.58335 9.33329C7.58335 9.16801 7.52755 9.02938 7.41594 8.91738C7.30394 8.80576 7.1653 8.74996 7.00002 8.74996C6.83474 8.74996 6.6963 8.80576 6.58469 8.91738C6.47269 9.02938 6.41669 9.16801 6.41669 9.33329C6.41669 9.49857 6.47269 9.63701 6.58469 9.74863C6.6963 9.86063 6.83474 9.91663 7.00002 9.91663ZM7.00002 12.8333C6.19308 12.8333 5.43474 12.6801 4.72502 12.3736C4.0153 12.0676 3.39794 11.652 2.87294 11.127C2.34794 10.602 1.93241 9.98468 1.62635 9.27496C1.31991 8.56524 1.16669 7.8069 1.16669 6.99996C1.16669 6.19301 1.31991 5.43468 1.62635 4.72496C1.93241 4.01524 2.34794 3.39788 2.87294 2.87288C3.39794 2.34788 4.0153 1.93215 4.72502 1.62571C5.43474 1.31965 6.19308 1.16663 7.00002 1.16663C7.80696 1.16663 8.5653 1.31965 9.27502 1.62571C9.98474 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8334 6.19301 12.8334 6.99996C12.8334 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98474 12.0676 9.27502 12.3736C8.5653 12.6801 7.80696 12.8333 7.00002 12.8333Z'
                  fill='#FF6651'
                />
              </g>
            </svg>
            <ModifyST.ErrorMsg>필드를 채워주세요!</ModifyST.ErrorMsg>
          </ModifyST.ErrorMsgBox>
        ) : null}
      </div>

      <div>
        <ModifyST.MenuBox>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='20' height='20' rx='4' fill='white' />

            <g mask='url(#mask0_1649_2275)'>
              <path
                d='M11.6477 17.4803C11.4205 17.5313 11.2217 17.4833 11.0515 17.3364C10.8808 17.19 10.7955 16.9892 10.7955 16.7342C10.7955 16.5556 10.8556 16.3931 10.9758 16.2467C11.0955 16.0998 11.2437 16.0008 11.4205 15.9498C11.7361 15.8733 12.0424 15.7743 12.3394 15.6529C12.6359 15.532 12.923 15.3822 13.2008 15.2037C13.3649 15.1016 13.5449 15.0603 13.7409 15.0797C13.9364 15.0986 14.0972 15.1718 14.2235 15.2993C14.4003 15.4779 14.4793 15.682 14.4606 15.9115C14.4414 16.1411 14.3308 16.3197 14.1288 16.4472C13.7374 16.7023 13.3366 16.9127 12.9265 17.0785C12.5159 17.2443 12.0896 17.3782 11.6477 17.4803ZM15.303 14.2089C15.1768 14.0813 15.104 13.9219 15.0848 13.7306C15.0662 13.5393 15.1073 13.3671 15.2083 13.214C15.3725 12.9335 15.5177 12.6465 15.6439 12.3531C15.7702 12.0598 15.8712 11.7473 15.947 11.4157C15.9975 11.2372 16.0985 11.0841 16.25 10.9566C16.4015 10.829 16.5657 10.7653 16.7424 10.7653C16.995 10.7653 17.1939 10.8545 17.3394 11.0331C17.4843 11.2117 17.5253 11.4157 17.4621 11.6453C17.3611 12.1044 17.2253 12.5414 17.0545 12.9562C16.8843 13.3704 16.673 13.7625 16.4205 14.1323C16.2942 14.3236 16.1207 14.4287 15.9 14.4476C15.6788 14.467 15.4798 14.3874 15.303 14.2089ZM16.7235 9.23478C16.5467 9.23478 16.3859 9.17101 16.2409 9.04347C16.0955 8.91593 15.9975 8.76288 15.947 8.58433C15.8712 8.25272 15.7702 7.93693 15.6439 7.63695C15.5177 7.33749 15.3725 7.05384 15.2083 6.786C15.1073 6.63296 15.0662 6.46078 15.0848 6.26946C15.104 6.07815 15.1768 5.91873 15.303 5.79119C15.4798 5.61263 15.6788 5.52973 15.9 5.54248C16.1207 5.55524 16.2942 5.65727 16.4205 5.84858C16.673 6.21845 16.8876 6.61689 17.0644 7.04389C17.2412 7.47141 17.3801 7.90836 17.4811 8.35475C17.5316 8.58433 17.4811 8.78839 17.3295 8.96695C17.178 9.1455 16.976 9.23478 16.7235 9.23478ZM8.44697 17.4611C6.71717 17.053 5.29343 16.1602 4.17576 14.7828C3.05859 13.4054 2.5 11.8111 2.5 10C2.5 8.1762 3.05556 6.56919 4.16667 5.17899C5.27778 3.7888 6.69823 2.9024 8.42803 2.51977C8.6553 2.46876 8.85429 2.51646 9.025 2.66287C9.1952 2.8098 9.2803 3.00443 9.2803 3.24675C9.2803 3.42531 9.2202 3.5878 9.1 3.73421C8.9803 3.88114 8.83207 3.98011 8.6553 4.03113C7.30429 4.36273 6.19318 5.08334 5.32197 6.19294C4.45076 7.30254 4.01515 8.57157 4.01515 10C4.01515 11.4285 4.45076 12.6881 5.32197 13.7788C6.19318 14.869 7.30429 15.5927 8.6553 15.9498C8.83207 16.0008 8.9803 16.1028 9.1 16.2559C9.2202 16.4089 9.2803 16.5747 9.2803 16.7533C9.2803 16.9956 9.19823 17.1869 9.03409 17.3272C8.86995 17.4675 8.67424 17.5122 8.44697 17.4611ZM13.2576 4.8155C12.9672 4.63695 12.6705 4.48058 12.3674 4.34641C12.0644 4.21275 11.7551 4.10765 11.4394 4.03113C11.2626 3.98011 11.1111 3.88114 10.9848 3.73421C10.8586 3.5878 10.7955 3.42531 10.7955 3.24675C10.7955 3.00443 10.8808 2.8098 11.0515 2.66287C11.2217 2.51646 11.4205 2.46876 11.6477 2.51977C12.0896 2.62181 12.5189 2.75572 12.9356 2.92153C13.3523 3.08733 13.7563 3.29777 14.1477 3.55285C14.3497 3.68039 14.4604 3.85895 14.4795 4.08852C14.4982 4.3181 14.4192 4.52216 14.2424 4.70072C14.1162 4.82826 13.9616 4.90478 13.7788 4.93029C13.5955 4.9558 13.4217 4.91754 13.2576 4.8155ZM10.0568 13.5584C9.95581 13.5584 9.86111 13.5423 9.77273 13.5102C9.68434 13.4786 9.60227 13.4309 9.52652 13.3671C8.69318 12.5891 8.06818 11.8621 7.65152 11.1862C7.23485 10.5102 7.02652 9.88524 7.02652 9.31131C7.02652 8.35475 7.33283 7.59283 7.94546 7.02553C8.55758 6.45771 9.26136 6.17381 10.0568 6.17381C10.8523 6.17381 11.5563 6.45771 12.1689 7.02553C12.7811 7.59283 13.0871 8.35475 13.0871 9.31131C13.0871 9.88524 12.8788 10.5102 12.4621 11.1862C12.0455 11.8621 11.4205 12.5891 10.5871 13.3671C10.5114 13.4309 10.4293 13.4786 10.3409 13.5102C10.2525 13.5423 10.1578 13.5584 10.0568 13.5584ZM10.0568 10C10.2841 10 10.4768 9.92044 10.6348 9.76127C10.7924 9.60159 10.8712 9.40696 10.8712 9.17739C10.8712 8.96057 10.7924 8.76926 10.6348 8.60346C10.4768 8.43765 10.2841 8.35475 10.0568 8.35475C9.82955 8.35475 9.63687 8.43765 9.47879 8.60346C9.32121 8.76926 9.24242 8.96057 9.24242 9.17739C9.24242 9.40696 9.32121 9.60159 9.47879 9.76127C9.63687 9.92044 9.82955 10 10.0568 10Z'
                fill='#FFBA09'
              />
            </g>
          </svg>

          <ModifyST.MenuTitle>만나는 장소</ModifyST.MenuTitle>
        </ModifyST.MenuBox>

        <CurrentLocation
          data={data}
          addressManager={addressManager}
          setIndex={setIndex}
        />
      </div>

      <ModifyST.MenuBox>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='20' height='20' rx='4' fill='white' />

          <g mask='url(#mask0_1649_2276)'>
            <path
              d='M11.6477 17.4803C11.4205 17.5313 11.2217 17.4833 11.0515 17.3364C10.8808 17.19 10.7955 16.9892 10.7955 16.7342C10.7955 16.5556 10.8556 16.3931 10.9758 16.2467C11.0955 16.0998 11.2437 16.0008 11.4205 15.9498C11.7361 15.8733 12.0424 15.7743 12.3394 15.6529C12.6359 15.532 12.923 15.3822 13.2008 15.2037C13.3649 15.1016 13.5449 15.0603 13.7409 15.0797C13.9364 15.0986 14.0972 15.1718 14.2235 15.2993C14.4003 15.4779 14.4793 15.682 14.4606 15.9115C14.4414 16.1411 14.3308 16.3197 14.1288 16.4472C13.7374 16.7023 13.3366 16.9127 12.9265 17.0785C12.5159 17.2443 12.0896 17.3782 11.6477 17.4803ZM15.303 14.2089C15.1768 14.0813 15.104 13.9219 15.0848 13.7306C15.0662 13.5393 15.1073 13.3671 15.2083 13.214C15.3725 12.9335 15.5177 12.6465 15.6439 12.3531C15.7702 12.0598 15.8712 11.7473 15.947 11.4157C15.9975 11.2372 16.0985 11.0841 16.25 10.9566C16.4015 10.829 16.5657 10.7653 16.7424 10.7653C16.995 10.7653 17.1939 10.8545 17.3394 11.0331C17.4843 11.2117 17.5253 11.4157 17.4621 11.6453C17.3611 12.1044 17.2253 12.5414 17.0545 12.9562C16.8843 13.3704 16.673 13.7625 16.4205 14.1323C16.2942 14.3236 16.1207 14.4287 15.9 14.4476C15.6788 14.467 15.4798 14.3874 15.303 14.2089ZM16.7235 9.23478C16.5467 9.23478 16.3859 9.17101 16.2409 9.04347C16.0955 8.91593 15.9975 8.76288 15.947 8.58433C15.8712 8.25272 15.7702 7.93693 15.6439 7.63695C15.5177 7.33749 15.3725 7.05384 15.2083 6.786C15.1073 6.63296 15.0662 6.46078 15.0848 6.26946C15.104 6.07815 15.1768 5.91873 15.303 5.79119C15.4798 5.61263 15.6788 5.52973 15.9 5.54248C16.1207 5.55524 16.2942 5.65727 16.4205 5.84858C16.673 6.21845 16.8876 6.61689 17.0644 7.04389C17.2412 7.47141 17.3801 7.90836 17.4811 8.35475C17.5316 8.58433 17.4811 8.78839 17.3295 8.96695C17.178 9.1455 16.976 9.23478 16.7235 9.23478ZM8.44697 17.4611C6.71717 17.053 5.29343 16.1602 4.17576 14.7828C3.05859 13.4054 2.5 11.8111 2.5 10C2.5 8.1762 3.05556 6.56919 4.16667 5.17899C5.27778 3.7888 6.69823 2.9024 8.42803 2.51977C8.6553 2.46876 8.85429 2.51646 9.025 2.66287C9.1952 2.8098 9.2803 3.00443 9.2803 3.24675C9.2803 3.42531 9.2202 3.5878 9.1 3.73421C8.9803 3.88114 8.83207 3.98011 8.6553 4.03113C7.30429 4.36273 6.19318 5.08334 5.32197 6.19294C4.45076 7.30254 4.01515 8.57157 4.01515 10C4.01515 11.4285 4.45076 12.6881 5.32197 13.7788C6.19318 14.869 7.30429 15.5927 8.6553 15.9498C8.83207 16.0008 8.9803 16.1028 9.1 16.2559C9.2202 16.4089 9.2803 16.5747 9.2803 16.7533C9.2803 16.9956 9.19823 17.1869 9.03409 17.3272C8.86995 17.4675 8.67424 17.5122 8.44697 17.4611ZM13.2576 4.8155C12.9672 4.63695 12.6705 4.48058 12.3674 4.34641C12.0644 4.21275 11.7551 4.10765 11.4394 4.03113C11.2626 3.98011 11.1111 3.88114 10.9848 3.73421C10.8586 3.5878 10.7955 3.42531 10.7955 3.24675C10.7955 3.00443 10.8808 2.8098 11.0515 2.66287C11.2217 2.51646 11.4205 2.46876 11.6477 2.51977C12.0896 2.62181 12.5189 2.75572 12.9356 2.92153C13.3523 3.08733 13.7563 3.29777 14.1477 3.55285C14.3497 3.68039 14.4604 3.85895 14.4795 4.08852C14.4982 4.3181 14.4192 4.52216 14.2424 4.70072C14.1162 4.82826 13.9616 4.90478 13.7788 4.93029C13.5955 4.9558 13.4217 4.91754 13.2576 4.8155ZM10.0568 13.5584C9.95581 13.5584 9.86111 13.5423 9.77273 13.5102C9.68434 13.4786 9.60227 13.4309 9.52652 13.3671C8.69318 12.5891 8.06818 11.8621 7.65152 11.1862C7.23485 10.5102 7.02652 9.88524 7.02652 9.31131C7.02652 8.35475 7.33283 7.59283 7.94546 7.02553C8.55758 6.45771 9.26136 6.17381 10.0568 6.17381C10.8523 6.17381 11.5563 6.45771 12.1689 7.02553C12.7811 7.59283 13.0871 8.35475 13.0871 9.31131C13.0871 9.88524 12.8788 10.5102 12.4621 11.1862C12.0455 11.8621 11.4205 12.5891 10.5871 13.3671C10.5114 13.4309 10.4293 13.4786 10.3409 13.5102C10.2525 13.5423 10.1578 13.5584 10.0568 13.5584ZM10.0568 10C10.2841 10 10.4768 9.92044 10.6348 9.76127C10.7924 9.60159 10.8712 9.40696 10.8712 9.17739C10.8712 8.96057 10.7924 8.76926 10.6348 8.60346C10.4768 8.43765 10.2841 8.35475 10.0568 8.35475C9.82955 8.35475 9.63687 8.43765 9.47879 8.60346C9.32121 8.76926 9.24242 8.96057 9.24242 9.17739C9.24242 9.40696 9.32121 9.60159 9.47879 9.76127C9.63687 9.92044 9.82955 10 10.0568 10Z'
              fill='#FFBA09'
            />
          </g>
        </svg>

        <ModifyST.MenuTitle>전달하고 싶은 메세지</ModifyST.MenuTitle>
      </ModifyST.MenuBox>

      <div>
        <ModifyST.TextArea
          name='content'
          value={data.content}
          onChange={textAreaHandler}
          isTextAreaFail={isTextAreaFail}
        />
      </div>

      {isTextAreaFail ? (
        <ModifyST.ErrorMsgBox>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_928_1188)'>
              <path
                d='M7.00002 7.58329C7.1653 7.58329 7.30394 7.52729 7.41594 7.41529C7.52755 7.30368 7.58335 7.16524 7.58335 6.99996V4.65204C7.58335 4.48676 7.52755 4.35065 7.41594 4.24371C7.30394 4.13676 7.1653 4.08329 7.00002 4.08329C6.83474 4.08329 6.6963 4.1391 6.58469 4.25071C6.47269 4.36271 6.41669 4.50135 6.41669 4.66663V7.01454C6.41669 7.17982 6.47269 7.31593 6.58469 7.42288C6.6963 7.52982 6.83474 7.58329 7.00002 7.58329ZM7.00002 9.91663C7.1653 9.91663 7.30394 9.86063 7.41594 9.74863C7.52755 9.63701 7.58335 9.49857 7.58335 9.33329C7.58335 9.16801 7.52755 9.02938 7.41594 8.91738C7.30394 8.80576 7.1653 8.74996 7.00002 8.74996C6.83474 8.74996 6.6963 8.80576 6.58469 8.91738C6.47269 9.02938 6.41669 9.16801 6.41669 9.33329C6.41669 9.49857 6.47269 9.63701 6.58469 9.74863C6.6963 9.86063 6.83474 9.91663 7.00002 9.91663ZM7.00002 12.8333C6.19308 12.8333 5.43474 12.6801 4.72502 12.3736C4.0153 12.0676 3.39794 11.652 2.87294 11.127C2.34794 10.602 1.93241 9.98468 1.62635 9.27496C1.31991 8.56524 1.16669 7.8069 1.16669 6.99996C1.16669 6.19301 1.31991 5.43468 1.62635 4.72496C1.93241 4.01524 2.34794 3.39788 2.87294 2.87288C3.39794 2.34788 4.0153 1.93215 4.72502 1.62571C5.43474 1.31965 6.19308 1.16663 7.00002 1.16663C7.80696 1.16663 8.5653 1.31965 9.27502 1.62571C9.98474 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8334 6.19301 12.8334 6.99996C12.8334 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98474 12.0676 9.27502 12.3736C8.5653 12.6801 7.80696 12.8333 7.00002 12.8333Z'
                fill='#FF6651'
              />
            </g>
          </svg>
          <ModifyST.ErrorMsg>필드를 채워주세요!</ModifyST.ErrorMsg>
        </ModifyST.ErrorMsgBox>
      ) : null}

      {isTextAreaLengthFail ? (
        <ModifyST.ErrorMsgBox>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_928_1188)'>
              <path
                d='M7.00002 7.58329C7.1653 7.58329 7.30394 7.52729 7.41594 7.41529C7.52755 7.30368 7.58335 7.16524 7.58335 6.99996V4.65204C7.58335 4.48676 7.52755 4.35065 7.41594 4.24371C7.30394 4.13676 7.1653 4.08329 7.00002 4.08329C6.83474 4.08329 6.6963 4.1391 6.58469 4.25071C6.47269 4.36271 6.41669 4.50135 6.41669 4.66663V7.01454C6.41669 7.17982 6.47269 7.31593 6.58469 7.42288C6.6963 7.52982 6.83474 7.58329 7.00002 7.58329ZM7.00002 9.91663C7.1653 9.91663 7.30394 9.86063 7.41594 9.74863C7.52755 9.63701 7.58335 9.49857 7.58335 9.33329C7.58335 9.16801 7.52755 9.02938 7.41594 8.91738C7.30394 8.80576 7.1653 8.74996 7.00002 8.74996C6.83474 8.74996 6.6963 8.80576 6.58469 8.91738C6.47269 9.02938 6.41669 9.16801 6.41669 9.33329C6.41669 9.49857 6.47269 9.63701 6.58469 9.74863C6.6963 9.86063 6.83474 9.91663 7.00002 9.91663ZM7.00002 12.8333C6.19308 12.8333 5.43474 12.6801 4.72502 12.3736C4.0153 12.0676 3.39794 11.652 2.87294 11.127C2.34794 10.602 1.93241 9.98468 1.62635 9.27496C1.31991 8.56524 1.16669 7.8069 1.16669 6.99996C1.16669 6.19301 1.31991 5.43468 1.62635 4.72496C1.93241 4.01524 2.34794 3.39788 2.87294 2.87288C3.39794 2.34788 4.0153 1.93215 4.72502 1.62571C5.43474 1.31965 6.19308 1.16663 7.00002 1.16663C7.80696 1.16663 8.5653 1.31965 9.27502 1.62571C9.98474 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8334 6.19301 12.8334 6.99996C12.8334 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98474 12.0676 9.27502 12.3736C8.5653 12.6801 7.80696 12.8333 7.00002 12.8333Z'
                fill='#FF6651'
              />
            </g>
          </svg>
          <ModifyST.ErrorMsg>40글자가 초과하였습니다!</ModifyST.ErrorMsg>
        </ModifyST.ErrorMsgBox>
      ) : null}
    </ModifyST.StepTwoBox>
  );
};

export default ModifySTepTwo;
