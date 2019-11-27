import styled from 'styled-components'

type IProps = {
  skill: number
}

export const Section = styled.section`
  width: 700px;
  height: 70px;
  border-radius: 20px;
  background-color: #FAFAFA;
`

export const Div = styled.div`
  width: 80%;
  border: solid #000000 2px;
`

export const Bar = styled.div`
  width: ${(props: IProps) => props.skill}%;
  height: 30px;
  background-color: #555555;
  font-size: 30px;
  color: #FFFFFF;
`

export const H2 = styled.h2`
  font-size: 25px;
  padding-left: 10px;
`
