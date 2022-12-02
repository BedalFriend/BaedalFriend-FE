import styled from 'styled-components';

export const myEditBG = styled.div`
  position: fixed;
  background-color: var(--color-white);
  width: 100%;
  height: 100vh;
  align-items: center;
  
  display: flex;
  flex-flow: column nowrap;

  min-height: 100vh;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100vw;
  }
`

export const backSVG = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 60px;
  cursor: pointer;
`

export const picText = styled.div`
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  width: calc(100% - 32px);
  margin-top: 20px;
`

export const picWrap = styled.div`
  position: relative; 
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  margin-top: 16px;
  margin-bottom: 28px;
`

export const picButton = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-bold);
  color: var(--color-orange);

  background-color: var(--color-light-orange);
  border-radius: 99px;
  padding: 4px 12px;
  margin-top: 12px;

  cursor: pointer;
`

export const checkText = styled.div`
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  width: calc(100% - 32px);
  margin-top: 28px;
`

export const emailBox = styled.div`
  width: calc(100% - 32px);
  height: 40px;
  padding: 11px 20px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-grey);

  border-radius: 12px;
  background-color: var(--color-dark-white);
`

export const nickBox = styled.div`
  width: calc(100% - 32px);
  height: 40px;
  padding: 11px 20px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-grey);

  border-radius: 12px;
  background-color: var(--color-dark-white);
`

export const nickText = styled.input`
  all: unset;
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-grey);

  ::placeholder {
    font-size: var(--font-small);
    font-weight: var(--weight-regular);
    color: var(--color-grey);
  }
`;

export const emailCheck = styled.div`
  font-size: var(--font-micro);
  font-weight: var(--weight-bold);
  width: calc(100% - 72px);
  margin-top: 12px;
  color: var(--color-system-success);
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 4px;
`

export const nickEditBtn = styled.div`
  font-size: var(--font-minor);
  font-weight: var(--weight-bold);
  color: var(--color-orange);

  background-color: var(--color-light-orange);
  border-radius: 99px;
  padding: 4px 12px;
  width: 59px;
  height: 20px;
  cursor: pointer;
`

export const buttonWrap = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  bottom : 56px;
  display: flex;
  justify-content: space-between;
`

export const cancelBtn = styled.div`
  position: relative;
  font-size: var(--font-regular);
  font-weight: var(--weight-bold);
  color: var(--color-grey);

  background-color: var(--color-blur-white);
  border-radius: 12px;

  width: 48%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const submitBtn = styled.button`
  position: relative;
  font-size: var(--font-regular);
  font-weight: var(--weight-bold);
  color: var(--color-white);

  background-color: var(--color-orange);
  border-radius: 12px;

  width: 48%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    background-color: var(--color-grey);
    cursor: default;
  }
`

export const HelpBox = styled.div`
  position: relative;
  width: calc(100% - 72px);
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 4px;
`;

export const HelpText = styled.span`
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  font-display: swap;
  color: ${(props) =>
    props.isFail ? 'var(--color-system-error)' : 'var(--color-system-success)'};

  margin-left: 4px;
`;

export const EditPic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  object-fit: cover;
`;