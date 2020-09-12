import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 10px;
  flex: 1;
  margin-bottom: 8px;
  margin-top: 8px;

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      border-color: #00143c;
    `}

  ${props =>
    props.isErrored &&
    css`
      background: #d90505;
      border-color: #d90505;
    `}

  textarea {
    background: #fff;
    border: 0;
    border-radius: 8px;
    color: #00143c;
    font-family: Raleway, sans-serif;
    font-size: 14px;
    padding: 8px 16px;
    resize: none;
    width: 100%;

    &::placeholder {
      color: #aaa;
    }
  }

  div {
    color: #fff;
    font-size: 14px;
    padding: 4px 16px;
  }
`;
