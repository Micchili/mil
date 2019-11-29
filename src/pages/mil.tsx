import * as React from 'react'
import { BackGround } from '../styles/background'
import { Card } from '../layouts/card'
import { EnterButton } from '../components/enterButton'
import { TopTitle } from '../components/topTitle'
import { Div } from '../styles/mil'
import { AllState } from '../store/storeState'
import { useSelector } from 'react-redux'

export const Mil: React.FC = () => {
  const openSelecter = (state: AllState) => state.isOpenFade.isFade
  const isOpen = useSelector(openSelecter)

  return (
    <BackGround state={isOpen}>
      <TopTitle text={'Portfolio'} />
      <Div>
        <EnterButton />
      </Div>
      <Card />
    </BackGround> 
  )
}

