import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  p {
    margin-bottom: 16px;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;

    > div:not(:first-child) {
      margin-left: 8px;
    }

    > div:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const Button = styled.button`
  background-color: #00143c;
  border: none;
  border-radius: 8px;
  color: #eee;
  font-weight: 600;
  margin-bottom: 8px;
  padding: 8px 16px;

  &:hover {
    background: ${darken(0.05, '#00143c')};
  }
`;
