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
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  max-width: 1144px;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;

  img {
    height: 24px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 24px;

    li {
      a {
        border-radius: 24px;
        color: #eee;
        font-size: 14px;
        font-weight: 700;
        margin-right: 4px;
        text-transform: uppercase;
        padding: 4px 12px;

        &:hover {
          background-color: #001950;
        }

        &.active {
          background-color: #eee;
          color: #00143C;
        }
      }
    }
  }
`;
