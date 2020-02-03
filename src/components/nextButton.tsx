import * as React from 'react';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, P} from '../styles/nextButton';
import {Link} from 'react-router-dom';

type IProps = {
  linkTo: '/' | '/about' | '/skills';
  text: string;
};

export const NextButton: React.FC<IProps> = props => {
  return (
    <Link to={props.linkTo}>
      <Button>
        <P>
          {props.text} <FontAwesomeIcon icon={faArrowCircleRight} />
        </P>
      </Button>
    </Link>
  );
};
