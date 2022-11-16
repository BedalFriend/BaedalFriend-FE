import styled from 'styled-components';

export const PostBox = styled.div`
  padding-top: 60px;
  width: calc(100% - 32px);
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
dif`;

export const StepOneBox = styled.div`
  /* background-color: blueviolet; */
`;

export const StepOneHeader = styled.div`
  /* background-color: skyblue; */
  height: 71px;
  margin-top: 24px;
  margin-bottom: 25px;
`;

export const StepOneTitle = styled.div`
  font-family: 'Fredoka';
  font-weight: var(--weight-semi-bold);
  font-size: 20px;
  color: var(--color-orange);
`;

export const StepOneContent = styled.div`
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
  width: 358px;
  height: 40px;
  margin-bottom: 25px;
`;

export const LongInput = styled.input`
  font-size: var(--font-small);
  color: var(--color-dark-grey);
`;

export const MenuBox = styled.div`
  display: flex;
  margin-bottom: 12px;
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
  width: 152px;
  height: 40px;
  margin-bottom: 25px;
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
  width: 171px;
  height: 52px;

  border-radius: 12px;
  background-color: var(--color-blur-white);
  color: white;

  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const NextBtn = styled.button`
  width: 171px;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-orange);
  color: white;

  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const StayBtn = styled.button`
  width: 171px;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-grey);
  color: white;

  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const SelectBox = styled.div``;

export const LimitTimeBox = styled.div`
  display: flex;
  margin-bottom: 29px;
`;

export const UploadBtn = styled.button`
  width: 171px;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-orange);
  color: white;

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
