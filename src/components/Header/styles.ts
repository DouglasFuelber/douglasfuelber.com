import styled from 'styled-components';

export const Container = styled.header`
  background: #00143C;
  border-bottom: 4px solid #70A1FF;
  display: flex;
  height: 72px;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  max-width: 1144px;
  padding: 16px;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 80px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 24px;

    li {
      a {
        color: #eee;
        cursor: pointer;
        font-size: 16px;
        padding-left: 16px;

        &::first-child {
          padding-left: 0;
        }

        &.active {
            font-weight: bold;
        }
      }
    }
  }
`;
