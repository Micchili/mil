import styled from 'styled-components'

export const Button = styled.button`
  transition: .3s;
  background-color: #003888;
  color: #FFFFFF;
  border-radius: 50px 50px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.8);

  &:hover {
    background-color: #FFFFFF;
    color: #222222;
  }
  
  @media screen and (min-width: 1024px) {
    width: 400px;
    font-size: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 300px;
    font-size: 40px;
  }
  @media screen and (max-width: 767px) {
    width: 200px;
    font-size: 30px;
  }
`