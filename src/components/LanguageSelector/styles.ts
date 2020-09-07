import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const LanguagesWrapper = styled.ul`
  border-left: 2px solid #70A1FF;
  display: flex;
  list-style: none;
  margin-left: 8px;

  li {
    color: #eee;
    cursor: pointer;
    font-size: 16px;
    margin-left: 8px;
    position: relative;

    &.active {
        font-weight: bold;

        &::after {
          border-bottom: 2px solid #70A1FF;
          bottom: -2px;
          content: "";
          left: 0;
          position: absolute;
          width: 100%;
        }
    }
  }
`;
