import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    border: 4px solid #70a1ff;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
`;

export const AboutDescription = styled.p`
  color: #00143c;
  border-left: 4px solid #70a1ff;
  flex: 1;
  margin-bottom: 24px;
  margin-top: 24px;
  padding-left: 16px;

  @media (min-width: 768px) {
    margin-left: 24px;
  }
`;
