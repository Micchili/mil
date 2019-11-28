import * as React from 'react';
import skills from '../text/text.json';
import {
  DivRight,
  BackCardWarp,
  DivCenter,
  DivLeft,
  SkillTextWrap,
} from '../styles/backBisinesCard';
import {CardText} from '../components/cardText';
import {SkillBar} from '../components/skillBar';
import {FlipButton} from '../components/flipButton';
import {CloseButton} from '../components/closeButton';
import {SkillText} from '../components/skillText';

export const BackBisinessCard: React.FC = () => {
  const [discription, setDiscription] = React.useState(0);
  return (
    <BackCardWarp>
      <CloseButton />
      <DivCenter>
        <DivLeft>
          <CardText text={'Skills'} />
          <SkillBar
            text={'HTML/CSS'}
            skill={90}
            onClick={() => setDiscription(0)}
          />
          <SkillBar
            text={'JavaScript'}
            skill={70}
            onClick={() => setDiscription(1)}
          />
          <SkillBar
            text={'React'}
            skill={70}
            onClick={() => setDiscription(2)}
          />
          <SkillBar
            text={'Vue'}
            skill={60}
            onClick={() => setDiscription(3)}
          />
          <SkillBar
            text={'php'}
            skill={70}
            onClick={() => setDiscription(4)}
          />
          <SkillBar
            text={'Laravel'}
            skill={70}
            onClick={() => setDiscription(5)}
          />
          <SkillBar
            text={'FireBase'}
            skill={30}
            onClick={() => setDiscription(6)}
          />
        </DivLeft>
      </DivCenter>
      <DivCenter>
        <DivRight>
          <SkillTextWrap>
            <SkillText title={skills.text.title[discription]} text={skills.text.context[discription]} />
          </SkillTextWrap>
          <FlipButton />
        </DivRight>
      </DivCenter>
    </BackCardWarp>
  );
};
