import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  width: 400px;
  font-size: 50px;
  transition: .3s;
  background-color: #003888;
  color: #FFFFFF;
  border-radius: 50px 50px;

  &:hover {
    background-color: #FFFFFF;
    color: #222222;
  }
`