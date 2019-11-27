import * as React from 'react'
import { H1 } from '../styles/topTitle'

type IProps = {
  text: string
}

export const TopTitle: React.FC<IProps> = (props) => {
  return (
    <H1>{props.text}</H1>
  )
}