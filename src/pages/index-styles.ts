import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  border-left: 4px solid #00143C;
  padding-left: 16px;

  h1 {
    color: #70A1FF;
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;

    @media(min-width: 768px) {
      font-size: 40px;
      line-height: 56px;
    }

    strong {
      color: #00143C;
      font-size: 36px;
      font-weight: 800;

      @media(min-width: 768px) {
        font-size: 56px;
      }
    }
  }

  h2 {
    color: #70A1FF;
    font-size: 24px;
    font-weight: 800;

    @media(min-width: 768px) {
      font-size: 40px;
    }
  }
`;

export const IconsWrapper = styled.div`

`;
