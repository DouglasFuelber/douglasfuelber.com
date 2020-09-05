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
    padding-left: 8px;

    &.active {
        font-weight: bold;
    }
  }
`;
