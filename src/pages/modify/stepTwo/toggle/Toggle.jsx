import styled, { css } from 'styled-components';

export const Toggle = ({ toggle, setToggle }) => {
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle}>
          {toggle ? (
            <ToggleText id='time'>PM</ToggleText>
          ) : (
            <ToggleText id='time'>AM</ToggleText>
          )}
        </Circle>
      </ToggleBtn>
    </div>
  );
};

const ToggleBtn = styled.button`
  width: 62px;
  height: 40px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.toggle ? 'var(--color-light-orange)' : 'var(--color-light-orange)'};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: var(--color-orange);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  position: absolute;
  left: 1%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(20px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

const ToggleText = styled.div`
  font-weight: var(--weight-bold);
  font-size: var(--font-small);
  color: white;
  margin: 12px 0px 11px 0px;
`;
