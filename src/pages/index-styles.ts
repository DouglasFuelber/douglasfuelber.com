import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-intl';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  border-left: 2px solid #00143c;
  padding-left: 16px;

  @media (min-width: 768px) {
    border-left-width: 4px;
  }

  h1 {
    color: #70a1ff;
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 48px;
    }

    strong {
      color: #00143c;
      font-size: 40px;
      font-weight: 800;
      line-height: 48px;

      @media (min-width: 768px) {
        font-size: 64px;
        line-height: 72px;
      }
    }
  }

  h2 {
    color: #70a1ff;
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

export const IconsWrapper = styled.div`
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 64px;

  @media (min-width: 768px) {
    margin-top: 112px;
  }
`;

export const ItemLink = styled(Link)`
  align-items: center;
  display: flex;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: #001950;
    height: 32px;
    width: 32px;

    @media (min-width: 768px) {
      height: 48px;
      width: 48px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    @media (min-width: 768px) {
      margin-left: 16px;
    }

    span {
      color: #70a1ff;
      font-size: 12px;
      font-weight: 600;

      @media (min-width: 768px) {
        font-size: 20px;
      }
    }

    h3 {
      color: #001950;
      font-weight: 800;
      font-size: 21px;
      letter-spacing: -0.015em;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 32px;
      }
    }
  }
`;
