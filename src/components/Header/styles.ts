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
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }

      a {
        color: #eee;
        cursor: pointer;
        font-size: 16px;
        position: relative;

        &:hover {
          &::after {
            border-bottom: 2px solid #70A1FF;
            bottom: -4px;
            content: "";
            left: 0;
            position: absolute;
            width: 100%;
          }
        }

        &.active {
            font-weight: bold;

            &::after {
              border-bottom: 2px solid #70A1FF;
              bottom: -4px;
              content: "";
              left: 0;
              position: absolute;
              width: 100%;
            }
        }
      }
    }
  }
`;
