import styled from 'styled-components'

export const H2 = styled.h2`
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`