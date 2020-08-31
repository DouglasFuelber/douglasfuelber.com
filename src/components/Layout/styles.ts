import styled from 'styled-components';

export const Container = styled.main`
  background: #eee;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 0 16px;
  width: 100%;

  &.dark {
    background: #001950;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1144px;
`;
