import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  &.dark {
    background: #001950;
  }
`;

export const ChildrenWrapper = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1144px;
  padding: 0 16px;
  width: 100%;
`;
