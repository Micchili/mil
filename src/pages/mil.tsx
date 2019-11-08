import * as React from 'react'
import { BisinessCard } from '../layouts/businessCard'
import { Triangle } from '../components/triangle'
import { BackGround } from '../styles/background'
import { CircleDiv } from '../styles/circle'
import { SquareDiv } from '../styles/square'

export const Mil: React.FC = () => {
  return (
    <BackGround>
      <Triangle />
      <CircleDiv />
      <SquareDiv />
      <BisinessCard />
    </BackGround> 
  )
}

