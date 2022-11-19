import styled from 'styled-components';

export const PostBox = styled.div`
  padding-top: 60px;
  width: calc(100% - 32px);
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StepOneBox = styled.div`
  width: 100%;
`;
export const StepTwoBox = styled.div`
  width: 100%;
`;

export const StepOneBody = styled.div`
  @media screen and (min-width: 764px) {
  }

  @media screen and (max-width: 764px) {
    /* margin-left: 50px; */
  }
`;

export const StepOneHeader = styled.div`
  height: 71px;
  margin-top: 24px;

  @media screen and (min-width: 764px) {
    margin-bottom: 36px;
  }

  @media screen and (max-width: 764px) {
    margin-bottom: 25px;
  }
`;

export const StepOneTitle = styled.div`
  font-family: 'Fredoka';
  font-weight: var(--weight-semi-bold);
  font-size: 20px;
  color: var(--color-orange);
`;

export const StepOneContent = styled.div`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 16px;
  color: var(--color-dark-grey);

  margin-top: 8px;
  padding-bottom: 16px;

  border-bottom: 4px solid var(--color-dark-white);
`;

export const LongInputBox = styled.div`
  display: flex;
  align-items: center;

  background-color: var(--color-dark-white);
  border-radius: 40px;
  width: 100%;
  height: 40px;

  @media screen and (min-width: 764px) {
    margin-bottom: 36px;
  }

  @media screen and (max-width: 764px) {
    margin-bottom: 25px;
  }
`;

export const LongInput = styled.input`
  font-size: var(--font-small);
  color: var(--color-dark-grey);
`;

export const MenuBox = styled.div`
  display: flex;

  @media screen and (min-width: 764px) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 764px) {
    margin-bottom: 12px;
  }
`;

export const MenuTitle = styled.div`
  margin-left: 4px;

  font-family: 'Pretendard';
  font-size: var(--font-regular);
  color: var(--color-light-black);
`;

export const ShortInputBox = styled.div`
  display: flex;
  align-items: center;

  background-color: var(--color-dark-white);
  border-radius: 40px;
  width: 100%;
  max-width: 152px;

  height: 40px;
  @media screen and (min-width: 764px) {
    margin-bottom: 36px;
  }

  @media screen and (max-width: 764px) {
    margin-bottom: 28px;
  }
`;

export const ShortInput = styled.input`
  font-size: var(--font-small);
  color: var(--color-light-black);
  width: 30px;
  margin-left: 20px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  width: 356px;
`;

export const PriceInputBox = styled.div`
  display: flex;
  align-items: center;

  background-color: var(--color-dark-white);
  border-radius: 40px;
  width: 152px;
  height: 40px;
`;

export const ButtonBox = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  bottom: 0;
  margin-bottom: 56px;
`;

export const InputText = styled.div`
  font-size: var(--font-small);
  color: var(--color-dark-grey);
`;

export const CancelBtn = styled.button`
  max-width: 366px;
  width: 100%;
  height: 52px;

  border-radius: 12px;
  background-color: var(--color-blur-white);
  color: white;

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const NextBtn = styled.button`
  max-width: 366px;
  width: 100%;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-orange);
  color: white;

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const StayBtn = styled.button`
  max-width: 366px;
  width: 100%;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-grey);
  color: white;

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const SelectBox = styled.div`
  position: relative;
`;

export const LimitTimeBox = styled.div`
  display: flex;
  margin-bottom: 29px;
`;

export const UploadBtn = styled.button`
  max-width: 366px;
  width: 100%;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-orange);
  color: white;

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;
export const TimeInput = styled.input`
  font-size: var(--font-small);
  color: var(--color-light-black);
  width: 30px;
  margin-left: 20px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const CtgTitle = styled.div`
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const SelectInput = styled.div`
  position: relative;
  width: 152px;
  height: 40px;

  border-radius: 25px;
  background-color: var(--color-dark-white);
  align-self: center;

  cursor: pointer;
  &::before {
    content: '⌵';
    position: absolute;
    top: 3px;
    left: 18px;
    color: var(--color-orange);
    font-size: 20px;
  }
`;

export const SelectValue = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  padding-left: 52px;
  padding-top: 11px;
  align-items: center;
  color: var(--color-dark-grey);
`;