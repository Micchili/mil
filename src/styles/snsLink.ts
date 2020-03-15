import styled from 'styled-components'

export const DivWraperSnsLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: solid 2px #ffffff;

  @media screen and (min-width: 1024px) {
    height: 120px;
    font-size: 18px;
    padding: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 150px;
    font-size: 37px;
  }
  @media screen and (max-width: 767px) {
    height: 80px;
    font-size: 14px;
  }
`

export const A = styled.a`
  margin-left: 5px;
`