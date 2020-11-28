import styled, { css } from 'styled-components';

interface JobDateProps {
  isCurrent?: boolean;
}

export const Container = styled.div`
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
  margin-left: 84px;
  padding: 16px 0 16px 24px;
  position: relative;

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
    }
  }
`;

export const JobDate = styled.div<JobDateProps>`
  align-items: center;
  display: flex;
  bottom: -8px;
  justify-content: flex-end;
  left: -86px;
  position: absolute;
  width: 92px;

  ${props =>
    props.isCurrent &&
    css`
      bottom: initial;
      top: -8px;
    `}

  span {
    font-size: 14px;
    font-weight: 700;
    margin-right: 8px;
    text-align: center;
    text-transform: uppercase;
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
`;
