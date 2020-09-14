import styled, { css } from 'styled-components';

interface MenuProps {
  isOpen: boolean;
}

export const Container = styled.header`
  background: #00143c;
  border-bottom: 4px solid #70a1ff;
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
  position: relative;

  img {
    width: 80px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div<MenuProps>`
  align-items: center;
  background-color: #00143c;
  bottom: 64px;
  display: flex;
  flex-direction: column;
  height: 0vh;
  justify-content: space-between;
  left: 0;
  overflow: hidden;
  padding-bottom: 0px;
  position: absolute;
  top: 64px;
  transition-duration: 0.5s;
  width: 100%;
  z-index: 1;

  ${props =>
    props.isOpen &&
    css`
      height: 100vh;
      padding-bottom: 88px;
    `}

  @media (min-width: 768px) {
    flex-direction: row;
    height: auto;
    position: relative;
    top: 0;
    transition-duration: 0;
  }
`;

export const Nav = styled.nav`
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 16px;

    @media (min-width: 768px) {
      flex-direction: row;
      margin-left: 24px;
      margin-top: 0;
    }

    li {
      @media (min-width: 768px) {
        margin-left: 16px;

        &:first-child {
          margin-left: 0;
        }
      }

      a {
        color: #eee;
        cursor: pointer;
        font-size: 24px;
        font-weight: 700;
        line-height: 40px;
        position: relative;

        @media (min-width: 768px) {
          font-size: 16px;
          font-weight: 400;
          line-height: 32px;
        }

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
    }
  }
`;
