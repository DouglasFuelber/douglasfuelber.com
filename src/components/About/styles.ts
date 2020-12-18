import styled, { css } from 'styled-components';

interface IAboutProps {
  vertical?: boolean;
}

export const Container = styled.div<IAboutProps>`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    ${props =>
    !props.vertical &&
    css`
        flex-direction: row;
      `}
  }

  img {
    border: 4px solid #70a1ff;
    border-radius: 50%;
    height: 180px;
    width: 180px;
  }
`;

export const AboutDescription = styled.p<IAboutProps>`
  color: #00143c;
  border-left: 4px solid #70a1ff;
  flex: 1;
  margin-bottom: 24px;
  margin-top: 24px;
  padding-left: 16px;

  @media (min-width: 768px) {
    ${props =>
    !props.vertical &&
    css`
        margin-left: 24px;
      `}
  }
`;
