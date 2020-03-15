import styled from 'styled-components'

type IProps = {
  skill?: number
}

export const Section = styled.section`
  border-radius: 17px;
  background-color: #FAFAFA;
  padding-left: 10px;

  @media screen and (min-width: 1024px) {
    width: 700px;
    height: 70px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 250px;
    height: 60px;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 60px;
  }
`

export const Div = styled.div`
  width: 98%;
  border: solid #000000 2px;
`

export const Bar = styled.div`
  width: ${(props: IProps) => props.skill}%;
  height: 30px;
  background-color: #555555;
  color: #FFFFFF;

  @media screen and (min-width: 1024px) {
    height: 30px;
    font-size: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 20px;
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    height: 20px;
    font-size: 20px;
  }
`

export const H2 = styled.h2`
  padding-left: 10px;

  @media screen and (min-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const Button = styled.h2`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
`
