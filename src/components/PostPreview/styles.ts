import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface PostPreviewProps {
  postIndex: number;
}

export const Container = styled.div<PostPreviewProps>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin-bottom: 48px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;

  ${props =>
    props.postIndex === 0 &&
    css`
      width: 100%;
    `}

  ${props =>
    props.postIndex !== 0 &&
    props.postIndex % 2 === 0 &&
    css`
      padding-left: 8px;
    `}

  ${props =>
    props.postIndex !== 0 &&
    props.postIndex % 2 !== 0 &&
    css`
      padding-right: 8px;
    `}
  }

  h2 {
    color: #00143c;
    font-size: 26px;
    margin-bottom: 16px;
  }
`;

export const PostMeta = styled.div``;

export const Button = styled.button`
  background-color: #00143c;
  border: none;
  border-radius: 8px;
  color: #eee;
  font-weight: 600;
  margin-bottom: 8px;
  padding: 8px 16px;

  &:hover {
    background: ${darken(0.05, '#00143c')};
  }
`;
