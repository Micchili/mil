import * as React from 'react'
import mil from '../image/mil.jpg'
import { Image } from '../styles/imageMe'

export const ImageMe: React.FC = () => {
  return (
    <Image src={mil} alt='michishita' />
  )
}