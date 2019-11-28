import styled from 'styled-components'

export const Name = styled.h2`
  font-size: 100px;
  padding-bottom: 5px;

  @media screen and (min-width: 1024px) {
    font-size: 100px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (max-width: 767px) {
    font-size: 50px;
  }
`