import React, { useEffect, useState } from 'react';

import { Toggle } from './toggle/Toggle';
import CurrentLocation from './currentLocation/CurrentLocation';

import * as UploadST from '../../UploadPageStyle';

import Party from '../../../../imgs/upload/Party.png';
import Time from '../../../../imgs/upload/Party.png';
import MeetingLoca from '../../../../imgs/upload/MeetingLoca.png';
import Select from '../../../../components/select/Select';

const UploadStepTwo = ({
  data,
  setData,
  setIndex,
  addressManager,
  lengthLimit,
  isSecondChecked,
  setNextStepTwo,
}) => {
  const [isTime, setIsTime] = useState('PM');

  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const [nowTime, setNowTime] = useState({
    hour: '00',
    minute: '00',
  });

  // isFail === false 일때 error 메세지 숨김
  const [isParticipantNumberFail, setIsParticipantNumberFail] = useState(false);
  const [isFistTimeFail, setIsFistTimeFail] = useState(false);
  const [isSecondTimeFail, setIsSecondTimeFail] = useState(false);
  const [isGatherNameFail, setIsGatherNameFail] = useState(false);

  const newDateHandler = (e) => {
    const { value, name } = e.target;
    setNowTime({ ...nowTime, [name]: value });
  };

  const optionData = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  const [currentValue, setCurrentValue] = useState(data.participantNumber);

  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (isTime === 'AM') {
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
        participantNumber: Number(currentValue),
      });
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
        participantNumber: Number(currentValue),
      });
    }
  }, [nowTime, isTime, currentValue]);

  // ParticipantNumber
  useEffect(() => {
    if (data.participantNumber === 0 && isSecondChecked) {
      setIsParticipantNumberFail(true);
    } else {
      setIsParticipantNumberFail(false);
    }
  }, [data.participantNumber, isSecondChecked]);

  // FistTime
  useEffect(() => {
    if (nowTime.hour === '00' && isSecondChecked) {
      setIsFistTimeFail(true);
    } else {
      setIsFistTimeFail(false);
    }
  }, [nowTime.hour, isSecondChecked]);

  // SecondTime
  useEffect(() => {
    if (nowTime.minute === '00' && isSecondChecked) {
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
      isParticipantNumberFail === false &&
      isGatherNameFail === false &&
      data.participantNumber !== 0 &&
      data.gatherName !== ''
    ) {
      setNextStepTwo(true);
    } else {
      setNextStepTwo(false);
    }
    // eslint-disable-next-line
  }, [isParticipantNumberFail, data.participantNumber]);

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
        <UploadST.SelectInput onClick={() => setShowOptions((prev) => !prev)}>
          <UploadST.SelectValue>
            {data.participantNumber} 명
          </UploadST.SelectValue>
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

      {isParticipantNumberFail ? (
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
          <Toggle setIsTime={setIsTime} />
          <UploadST.TimeInputBox>
            <UploadST.TimeInput
              name='hour'
              type='number'
              min='1'
              max='12'
              value={nowTime.hour}
              onChange={newDateHandler}
              onInput={lengthLimit}
            />
            <UploadST.InputText>시</UploadST.InputText>
          </UploadST.TimeInputBox>

          <UploadST.TimeInputBox>
            <UploadST.TimeInput
              name='minute'
              type='number'
              min='0'
              max='59'
              value={nowTime.minute}
              onChange={newDateHandler}
              onInput={lengthLimit}
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
