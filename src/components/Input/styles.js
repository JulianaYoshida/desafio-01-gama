import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: #fbfbfb;
  border-radius: 6px;
  border: 2px solid #bbb;
  color: #bbb;

  & + div {
    margin-top: 20px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #2764bf;
      border-color: #2764bf;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #2764bf;
    `}

  svg {
    margin-right: 8px;
  }

  input {
    height: 25px;
    font-size: 18px;
    padding: 0px;
    flex: 1;
    border: 0;
    background: transparent;
    color: #444;
    font-weight: bold;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #bbb;
      font-weight: 400;
      font-style: italic;
    }
  }
`;
