import * as React from 'react'
import{ Image }from '../styles/imageMe'
import image from '../image/mil.jpg'

export const ImageMe: React.FC = () => {
  return (
    <Image src={image} />
  )
}