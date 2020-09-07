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
    font-size: 100px;
    font-weight: 600;
  }

  h2 {
    color: #00143c;
    font-weight: 800;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;

export const LinkButton = styled.a`
  background-color: #00143c;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;

  &:hover {
    background: ${darken(0.05, '#00143c')};
  }
`;
