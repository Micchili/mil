import * as React from 'react'
import { H2 } from '../styles/cardText'

type IProps = {
  text: string
}

export const CardText: React.FC<IProps> = (props) => {
  return (
    <H2>{props.text}</H2>
  )
}