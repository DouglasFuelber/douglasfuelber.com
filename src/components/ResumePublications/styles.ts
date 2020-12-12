import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h3 {
    color: #00143c;
    font-weight: 800;
    margin-bottom: 32px;
    margin-top: 48px;
    text-transform: uppercase;
  }
`;

export const PublicationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Publication = styled.div`
  border-left: 3px solid #70a1ff;
  margin-bottom: 16px;
  padding-left: 8px;
  width: 100%;

  @media (min-width: 768px) {
    padding-right: 32px;
    width: 50%;
  }

  h4 {
    color: #00143c;

    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    padding-right: 8px;

    a {
      color: #00143c;

      svg {
        font-size: 10px;
        margin-left: 6px;
      }
    }
  }

  h5,
  div {
    color: #00143c;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: 8px;

    span {
      border-left: 3px solid #70a1ff;
      color: #00143c;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 8px;
      margin-left: 8px;
      padding-left: 8px;
    }
  }
`;
