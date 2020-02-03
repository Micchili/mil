import styled from 'styled-components'

export const Section = styled.section`
  height: 90%;
  border-radius: 20px;
  background-color: #FAFAFA;
  padding: 7px;
  overflow: scroll;

  @media screen and (min-width: 1024px) {
    width: 500px;
    line-height: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 300px;
    line-height: 30px;
  }
  @media screen and (max-width: 767px) {
    width: 120px;
    line-height: 12px;
  }
`

export const H2 = styled.h2`
  font-size: 50px;
  padding-left: 10px;
  padding-bottom:5px;

  @media screen and (min-width: 1024px) {
    font-size: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`

export const P = styled.p`
  font-size: 20px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 19px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`