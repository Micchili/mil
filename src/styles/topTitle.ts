import styled from 'styled-components'

export const H1 = styled.h1`
  color: #ACB6E5;
  background: linear-gradient(0deg, #ACB6E5, #86FDE8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 1024px) {
    font-size: 9rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`