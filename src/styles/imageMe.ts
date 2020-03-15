import styled from 'styled-components';

export const Image = styled.img`
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 1024px) {
    height: 300px;
    width: 400px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 300px;
    width: 400px;
  }
  @media screen and (max-width: 767px) {
    height: 180px;
    width: 230px;
  }
`;
