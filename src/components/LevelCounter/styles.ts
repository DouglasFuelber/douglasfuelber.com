import styled from 'styled-components';

export const Container = styled.div`
  .level-counter {
    background-color: #cccccc;
    display: block;
    height: 3px;
    margin-top: 8px;
    overflow: hidden;

    .level-counter-item {
      background-color: #70a1ff;
      height: inherit;
      transition-duration: 2s;
    }
  }
`;
