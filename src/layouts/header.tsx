import * as React from 'react';
import {Wrap} from '../styles/header';
import {TopTitle} from '../components/topTitle';
import {Bubbles} from '../components/bobble';

export const Header: React.FC = () => {
  return (
    <Wrap>
      <TopTitle text={'Portfolio'} />
      <Bubbles />
    </Wrap>
  );
};
