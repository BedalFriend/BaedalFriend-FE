import React, { useEffect, useState } from 'react';

import { Toggle } from './toggle/Toggle';
import CurrentLocation from './currentLocation/CurrentLocation';

import * as UploadST from '../../../upload/UploadStyle';

import Select from '../../../../components/select/Select';
import SampleMap from '../../../../imgs/upload/SampleMap.png';
import MapFrame from '../../../../imgs/upload/Frame 48.png';
import OrangeMapMarker from '../../../../imgs/upload/Orange_Map_Marker.png';
import styled from 'styled-components';

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
  const [isTextAreaFail, setIsTextAreaFail] = useState(false);
  const [isTextAreaLengthFail, setIsTextAreaLengthFail] = useState(false);

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
    const text_line = value.split('\n').length;

    const max_length = 40;

    if (text_length < max_length && text_line < 3) {
      setData({ ...data, [name]: value });
      setIsTextAreaLengthFail(false);
    } else {
      setIsTextAreaLengthFail(true);
    }
  };

  useEffect(() => {
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
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        } else {
          setData({
            ...data,
            limitTime: dateString,
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
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
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        } else {
          setData({
            ...data,
            limitTime: dateString,
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        }
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
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        } else {
          setData({
            ...data,
            limitTime: dateString,
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
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
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        } else {
          setData({
            ...data,
            limitTime: dateString,
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        }
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
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        } else {
          setData({
            ...data,
            limitTime: dateString,
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
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
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        } else {
          setData({
            ...data,
            limitTime: dateString,
            maxCapacity: Number(currentValue) + 1,
          });
          setTime({ hour: nowTime.hour, minute: nowTime.minute });
          setPeople({ maxCapacity: Number(currentValue) });
        }
      }
    } else return;
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
      isMaxCapacityFail === false &&
      isGatherNameFail === false &&
      isTextAreaFail === false &&
      nowTime.hour !== '' &&
      nowTime.minute !== '' &&
      data.maxCapacity !== 0 &&
      data.gatherName !== '' &&
      data.content !== ''
    ) {
      setNextStepTwo(true);
    } else {
      setNextStepTwo(false);
    }
    // eslint-disable-next-line
  }, [
    isMaxCapacityFail,
    data.maxCapacity,
    data.content,
    nowTime.hour,
    nowTime.minute,
  ]);

  useEffect(() => {}, []);
  return (
    <UploadST.StepTwoBox>
      <UploadST.StepOneHeader>
        <svg
          width='61'
          height='19'
          viewBox='0 0 61 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.42 14.38C4.82 14.38 4.27333 14.3067 3.78 14.16C3.3 14.0133 2.87333 13.8267 2.5 13.6C2.14 13.3733 1.83333 13.14 1.58 12.9C1.32667 12.66 1.14 12.44 1.02 12.24C0.846667 12 0.733333 11.7867 0.68 11.6C0.626667 11.4133 0.64 11.2333 0.72 11.06C0.813333 10.8733 0.98 10.68 1.22 10.48C1.46 10.2667 1.68 10.16 1.88 10.16C2.09333 10.1467 2.29333 10.2067 2.48 10.34C2.68 10.4733 2.87333 10.66 3.06 10.9C3.38 11.3267 3.74 11.6333 4.14 11.82C4.54 11.9933 4.94 12.08 5.34 12.08C5.86 12.08 6.31333 12.0133 6.7 11.88C7.08667 11.7333 7.38667 11.52 7.6 11.24C7.82667 10.96 7.94 10.6 7.94 10.16C7.94 9.8 7.82667 9.50667 7.6 9.28C7.38667 9.04 7.1 8.84 6.74 8.68C6.38 8.50667 5.97333 8.35333 5.52 8.22C5.08 8.07333 4.63333 7.91333 4.18 7.74C3.86 7.63333 3.54 7.50667 3.22 7.36C2.9 7.2 2.6 7.02 2.32 6.82C2.05333 6.62 1.81333 6.38667 1.6 6.12C1.4 5.84 1.24 5.52 1.12 5.16C1 4.8 0.94 4.38 0.94 3.9C0.94 3.14 1.12667 2.47333 1.5 1.9C1.87333 1.31333 2.39333 0.853333 3.06 0.52C3.72667 0.173333 4.48667 -9.53674e-07 5.34 -9.53674e-07C5.88667 -9.53674e-07 6.37333 0.0533325 6.8 0.159999C7.24 0.253332 7.61333 0.379999 7.92 0.539999C8.24 0.686666 8.5 0.839999 8.7 0.999999C8.91333 1.14667 9.06667 1.27333 9.16 1.38C9.46667 1.68667 9.63333 1.94667 9.66 2.16C9.7 2.36 9.58 2.63333 9.3 2.98C9.02 3.34 8.74667 3.54 8.48 3.58C8.22667 3.60667 7.94 3.5 7.62 3.26C7.40667 3.03333 7.19333 2.85333 6.98 2.72C6.76667 2.57333 6.52667 2.46667 6.26 2.4C6.00667 2.33333 5.69333 2.3 5.32 2.3C5.05333 2.3 4.79333 2.34 4.54 2.42C4.3 2.48667 4.09333 2.59333 3.92 2.74C3.74667 2.87333 3.60667 3.04 3.5 3.24C3.40667 3.44 3.36 3.66667 3.36 3.92C3.36 4.26667 3.45333 4.55333 3.64 4.78C3.84 4.99333 4.10667 5.17333 4.44 5.32C4.77333 5.45333 5.14667 5.58 5.56 5.7C5.97333 5.82 6.39333 5.94667 6.82 6.08C7.26 6.22667 7.69333 6.4 8.12 6.6C8.54667 6.8 8.92667 7.05333 9.26 7.36C9.59333 7.65333 9.86 8.02667 10.06 8.48C10.26 8.92 10.36 9.46 10.36 10.1C10.36 10.8333 10.22 11.4733 9.94 12.02C9.66 12.5667 9.28 13.0133 8.8 13.36C8.32 13.7067 7.78667 13.96 7.2 14.12C6.61333 14.2933 6.02 14.38 5.42 14.38ZM16.5055 14.2C15.8521 14.2 15.2921 14.1333 14.8255 14C14.3588 13.8667 13.9788 13.66 13.6855 13.38C13.3921 13.1 13.1721 12.74 13.0255 12.3C12.8921 11.8467 12.8255 11.3133 12.8255 10.7V2.22C12.8255 1.98 12.8455 1.77333 12.8855 1.6C12.9388 1.42667 13.0455 1.29333 13.2055 1.2C13.3788 1.09333 13.6455 1.04 14.0055 1.04C14.3788 1.04 14.6455 1.09333 14.8055 1.2C14.9788 1.30667 15.0855 1.45333 15.1255 1.64C15.1788 1.81333 15.2055 2.00667 15.2055 2.22V10.62C15.2055 10.9 15.2255 11.1267 15.2655 11.3C15.3188 11.4733 15.3921 11.6067 15.4855 11.7C15.5921 11.78 15.7255 11.84 15.8855 11.88C16.0588 11.9067 16.2655 11.92 16.5055 11.92C16.7588 11.92 16.9721 11.94 17.1455 11.98C17.3321 12.02 17.4721 12.12 17.5655 12.28C17.6588 12.4267 17.7055 12.6733 17.7055 13.02C17.7055 13.3933 17.6455 13.6667 17.5255 13.84C17.4188 14 17.2721 14.1 17.0855 14.14C16.9121 14.18 16.7188 14.2 16.5055 14.2ZM12.0055 4.54L14.0655 4.56L16.8255 4.48C17.0521 4.48 17.2521 4.50667 17.4255 4.56C17.6121 4.6 17.7588 4.70667 17.8655 4.88C17.9721 5.04 18.0255 5.30667 18.0255 5.68C18.0255 6.02667 17.9721 6.28667 17.8655 6.46C17.7588 6.63333 17.6188 6.74667 17.4455 6.8C17.2721 6.84 17.0721 6.86 16.8455 6.86L14.1655 6.82L11.9455 6.84C11.6121 6.82667 11.3788 6.73333 11.2455 6.56C11.1255 6.37333 11.0655 6.07333 11.0655 5.66C11.0655 5.27333 11.1388 4.99333 11.2855 4.82C11.4455 4.63333 11.6855 4.54 12.0055 4.54ZM24.2766 14.32C23.4099 14.32 22.6499 14.18 21.9966 13.9C21.3566 13.62 20.8166 13.24 20.3766 12.76C19.9499 12.2667 19.6232 11.72 19.3966 11.12C19.1832 10.5067 19.0766 9.87333 19.0766 9.22C19.0766 8.26 19.2966 7.40667 19.7366 6.66C20.1766 5.91333 20.7832 5.32667 21.5566 4.9C22.3432 4.47333 23.2432 4.26 24.2566 4.26C24.9766 4.26 25.6099 4.37333 26.1566 4.6C26.7032 4.82667 27.1566 5.12667 27.5166 5.5C27.8899 5.86 28.1699 6.26 28.3566 6.7C28.5566 7.14 28.6566 7.56667 28.6566 7.98C28.6566 8.68667 28.4832 9.2 28.1366 9.52C27.8032 9.84 27.3832 10 26.8766 10H21.5966C21.6099 10.4533 21.7499 10.8467 22.0166 11.18C22.2966 11.5133 22.6432 11.7733 23.0566 11.96C23.4832 12.1333 23.9166 12.22 24.3566 12.22C24.6899 12.22 24.9832 12.2 25.2366 12.16C25.5032 12.12 25.7299 12.0733 25.9166 12.02C26.1032 11.9533 26.2632 11.8867 26.3966 11.82C26.5432 11.7533 26.6766 11.6933 26.7966 11.64C26.9166 11.5867 27.0299 11.5533 27.1366 11.54C27.2832 11.5267 27.4299 11.56 27.5766 11.64C27.7232 11.72 27.8432 11.86 27.9366 12.06C28.0166 12.1933 28.0699 12.32 28.0966 12.44C28.1366 12.5467 28.1566 12.6533 28.1566 12.76C28.1566 13.0267 27.9966 13.28 27.6766 13.52C27.3566 13.7467 26.9032 13.9333 26.3166 14.08C25.7432 14.24 25.0632 14.32 24.2766 14.32ZM21.5966 8.58H25.6966C25.9232 8.58 26.0966 8.54667 26.2166 8.48C26.3366 8.4 26.3966 8.24 26.3966 8C26.3966 7.69333 26.3032 7.42 26.1166 7.18C25.9299 6.92667 25.6766 6.73333 25.3566 6.6C25.0366 6.45333 24.6632 6.38 24.2366 6.38C23.7432 6.38 23.2966 6.48 22.8966 6.68C22.4966 6.86667 22.1766 7.12667 21.9366 7.46C21.7099 7.79333 21.5966 8.16667 21.5966 8.58ZM35.3578 14.06C34.7045 14.06 34.1178 13.94 33.5978 13.7C33.0911 13.4467 32.6578 13.1 32.2978 12.66C31.9511 12.2067 31.6845 11.6867 31.4978 11.1C31.3245 10.5133 31.2378 9.88 31.2378 9.2C31.2511 8.52 31.3511 7.88667 31.5378 7.3C31.7245 6.7 31.9911 6.18 32.3378 5.74C32.6978 5.3 33.1311 4.95333 33.6378 4.7C34.1445 4.44667 34.7178 4.32 35.3578 4.32C35.9711 4.32 36.5445 4.44667 37.0778 4.7C37.6245 4.95333 38.1045 5.30667 38.5178 5.76C38.9445 6.21333 39.2778 6.74 39.5178 7.34C39.7578 7.92667 39.8778 8.56 39.8778 9.24C39.8778 9.93333 39.7578 10.5733 39.5178 11.16C39.2778 11.7467 38.9511 12.26 38.5378 12.7C38.1245 13.1267 37.6445 13.46 37.0978 13.7C36.5511 13.94 35.9711 14.06 35.3578 14.06ZM31.3578 18.22C30.9978 18.22 30.7311 18.1667 30.5578 18.06C30.3845 17.9533 30.2778 17.8133 30.2378 17.64C30.1978 17.4667 30.1778 17.2667 30.1778 17.04V5.54C30.1778 5.31333 30.1978 5.11333 30.2378 4.94C30.2778 4.76667 30.3778 4.62667 30.5378 4.52C30.7111 4.4 30.9778 4.34 31.3378 4.34C31.6845 4.34 31.9578 4.39333 32.1578 4.5C32.3578 4.60667 32.4911 4.78667 32.5578 5.04V17.02C32.5711 17.2467 32.5511 17.4467 32.4978 17.62C32.4578 17.8067 32.3511 17.9533 32.1778 18.06C32.0045 18.1667 31.7311 18.22 31.3578 18.22ZM35.0378 11.82C35.5045 11.82 35.9245 11.7133 36.2978 11.5C36.6711 11.2733 36.9645 10.9667 37.1778 10.58C37.4045 10.18 37.5178 9.73333 37.5178 9.24C37.5178 8.73333 37.4045 8.28667 37.1778 7.9C36.9645 7.51333 36.6711 7.21333 36.2978 7C35.9245 6.77333 35.5045 6.66 35.0378 6.66C34.5845 6.66 34.1711 6.77333 33.7978 7C33.4245 7.22667 33.1245 7.53333 32.8978 7.92C32.6845 8.29333 32.5778 8.73333 32.5778 9.24C32.5778 9.73333 32.6845 10.18 32.8978 10.58C33.1245 10.9667 33.4245 11.2733 33.7978 11.5C34.1711 11.7133 34.5845 11.82 35.0378 11.82ZM47.3883 14.1C47.0816 14.1 46.8016 13.98 46.5483 13.74C46.3083 13.4867 46.1883 13.1933 46.1883 12.86C46.1883 12.6467 46.2016 12.44 46.2283 12.24C46.2549 12.04 46.3149 11.8467 46.4083 11.66C46.5016 11.4733 46.6416 11.2933 46.8283 11.12C47.4416 10.6133 48.0616 10.1467 48.6883 9.72C49.3283 9.29333 49.9416 8.88667 50.5283 8.5C51.1149 8.11333 51.6416 7.72667 52.1083 7.34C52.5749 6.94 52.9416 6.52667 53.2083 6.1C53.4749 5.66 53.6083 5.18667 53.6083 4.68C53.6083 4.26667 53.5216 3.89333 53.3483 3.56C53.1883 3.22667 52.9283 2.96 52.5683 2.76C52.2083 2.56 51.7283 2.46 51.1283 2.46C50.7149 2.46 50.3483 2.52 50.0283 2.64C49.7216 2.76 49.4616 2.93333 49.2483 3.16C49.0483 3.38667 48.8883 3.66667 48.7683 4C48.6616 4.32 48.6083 4.68667 48.6083 5.1C48.6083 5.32667 48.5883 5.52667 48.5483 5.7C48.5083 5.87333 48.4016 6.01333 48.2283 6.12C48.0683 6.21333 47.7883 6.26 47.3883 6.26C46.9883 6.26 46.7016 6.2 46.5283 6.08C46.3683 5.96 46.2683 5.8 46.2283 5.6C46.2016 5.38667 46.1883 5.16667 46.1883 4.94C46.1883 4.27333 46.2949 3.64667 46.5083 3.06C46.7349 2.46 47.0616 1.94 47.4883 1.5C47.9149 1.04667 48.4283 0.693333 49.0283 0.439999C49.6416 0.173333 50.3349 0.0399997 51.1083 0.0399997C52.0816 0.0399997 52.9349 0.24 53.6683 0.639999C54.4149 1.04 54.9949 1.6 55.4083 2.32C55.8349 3.04 56.0483 3.9 56.0483 4.9C56.0483 5.42 55.9683 5.90667 55.8083 6.36C55.6483 6.81333 55.4283 7.24 55.1483 7.64C54.8683 8.02667 54.5416 8.38667 54.1683 8.72C53.8083 9.05333 53.4149 9.37333 52.9883 9.68C52.5749 9.97333 52.1549 10.2533 51.7283 10.52C51.3016 10.7733 50.8883 11.02 50.4883 11.26L49.7283 11.66H55.4083C55.6349 11.66 55.8416 11.6867 56.0283 11.74C56.2149 11.78 56.3549 11.8867 56.4483 12.06C56.5549 12.2333 56.6083 12.5133 56.6083 12.9C56.6083 13.2733 56.5549 13.5467 56.4483 13.72C56.3416 13.8933 56.1949 14 56.0083 14.04C55.8216 14.08 55.6083 14.1 55.3683 14.1H47.3883ZM59.3666 14.2C58.8732 14.2 58.5266 14.1067 58.3266 13.92C58.1266 13.72 58.0266 13.3733 58.0266 12.88C58.0266 12.5333 58.0666 12.2667 58.1466 12.08C58.2399 11.88 58.3866 11.7333 58.5866 11.64C58.7866 11.5467 59.0532 11.5 59.3866 11.5C59.8799 11.5 60.2266 11.6 60.4266 11.8C60.6266 12 60.7266 12.3533 60.7266 12.86C60.7266 13.1933 60.6799 13.46 60.5866 13.66C60.5066 13.86 60.3666 14 60.1666 14.08C59.9799 14.16 59.7132 14.2 59.3666 14.2Z'
            fill='#FF5B15'
          />
        </svg>
        <UploadST.StepOneContent>
          배프와의 만남에 대한 정보를 입력해주세요.
        </UploadST.StepOneContent>
      </UploadST.StepOneHeader>

      <UploadST.MenuBox>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='20' height='20' rx='4' fill='white' />

          <g mask='url(#mask0_661_952)'>
            <path
              d='M14.7727 11.6146C14.5795 11.6146 14.4177 11.5471 14.2873 11.4121C14.1564 11.2775 14.0909 11.1107 14.0909 10.9114V9.50519H12.7273C12.5341 9.50519 12.3723 9.43769 12.2418 9.30269C12.1109 9.16816 12.0455 9.00128 12.0455 8.80206C12.0455 8.60284 12.1109 8.43573 12.2418 8.30073C12.3723 8.1662 12.5341 8.09894 12.7273 8.09894H14.0909V6.69269C14.0909 6.49347 14.1564 6.32636 14.2873 6.19136C14.4177 6.05683 14.5795 5.98956 14.7727 5.98956C14.9659 5.98956 15.1277 6.05683 15.2582 6.19136C15.3891 6.32636 15.4545 6.49347 15.4545 6.69269V8.09894H16.8182C17.0114 8.09894 17.1732 8.1662 17.3036 8.30073C17.4345 8.43573 17.5 8.60284 17.5 8.80206C17.5 9.00128 17.4345 9.16816 17.3036 9.30269C17.1732 9.43769 17.0114 9.50519 16.8182 9.50519H15.4545V10.9114C15.4545 11.1107 15.3891 11.2775 15.2582 11.4121C15.1277 11.5471 14.9659 11.6146 14.7727 11.6146ZM7.95455 10.2083C7.20455 10.2083 6.5625 9.93292 6.02841 9.38214C5.49432 8.83136 5.22727 8.16925 5.22727 7.39581C5.22727 6.62238 5.49432 5.96027 6.02841 5.40948C6.5625 4.8587 7.20455 4.58331 7.95455 4.58331C8.70455 4.58331 9.34659 4.8587 9.88068 5.40948C10.4148 5.96027 10.6818 6.62238 10.6818 7.39581C10.6818 8.16925 10.4148 8.83136 9.88068 9.38214C9.34659 9.93292 8.70455 10.2083 7.95455 10.2083ZM3.18182 15.8333C2.98864 15.8333 2.82682 15.7658 2.69636 15.6308C2.56545 15.4963 2.5 15.3294 2.5 15.1302V13.8646C2.5 13.4661 2.59955 13.0998 2.79864 12.7656C2.99727 12.4318 3.26136 12.1771 3.59091 12.0013C4.29545 11.638 5.01136 11.3654 5.73864 11.1835C6.46591 11.0021 7.20455 10.9114 7.95455 10.9114C8.70455 10.9114 9.44318 11.0021 10.1705 11.1835C10.8977 11.3654 11.6136 11.638 12.3182 12.0013C12.6477 12.1771 12.9118 12.4318 13.1105 12.7656C13.3095 13.0998 13.4091 13.4661 13.4091 13.8646V15.1302C13.4091 15.3294 13.3436 15.4963 13.2127 15.6308C13.0823 15.7658 12.9205 15.8333 12.7273 15.8333H3.18182Z'
              fill='#FFBA09'
            />
          </g>
        </svg>

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

      <UploadST.SecondQuestion
        isFistTimeFail={isFistTimeFail}
        isSecondTimeFail={isSecondTimeFail}
      >
        <UploadST.MenuBox>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='20' height='20' rx='4' fill='white' />

            <g mask='url(#mask0_661_957)'>
              <path
                d='M9.99084 17.0833C9.07509 17.0833 8.21746 16.9138 7.41795 16.5747C6.61795 16.2352 5.92198 15.7766 5.33004 15.199C4.73761 14.6219 4.26728 13.9433 3.91905 13.1633C3.57131 12.3838 3.39744 11.5476 3.39744 10.6547C3.39744 9.76189 3.57131 8.92546 3.91905 8.14546C4.26728 7.36593 4.73761 6.68736 5.33004 6.10974C5.92198 5.5326 6.61795 5.0745 7.41795 4.73546C8.21746 4.39593 9.07509 4.22617 9.99084 4.22617C10.9066 4.22617 11.7645 4.39593 12.5645 4.73546C13.364 5.0745 14.06 5.5326 14.6524 6.10974C15.2443 6.68736 15.7144 7.36593 16.0626 8.14546C16.4104 8.92546 16.5842 9.76189 16.5842 10.6547C16.5842 11.5476 16.4104 12.3838 16.0626 13.1633C15.7144 13.9433 15.2443 14.6219 14.6524 15.199C14.06 15.7766 13.364 16.2352 12.5645 16.5747C11.7645 16.9138 10.9066 17.0833 9.99084 17.0833ZM9.25824 7.7976V10.6369C9.25824 10.7321 9.27656 10.8243 9.31319 10.9133C9.34982 11.0028 9.40476 11.0833 9.47802 11.1547L11.5476 13.1726C11.6819 13.3036 11.8468 13.369 12.0421 13.369C12.2375 13.369 12.4084 13.2976 12.5549 13.1547C12.6893 13.0238 12.7564 12.8571 12.7564 12.6547C12.7564 12.4524 12.6893 12.2857 12.5549 12.1547L10.7234 10.369V7.77974C10.7234 7.57736 10.6534 7.41069 10.5132 7.27974C10.3725 7.14879 10.1984 7.08331 9.99084 7.08331C9.78327 7.08331 9.6094 7.15165 9.46923 7.28831C9.32857 7.42546 9.25824 7.59522 9.25824 7.7976ZM3.70879 6.60117C3.57448 6.73212 3.40965 6.7976 3.21429 6.7976C3.01893 6.7976 2.84799 6.72617 2.70147 6.58331C2.56716 6.45236 2.5 6.28569 2.5 6.08331C2.5 5.88093 2.56716 5.71427 2.70147 5.58331L4.80769 3.52974C4.942 3.39879 5.10684 3.33331 5.3022 3.33331C5.49756 3.33331 5.6685 3.40474 5.81502 3.5476C5.94933 3.67855 6.01648 3.84522 6.01648 4.0476C6.01648 4.24998 5.94933 4.41665 5.81502 4.5476L3.70879 6.60117ZM16.2546 6.58331L14.1484 4.52974C14.014 4.39879 13.9469 4.23808 13.9469 4.0476C13.9469 3.85712 14.0201 3.69046 14.1667 3.5476C14.301 3.41665 14.4719 3.35117 14.6795 3.35117C14.8871 3.35117 15.058 3.41665 15.1923 3.5476L17.2985 5.60117C17.4328 5.73212 17.5 5.89284 17.5 6.08331C17.5 6.27379 17.4267 6.44046 17.2802 6.58331C17.1459 6.71427 16.975 6.77974 16.7674 6.77974C16.5598 6.77974 16.3889 6.71427 16.2546 6.58331Z'
                fill='#FFBA09'
              />
            </g>
          </svg>

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
      </UploadST.SecondQuestion>
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

      <UploadST.MenuBox>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='20' height='20' rx='4' fill='white' />
          <g mask='url(#mask0_661_956)'>
            <path
              d='M11.6477 17.4803C11.4205 17.5313 11.2217 17.4833 11.0515 17.3364C10.8808 17.19 10.7955 16.9892 10.7955 16.7342C10.7955 16.5556 10.8556 16.3931 10.9758 16.2467C11.0955 16.0998 11.2437 16.0008 11.4205 15.9498C11.7361 15.8733 12.0424 15.7743 12.3394 15.6529C12.6359 15.532 12.923 15.3822 13.2008 15.2037C13.3649 15.1016 13.5449 15.0603 13.7409 15.0797C13.9364 15.0986 14.0972 15.1718 14.2235 15.2993C14.4003 15.4779 14.4793 15.682 14.4606 15.9115C14.4414 16.1411 14.3308 16.3197 14.1288 16.4472C13.7374 16.7023 13.3366 16.9127 12.9265 17.0785C12.5159 17.2443 12.0896 17.3782 11.6477 17.4803ZM15.303 14.2089C15.1768 14.0813 15.104 13.9219 15.0848 13.7306C15.0662 13.5393 15.1073 13.3671 15.2083 13.214C15.3725 12.9335 15.5177 12.6465 15.6439 12.3531C15.7702 12.0598 15.8712 11.7473 15.947 11.4157C15.9975 11.2372 16.0985 11.0841 16.25 10.9566C16.4015 10.829 16.5657 10.7653 16.7424 10.7653C16.995 10.7653 17.1939 10.8545 17.3394 11.0331C17.4843 11.2117 17.5253 11.4157 17.4621 11.6453C17.3611 12.1044 17.2253 12.5414 17.0545 12.9562C16.8843 13.3704 16.673 13.7625 16.4205 14.1323C16.2942 14.3236 16.1207 14.4287 15.9 14.4476C15.6788 14.467 15.4798 14.3874 15.303 14.2089ZM16.7235 9.23478C16.5467 9.23478 16.3859 9.17101 16.2409 9.04347C16.0955 8.91593 15.9975 8.76288 15.947 8.58433C15.8712 8.25272 15.7702 7.93693 15.6439 7.63695C15.5177 7.33749 15.3725 7.05384 15.2083 6.786C15.1073 6.63296 15.0662 6.46078 15.0848 6.26946C15.104 6.07815 15.1768 5.91873 15.303 5.79119C15.4798 5.61263 15.6788 5.52973 15.9 5.54248C16.1207 5.55524 16.2942 5.65727 16.4205 5.84858C16.673 6.21845 16.8876 6.61689 17.0644 7.04389C17.2412 7.47141 17.3801 7.90836 17.4811 8.35475C17.5316 8.58433 17.4811 8.78839 17.3295 8.96695C17.178 9.1455 16.976 9.23478 16.7235 9.23478ZM8.44697 17.4611C6.71717 17.053 5.29343 16.1602 4.17576 14.7828C3.05859 13.4054 2.5 11.8111 2.5 10C2.5 8.1762 3.05556 6.56919 4.16667 5.17899C5.27778 3.7888 6.69823 2.9024 8.42803 2.51977C8.6553 2.46876 8.85429 2.51646 9.025 2.66287C9.1952 2.8098 9.2803 3.00443 9.2803 3.24675C9.2803 3.42531 9.2202 3.5878 9.1 3.73421C8.9803 3.88114 8.83207 3.98011 8.6553 4.03113C7.30429 4.36273 6.19318 5.08334 5.32197 6.19294C4.45076 7.30254 4.01515 8.57157 4.01515 10C4.01515 11.4285 4.45076 12.6881 5.32197 13.7788C6.19318 14.869 7.30429 15.5927 8.6553 15.9498C8.83207 16.0008 8.9803 16.1028 9.1 16.2559C9.2202 16.4089 9.2803 16.5747 9.2803 16.7533C9.2803 16.9956 9.19823 17.1869 9.03409 17.3272C8.86995 17.4675 8.67424 17.5122 8.44697 17.4611ZM13.2576 4.8155C12.9672 4.63695 12.6705 4.48058 12.3674 4.34641C12.0644 4.21275 11.7551 4.10765 11.4394 4.03113C11.2626 3.98011 11.1111 3.88114 10.9848 3.73421C10.8586 3.5878 10.7955 3.42531 10.7955 3.24675C10.7955 3.00443 10.8808 2.8098 11.0515 2.66287C11.2217 2.51646 11.4205 2.46876 11.6477 2.51977C12.0896 2.62181 12.5189 2.75572 12.9356 2.92153C13.3523 3.08733 13.7563 3.29777 14.1477 3.55285C14.3497 3.68039 14.4604 3.85895 14.4795 4.08852C14.4982 4.3181 14.4192 4.52216 14.2424 4.70072C14.1162 4.82826 13.9616 4.90478 13.7788 4.93029C13.5955 4.9558 13.4217 4.91754 13.2576 4.8155ZM10.0568 13.5584C9.95581 13.5584 9.86111 13.5423 9.77273 13.5102C9.68434 13.4786 9.60227 13.4309 9.52652 13.3671C8.69318 12.5891 8.06818 11.8621 7.65152 11.1862C7.23485 10.5102 7.02652 9.88524 7.02652 9.31131C7.02652 8.35475 7.33283 7.59283 7.94546 7.02553C8.55758 6.45771 9.26136 6.17381 10.0568 6.17381C10.8523 6.17381 11.5563 6.45771 12.1689 7.02553C12.7811 7.59283 13.0871 8.35475 13.0871 9.31131C13.0871 9.88524 12.8788 10.5102 12.4621 11.1862C12.0455 11.8621 11.4205 12.5891 10.5871 13.3671C10.5114 13.4309 10.4293 13.4786 10.3409 13.5102C10.2525 13.5423 10.1578 13.5584 10.0568 13.5584ZM10.0568 10C10.2841 10 10.4768 9.92044 10.6348 9.76127C10.7924 9.60159 10.8712 9.40696 10.8712 9.17739C10.8712 8.96057 10.7924 8.76926 10.6348 8.60346C10.4768 8.43765 10.2841 8.35475 10.0568 8.35475C9.82955 8.35475 9.63687 8.43765 9.47879 8.60346C9.32121 8.76926 9.24242 8.96057 9.24242 9.17739C9.24242 9.40696 9.32121 9.60159 9.47879 9.76127C9.63687 9.92044 9.82955 10 10.0568 10Z'
              fill='#FFBA09'
            />
          </g>
        </svg>

        <UploadST.MenuTitle>만나는 장소</UploadST.MenuTitle>
      </UploadST.MenuBox>

      <UploadST.SelectMapBox
        isGatherNameFail={isGatherNameFail}
        onClick={() => {
          setIndex(4);
        }}
      >
        <img src={SampleMap} style={{ width: '100%', height: '72px' }} alt='' />
        {addressManager ? (
          <UploadST.SelectAddressBox>
            <UploadST.OrangeMarker
              src={OrangeMapMarker}
              style={{ width: '14px', height: '14px' }}
              alt=''
            />
            <UploadST.SelectAddress defaultValue={data.gatherName} />
          </UploadST.SelectAddressBox>
        ) : (
          <UploadST.Frame
            src={MapFrame}
            style={{ width: '28px', height: '28px' }}
            alt=''
          />
        )}

        {/* <CurrentLocation
          data={data}
          addressManager={addressManager}
          isGatherNameFail={isGatherNameFail}
          setIsGatherNameFail={setIsGatherNameFail}
        /> */}
      </UploadST.SelectMapBox>

      {isGatherNameFail ? (
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

      <UploadST.MenuBox>
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

        <UploadST.MenuTitle>전달하고 싶은 메세지</UploadST.MenuTitle>
      </UploadST.MenuBox>

      <div>
        <UploadST.TextArea
          name='content'
          value={data.content}
          onChange={textAreaHandler}
          isTextAreaFail={isTextAreaFail}
        />
      </div>

      {isTextAreaFail ? (
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

      {isTextAreaLengthFail ? (
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
          <UploadST.ErrorMsg>40글자가 초과하였습니다!</UploadST.ErrorMsg>
        </UploadST.ErrorMsgBox>
      ) : null}
    </UploadST.StepTwoBox>
  );
};

export default UploadStepTwo;
