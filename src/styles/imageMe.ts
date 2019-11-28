import styled from 'styled-components'

export const Image = styled.img`
  height: 500px;
  width: 620px;
  border-radius: 20px;
  border: solid 10px #5555ff;

  @media screen and (min-width: 1024px) {
    height: 500px;
    width: 620px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 300px;
    width: 400px;
  }
  @media screen and (max-width: 767px) {
    height: 180px;
    width: 230px;
  }
`