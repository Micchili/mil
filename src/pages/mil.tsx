import * as React from 'react'
import { BackGround } from '../styles/background'
import { Card } from '../layouts/card'
import { EnterButton } from '../components/enterButton'
import { TopTitle } from '../components/topTitle'
import { Div } from '../styles/mil'

export const Mil: React.FC = () => {
  return (
    <BackGround>
      <TopTitle text={'Portfolio'} />
      <Div>
        <EnterButton />
      </Div>
      <Card />
    </BackGround> 
  )
}

