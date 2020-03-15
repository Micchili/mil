import styled from 'styled-components';

export const Article = styled.article`
  width: 95vw;
  height: 95vh;
  border-radius: 20px;
  display: flex;
  background-color: #dfdfdf;

  @media screen and (min-width: 1024px) {
    justify-content: space-around;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const DivCenter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
