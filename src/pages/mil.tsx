import * as React from 'react';
import {BackGround} from '../styles/background';
import {TopTitle} from '../components/topTitle';
import {AllState} from '../store/storeState';
import {useSelector} from 'react-redux';
import {Bubbles} from '../components/bobble';
import {Div} from '../styles/mil';
import {NextButton} from '../components/nextButton';

export const Mil: React.FC = () => {
  const openSelecter = (state: AllState) => state.isOpenFade.isFade;
  const isOpen = useSelector(openSelecter);

  return (
    <BackGround state={isOpen}>
      <Bubbles />
      <Div>
        <TopTitle text={'Portfolio'} />
        <NextButton linkTo={'/about'} text={'About'} />
      </Div>
    </BackGround>
  );
};
