import styled from 'styled-components';

const Select = ({
  width,
  left,
  top,
  optionData,
  setCurrentValue,
  showOptions,
  setShowOptions,
}) => {
  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.value);
    setShowOptions(false);
  };

  return (
    <SelectOptions left={left} top={top} width={width} show={showOptions}>
      {optionData.map((data) => (
        <div key={data.value}>
          <Option value={data.value} onClick={handleOnChangeSelectValue}>
            {data.value}
          </Option>
        </div>
      ))}
    </SelectOptions>
  );
};

export default Select;

const SelectOptions = styled.ul`
  position: absolute;
  z-index: 3;
  list-style: none;
  top: ${(props) => (props.top ? props.top : '0px')};
  left: ${(props) => (props.left ? props.left : '0px')};
  width: ${(props) => (props.width ? props.width : '0px')};
  overflow: hidden;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  padding: 0;
  border-radius: 8px;
  background-color: var(--color-dark-white);
  color: var(--color-dark-grey);
`;
const Option = styled.li`
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #d4d4d4;
  }
`;
