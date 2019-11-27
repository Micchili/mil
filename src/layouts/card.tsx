import * as React from 'react';
import {useSelector} from 'react-redux';
import {BisinessCard} from '../molecules/businessCard';
import {CardWarp} from '../styles/card';
import {AllState} from '../store/storeState';
import ReactCardFlip from 'react-card-flip';
import { BackBisinessCard } from '../molecules/backBisinessCard';

export const Card: React.FC = () => {
  const fade = useSelector((state: AllState) => state.isOpenFade.isFade);
  const flip = useSelector((state: AllState) => state.isOpenFlip.isFlip)

  return (
    <CardWarp unmountOnExit in={fade} timeout={550}>
      <ReactCardFlip 
        isFlipped={flip}
        flipSpeedBackToFront={0.5}
        flipSpeedFrontToBack={0.5}
        flipDirection="vertical"
      >
        <BisinessCard />
        <BackBisinessCard />
      </ReactCardFlip>
    </CardWarp>
    
  );
};
