import styled from 'styled-components';

export const Image = styled.img`
  box-shadow: 1px 2px 10px rgba(0,0,0,0.5);
  transition: 300ms;
  
  &:hover {
    box-shadow: 1px 10px 20px rgba(0,0,0,0.5);
  }

  @media screen and (min-width: 1024px) {
    height: 370px;
    width: 500px;
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
