import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  background-color: #2ad36e;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  transition: background-color 0.2s;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #2cc66a;
  }
`;
