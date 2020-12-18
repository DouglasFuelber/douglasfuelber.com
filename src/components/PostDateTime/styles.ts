import styled, { css } from 'styled-components';

interface PostDateTimeProps {
  postIndex: Number;
}

export const Container = styled.div<PostDateTimeProps>`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    ${props =>
    props.postIndex === 0 &&
    css`
        flex-direction: row;
      `}
  }

  div {
    align-items: center;
    color: #00143c;
    display: flex;
    font-size: 14px;
    margin-bottom: 8px;
    margin-right: 24px;

    svg {
      color: #70a1ff;
      margin-right: 8px;
    }
  }
`;
