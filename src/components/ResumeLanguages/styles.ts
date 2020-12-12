import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h3 {
    color: #00143c;
    font-weight: 800;
    margin-bottom: 32px;
    margin-top: 36px;
    text-transform: uppercase;
  }
`;

export const LanguagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Language = styled.div`
  border-left: 3px solid #70a1ff;
  margin-bottom: 16px;
  padding-left: 8px;
  width: 100%;

  @media (min-width: 768px) {
    padding-right: 32px;
    width: 33%;
  }

  h4 {
    color: #00143c;
    font-size: 16px;
    font-weight: 700;
  }

  span {
    color: #00143c;
    font-size: 14px;
    font-weight: 500;
  }
`;
