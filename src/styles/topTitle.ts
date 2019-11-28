import styled from 'styled-components'

export const H1 = styled.h1`
  @media screen and (min-width: 1024px) {
    font-size: 100px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 70px;
  }
  @media screen and (max-width: 767px) {
    font-size: 50px;
  }
`