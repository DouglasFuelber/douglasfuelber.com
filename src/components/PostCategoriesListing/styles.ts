import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
  width: 100%;

  h3 {
    color: #00143c;
    font-weight: 800;
    margin-bottom: 16px;
    margin-top: 8px;
    text-transform: uppercase;
  }
`;

export const CategoriesList = styled.div`
  border-left: 3px solid #70a1ff;
  padding-left: 16px;

  a {
    color: #00143c;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
    margin-top: 4px;
    margin-right: 24px;
    position: relative;

    &:hover {
      &::after {
        border-bottom: 2px solid #70a1ff;
        bottom: -4px;
        content: '';
        left: 0;
        position: absolute;
        width: 100%;
      }
    }

    &.active {
      font-weight: bold;

      &::after {
        border-bottom: 2px solid #70a1ff;
        bottom: -4px;
        content: '';
        left: 0;
        position: absolute;
        width: 100%;
      }
    }
  }
`;
