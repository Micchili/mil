import styled from 'styled-components'

type IProps = {
  state: boolean
}

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: ${(props: IProps) => props.state ? "#000000" : "#F1FAFF" };
  opacity: ${(props: IProps) => props.state ? "0.8" : "1" };
`