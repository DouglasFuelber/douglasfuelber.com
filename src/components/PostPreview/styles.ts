import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'gatsby-plugin-react-intl';

interface PostPreviewProps {
  postIndex: Number;
}

export const Container = styled.div<PostPreviewProps>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin-bottom: 64px;
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
      padding-left: 16px;
    `}

  ${props =>
    props.postIndex !== 0 &&
    props.postIndex % 2 !== 0 &&
    css`
      padding-right: 16px;
    `}
  }

  h2 {
    color: #00143c;
    font-size: 26px;
    margin-bottom: 16px;
  }
`;

export const PostInfo = styled.div`
  border-left: 3px solid #70a1ff;
  color: #00143c;
  margin: 16px 0;
  padding-left: 16px;

  p {
    margin: 24px 0;
  }
`;

export const PostMeta = styled.div<PostPreviewProps>`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    ${props =>
    props.postIndex === 0 &&
    css`
        flex-direction: row;
      `}
  }
`;

export const LinkButton = styled(Link)`
  text-align: right;
`;

export const Button = styled.button`
  background-color: #00143c;
  border: none;
  border-radius: 8px;
  color: #eee;
  font-size: 14px;
  margin-bottom: 8px;
  padding: 8px 16px;

  &:hover {
    background: ${darken(0.05, '#00143c')};
  }
`;
