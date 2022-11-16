import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Select = ({ data, setData, stepTwoCheckHandler }) => {
  const optionData = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];
  const [currentValue, setCurrentValue] = useState('');

  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    setData({ ...data, participantNumber: currentValue });
  }, [currentValue]);

  return (
    <SelectBox
      onKeyUp={stepTwoCheckHandler}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <Label>{currentValue}명</Label>
      <SelectOptions show={showOptions}>
        {optionData.map((data) => (
          <Option
            key={data.value}
            value={data.value}
            onClick={handleOnChangeSelectValue}
          >
            {data.value}명
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default Select;

const SelectBox = styled.div`
  position: relative;
  width: 152px;
  height: 40px;
  padding: 8px;
  margin-bottom: 29px;
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
const Label = styled.label`
  font-size: 14px;
  margin-left: 35px;
  text-align: center;
  color: var(--color-dark-grey);
`;
const SelectOptions = styled.ul`
  position: absolute;
  z-index: 3;
  list-style: none;
  top: 30px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 150px;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;
