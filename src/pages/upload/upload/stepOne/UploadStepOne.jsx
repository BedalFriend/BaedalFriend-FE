import React, { useEffect, useState } from 'react';

import * as UploadST from '../../UploadPageStyle';
import MapMarker from '../../../../imgs/upload/Map_Marker.png';
import Search from '../../../../imgs/upload/search.png';
import AllMenu from '../../../../imgs/upload/AllMenu.png';
import DropdownList from '../../../../imgs/upload/DropdownList.png';
import Arrived from '../../../../imgs/upload/Arrived.png';
import Payment from '../../../../imgs/upload/Payment.png';

const UploadStepOne = ({
  data,
  dataHandler,
  setIndex,
  lengthLimit,
  setNextStepOne,
  isChecked,
}) => {
  // isFail === false 일때 error 메세지 숨김
  const [isTargetFail, setIsTargetFail] = useState(false);
  const [isCategoryFail, setIsCategoryFail] = useState(false);
  const [isDeliveryTimeFail, setIsDeliveryTimeFail] = useState(false);
  const [isTargetAmountFail, setIsTargetAmountFail] = useState(false);
  const [isDeliveryFeeFail, setIsDeliveryFeeFail] = useState(false);

  // TagetName
  useEffect(() => {
    if (data.targetName === '' && isChecked) {
      setIsTargetFail(true);
    } else {
      setIsTargetFail(false);
    }
  }, [data.targetName, isChecked]);

  // Category
  useEffect(() => {
    if (data.category === '' && isChecked) {
      setIsCategoryFail(true);
    } else {
      setIsCategoryFail(false);
    }
  }, [data.category, isChecked]);

  // DeliveryTime
  useEffect(() => {
    if (data.deliveryTime === 0 && isChecked) {
      setIsDeliveryTimeFail(true);
    } else {
      setIsDeliveryTimeFail(false);
    }
  }, [data.deliveryTime, isChecked]);

  // TargetAmount && DeliveryFee
  useEffect(() => {
    if (data.targetAmount === 0 && isChecked) {
      setIsTargetAmountFail(true);
    } else {
      setIsTargetAmountFail(false);
    }
  }, [data.targetAmount, isChecked]);

  useEffect(() => {
    if (data.deliveryFee === 0 && isChecked) {
      setIsDeliveryFeeFail(true);
    } else {
      setIsDeliveryFeeFail(false);
    }
  }, [data.deliveryFee, isChecked]);

  // NextStepOne
  useEffect(() => {
    if (
      isTargetFail === false &&
      isCategoryFail === false &&
      isDeliveryTimeFail === false &&
      isTargetAmountFail === false &&
      isDeliveryFeeFail === false &&
      data.targetName !== '' &&
      data.category !== '' &&
      data.deliveryTime !== 0 &&
      data.targetAmount !== 0 &&
      data.deliveryFee !== 0
    ) {
      setNextStepOne(true);
    } else {
      setNextStepOne(false);
    }
    // eslint-disable-next-line
  }, [
    isTargetFail,
    isCategoryFail,
    isDeliveryTimeFail,
    isTargetAmountFail,
    isDeliveryFeeFail,
    data.targetName,
    data.category,
    data.deliveryTime,
    data.targetAmount,
    data.deliveryFee,
  ]);

  return (
    <UploadST.StepOneBox>
      <UploadST.StepOneHeader>
        <div>
          <UploadST.StepOneTitle>Step 1.</UploadST.StepOneTitle>
        </div>
        <UploadST.StepOneContent>
          배달 공동 구매를 진행할 가게 정보를 입력해주세요.
        </UploadST.StepOneContent>
      </UploadST.StepOneHeader>

      <UploadST.StepOneBody>
        <div>
          <UploadST.MenuBox>
            <img
              src={MapMarker}
              style={{ width: '20px', height: '20px' }}
              alt=''
            />
            <UploadST.MenuTitle>음식점 선택</UploadST.MenuTitle>
          </UploadST.MenuBox>
          <UploadST.LongInputBox>
            <img
              src={Search}
              style={{
                width: '20px',
                height: '20px',
                marginLeft: '20px',
                marginRight: '8px',
              }}
              alt=''
            />
            <UploadST.LongInput
              name='store'
              placeholder='주소를 입력해주세요'
              value={data.targetName}
              onChange={dataHandler}
              onClick={() => {
                setIndex(1);
              }}
            />
          </UploadST.LongInputBox>

          {isTargetFail ? (
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

        <div>
          <UploadST.MenuBox>
            <img
              src={AllMenu}
              style={{ width: '20px', height: '20px' }}
              alt=''
            />
            <UploadST.MenuTitle>카테고리 선택</UploadST.MenuTitle>
          </UploadST.MenuBox>
          <UploadST.LongInputBox>
            <img
              src={DropdownList}
              style={{
                width: '20px',
                height: '20px',
                marginLeft: '20px',
                marginRight: '8px',
              }}
              alt=''
            />
            <UploadST.LongInput
              name='category'
              placeholder='카테고리를 선택해주세요'
              onChange={dataHandler}
              value={data.category}
              onClick={() => {
                setIndex(2);
              }}
            />
          </UploadST.LongInputBox>
          {isCategoryFail ? (
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

        <div>
          <UploadST.MenuBox>
            <img
              src={Arrived}
              style={{ width: '20px', height: '20px' }}
              alt=''
            />
            <UploadST.MenuTitle>예상 배달 소요시간</UploadST.MenuTitle>
          </UploadST.MenuBox>
          <UploadST.ShortInputBox>
            <UploadST.ShortInput
              name='deliveryTime'
              type='number'
              value={data.deliveryTime}
              onChange={dataHandler}
              onInput={lengthLimit}
            />
            <UploadST.InputText>분</UploadST.InputText>
          </UploadST.ShortInputBox>
          {isDeliveryTimeFail ? (
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

        <div>
          <UploadST.MenuBox>
            <img
              src={Payment}
              style={{ width: '20px', height: '20px' }}
              alt=''
            />
            <UploadST.MenuTitle>
              목표 금액에 따른 배달료 기준
            </UploadST.MenuTitle>
          </UploadST.MenuBox>

          <UploadST.PriceBox>
            <UploadST.PriceInputBox>
              <UploadST.ShortInput
                name='targetAmount'
                type='number'
                value={data.targetAmount}
                onChange={dataHandler}
                onInput={lengthLimit}
              />
              <UploadST.InputText>만원</UploadST.InputText>
            </UploadST.PriceInputBox>
            <div style={{ marginLeft: '8px', marginRight: '16px' }}>이상</div>
            <UploadST.PriceInputBox>
              <UploadST.ShortInput
                name='deliveryFee'
                type='number'
                value={data.deliveryFee}
                onChange={dataHandler}
                onInput={lengthLimit}
              />
              <UploadST.InputText>원</UploadST.InputText>
            </UploadST.PriceInputBox>
          </UploadST.PriceBox>

          {isTargetAmountFail || isDeliveryFeeFail ? (
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
      </UploadST.StepOneBody>
    </UploadST.StepOneBox>
  );
};

export default UploadStepOne;
