import styled from 'styled-components';

export const Container = styled.footer`
  align-items: center;
  background: #00143C;
  border-top: 4px solid #70A1FF;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0 24px;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  max-width: 1144px;
  width: 100%;

  @media(min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  @media(min-width: 768px) {
    margin-bottom: 0;
  }

  a {
    color: #eee;
    margin: 0 16px;
  }
`;

export const Copyright = styled.div`
  align-items: center;
  color: #eee;
  display: flex;
  font-size: 12px;
  justify-content: center;

  img {
    height: 12px;
  }

  h4 {
    margin-left: 8px;
  }
`;
