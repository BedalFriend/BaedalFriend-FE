import React, { useEffect, useState } from 'react';

import { Toggle } from './toggle/Toggle';
import CurrentLocation from './currentLocation/CurrentLocation';

import * as UploadST from '../../../modify/UploadPageStyle';

import Party from '../../../../imgs/upload/Party.png';
import Time from '../../../../imgs/upload/Party.png';
import MeetingLoca from '../../../../imgs/upload/MeetingLoca.png';
import Select from '../../../../components/select/Select';

const UploadStepTwo = ({
  data,
  setData,
  setIndex,
  addressManager,
  isSecondChecked,
  setNextStepTwo,
  setPeople,
  people,
  setTime,
  time,
  toggle,
  setToggle,
}) => {
  // AM PM 토글 관리
  const [isTime, setIsTime] = useState('PM');

  // Select
  const optionData = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

  const [currentValue, setCurrentValue] = useState(people.maxCapacity);

  const [showOptions, setShowOptions] = useState(false);

  // isFail === false 일때 error 메세지 숨김
  const [isMaxCapacityFail, setIsMaxCapacityFail] = useState(false);
  const [isFistTimeFail, setIsFistTimeFail] = useState(false);
  const [isSecondTimeFail, setIsSecondTimeFail] = useState(false);
  const [isGatherNameFail, setIsGatherNameFail] = useState(false);

  // LimitTime
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const [nowTime, setNowTime] = useState({
    hour: time.hour,
    minute: time.minute,
  });

  const newHourHandler = (e) => {
    console.log(e.target.value);
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

  useEffect(() => {
    console.log('isTime', isTime);

    if (isTime === 'AM') {
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

        console.log('시간 바뀐다');
        setData({
          ...data,
          limitTime: dateString,
          maxCapacity: Number(currentValue) + 1,
        });
        setTime({ hour: nowTime.hour, minute: nowTime.minute });
        setPeople({ maxCapacity: Number(currentValue) });
      } else {
        console.log('여기왜들어오냐');
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

        setData({
          ...data,
          limitTime: dateString,
          maxCapacity: Number(currentValue) + 1,
        });
        setTime({ hour: nowTime.hour, minute: nowTime.minute });
        setPeople({ maxCapacity: Number(currentValue) });
      }
    } else if (
      (isTime === 'PM' && nowTime.hour.length === 1) ||
      nowTime.hour === ''
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

        console.log('시간 바뀐다');
        setData({
          ...data,
          limitTime: dateString,
          maxCapacity: Number(currentValue) + 1,
        });
        setTime({ hour: nowTime.hour, minute: nowTime.minute });
        setPeople({ maxCapacity: Number(currentValue) });
      } else {
        console.log('여기왜들어오냐');
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

        setData({
          ...data,
          limitTime: dateString,
          maxCapacity: Number(currentValue) + 1,
        });
        setTime({ hour: nowTime.hour, minute: nowTime.minute });
        setPeople({ maxCapacity: Number(currentValue) });
      }
    } else if (isTime === 'PM' && nowTime.hour.length === 2) {
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

        console.log('시간 바뀐다');
        setData({
          ...data,
          limitTime: dateString,
          maxCapacity: Number(currentValue) + 1,
        });
        setTime({ hour: nowTime.hour, minute: nowTime.minute });
        setPeople({ maxCapacity: Number(currentValue) });
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

        setData({
          ...data,
          limitTime: dateString,
          maxCapacity: Number(currentValue) + 1,
        });
        setTime({ hour: nowTime.hour, minute: nowTime.minute });
        setPeople({ maxCapacity: Number(currentValue) });
      }
    } else return;
    console.log('여기어떄');
  }, [nowTime.hour, isTime, nowTime.minute, currentValue, data.gatherName]);

  // 에러메세지 유효성검사

  // MaxCapacity
  useEffect(() => {
    if (data.maxCapacity === 1 && isSecondChecked) {
      setIsMaxCapacityFail(true);
    } else {
      setIsMaxCapacityFail(false);
    }
  }, [data.maxCapacity, isSecondChecked]);

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

  useEffect(() => {
    if (data.gatherName === '' && isSecondChecked) {
      setIsGatherNameFail(true);
    } else {
      setIsGatherNameFail(false);
    }
  }, [data.gatherName, isSecondChecked]);

  // NextStepTwo
  useEffect(() => {
    if (
      isMaxCapacityFail === false &&
      isGatherNameFail === false &&
      nowTime.hour !== '' &&
      nowTime.minute !== '' &&
      data.maxCapacity !== 0 &&
      data.gatherName !== ''
    ) {
      setNextStepTwo(true);
    } else {
      setNextStepTwo(false);
    }
    // eslint-disable-next-line
  }, [isMaxCapacityFail, data.maxCapacity, nowTime.hour, nowTime.minute]);

  useEffect(() => {}, []);
  return (
    <UploadST.StepTwoBox>
      <UploadST.StepOneHeader>
        <div>
          <UploadST.StepOneTitle>Step 2.</UploadST.StepOneTitle>
        </div>
        <UploadST.StepOneContent>
          배프와의 만남에 대한 정보를 입력해주세요.
        </UploadST.StepOneContent>
      </UploadST.StepOneHeader>

      <UploadST.MenuBox>
        <img src={Party} style={{ width: '20px', height: '20px' }} alt='' />
        <UploadST.MenuTitle>함께 할 인원</UploadST.MenuTitle>
      </UploadST.MenuBox>
      <UploadST.SelectBox>
        <UploadST.SelectInput
          isMaxCapacityFail={isMaxCapacityFail}
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <UploadST.SelectValue>{people.maxCapacity} 명</UploadST.SelectValue>
        </UploadST.SelectInput>
        <Select
          width='152px'
          left='0px'
          top='45px'
          optionData={optionData}
          setCurrentValue={setCurrentValue}
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
      </UploadST.SelectBox>

      {isMaxCapacityFail ? (
        <UploadST.ErrorMsgBox>
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
          <UploadST.ErrorMsg>필드를 채워주세요!</UploadST.ErrorMsg>
        </UploadST.ErrorMsgBox>
      ) : null}

      <div>
        <UploadST.MenuBox>
          <img src={Time} style={{ width: '20px', height: '20px' }} alt='' />
          <UploadST.MenuTitle>모집 마감시간</UploadST.MenuTitle>
        </UploadST.MenuBox>

        <UploadST.LimitTimeBox>
          <Toggle
            toggle={toggle}
            setToggle={setToggle}
            data={data}
            setIsTime={setIsTime}
          />
          <UploadST.TimeInputBox isFistTimeFail={isFistTimeFail}>
            <UploadST.TimeInput
              name='hour'
              type='text'
              placeholder='0'
              value={time.hour}
              onChange={newHourHandler}
            />
            <UploadST.InputText>시</UploadST.InputText>
          </UploadST.TimeInputBox>

          <UploadST.TimeInputBox isSecondTimeFail={isSecondTimeFail}>
            <UploadST.TimeInput
              name='minute'
              type='text'
              placeholder='0'
              value={time.minute}
              onChange={newMinnuteHandler}
            />
            <UploadST.InputText>분</UploadST.InputText>
          </UploadST.TimeInputBox>
        </UploadST.LimitTimeBox>

        {isFistTimeFail || isSecondTimeFail ? (
          <UploadST.ErrorMsgBox>
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
            <UploadST.ErrorMsg>필드를 채워주세요!</UploadST.ErrorMsg>
          </UploadST.ErrorMsgBox>
        ) : null}
      </div>

      <UploadST.MenuBox>
        <img
          src={MeetingLoca}
          style={{ width: '20px', height: '20px' }}
          alt=''
        />
        <UploadST.MenuTitle>만나는 장소</UploadST.MenuTitle>
      </UploadST.MenuBox>

      <div
        onClick={() => {
          setIndex(4);
        }}
      >
        <CurrentLocation
          data={data}
          addressManager={addressManager}
          isGatherNameFail={isGatherNameFail}
          setIsGatherNameFail={setIsGatherNameFail}
        />
      </div>
    </UploadST.StepTwoBox>
  );
};

export default UploadStepTwo;
