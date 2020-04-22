import * as React from 'react'

import{ Image }from '../styles/imageMe'
import skin from '../image/varchal.png'

export const ImageMe: React.FC = () => {
  return (
    <Image src={skin} />
  )
}