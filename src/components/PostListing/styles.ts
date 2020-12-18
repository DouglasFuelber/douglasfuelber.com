import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const PostsMeta = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 16px;
    width: 33.3%;
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 768px) {
    padding-right: 16px;
    width: 66.6%;
  }
`;
