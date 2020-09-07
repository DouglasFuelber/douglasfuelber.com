import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #70a1ff;
    font-size: 56px;
    font-weight: 600;
    line-height: 56px;
  }

  h2 {
    color: #00143c;
    font-weight: 800;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;

export const LinkButton = styled.a`
  background-color: #00143c;
  border: none;
  border-radius: 8px;
  color: #eee;
  font-weight: 600;
  padding: 8px 16px;

  &:hover {
    background: ${darken(0.05, '#00143c')};
  }
`;
