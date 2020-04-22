import styled from 'styled-components'

export const H1 = styled.h1`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
  /* color: #ACB6E5; */
  color: #0068B7;
  background: transparent;
  font-weight: 700;
  will-change: transform, opacity;
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;


  @media screen and (min-width: 1024px) {
    font-size: 13rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 10rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`