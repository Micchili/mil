import * as React from 'react';
import {Section, H2, Div, Bar, Button} from '../styles/skillBar';

type IProps = {
  text: string;
  skill: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export const SkillBar: React.FC<IProps> = props => {
  return (
    <Section>
      <Button onClick={props.onClick}>
        <H2>{props.text}</H2>
        <Div>
          <Bar skill={props.skill}>{props.skill}%</Bar>
        </Div>
      </Button>
    </Section>
  );
};
