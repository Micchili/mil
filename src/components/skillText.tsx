import * as React from 'react'
import { Section, H2, P } from '../styles/skillText'

type IProps = {
  title: string
  text: string
}

export const SkillText: React.FC<IProps> = (props) => {
  return (
    <Section>
      <H2>{props.title}</H2>
      <P>{props.text}</P>
    </Section>
  )
}