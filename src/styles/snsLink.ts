import styled from 'styled-components'

export const DivWraperSnsLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: solid 3px #ffffff;

  @media screen and (min-width: 1024px) {
    height: 300px;
    font-size: 45px;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 150px;
    font-size: 40px;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (max-width: 767px) {
    height: 80px;
    font-size: 15px;
  }
`