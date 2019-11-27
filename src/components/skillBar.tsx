import * as React from 'react'
import { Section, H2, Div, Bar } from '../styles/skillBar'

type IProps = {
  text: string
  skill: number
}

export const SkillBar: React.FC<IProps> = (props) => {
  return (
    <Section>
      <H2>
        {props.text}
      </H2>
      <Div>
        <Bar skill={props.skill}>
          {props.skill}%
        </Bar>
      </Div>
    </Section>
  )
}