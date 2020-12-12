import styled, { css } from 'styled-components';

interface JobDateProps {
  isCurrent?: boolean;
}

export const Container = styled.div`
  width: 100%;

  h3 {
    color: #00143c;
    font-weight: 800;
    margin-bottom: 36px;
    margin-top: 32px;
    text-transform: uppercase;
  }
`;

export const Job = styled.div`
  border-left: 3px solid #70a1ff;
  margin-left: 8px;
  padding: 32px 0 32px 16px;
  position: relative;

  @media (min-width: 768px) {
    margin-left: 84px;
    padding: 16px 0 16px 24px;
  }

  p {
    margin-bottom: 8px;
  }
`;

export const JobTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h4 {
    color: #00143c;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    padding-right: 8px;
  }

  h5 {
    border-left: 3px solid #70a1ff;
    color: #00143c;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    padding-left: 8px;

    a {
      color: #00143c;

      svg {
        font-size: 10px;
        margin-left: 6px;
      }
    }
  }
`;

export const JobDate = styled.div<JobDateProps>`
  align-items: center;
  display: flex;
  bottom: -8px;
  justify-content: flex-start;
  left: -10px;
  position: absolute;
  width: 92px;

  ${props =>
    props.isCurrent &&
    css`
      bottom: initial;
      top: -8px;
    `}

  span {
    color: #70a1ff;
    font-size: 14px;
    font-weight: 700;
    margin-left: 8px;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
    left: -86px;

    span {
      color: #00143c;
      margin-left: 0;
      margin-right: 24px;
    }
  }
`;

export const DateIndicator = styled.div<JobDateProps>`
  background-color: #70a1ff;
  border: 3px solid #70a1ff;
  border-radius: 50%;
  height: 16px;
  width: 16px;

  ${props =>
    props.isCurrent &&
    css`
      background-color: #eee;
    `}

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
  }
`;
