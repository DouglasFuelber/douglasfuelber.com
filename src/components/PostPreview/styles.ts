import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface PostPreviewProps {
  isFeatured?: boolean;
}

export const Container = styled.div<PostPreviewProps>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 50%;

  ${props =>
    props.isFeatured &&
    css`
      width: 100%;
    `}
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
