import * as React from 'react'

import{ Image }from '../styles/imageMe'
import CharaImage from '../image/varchal.png'
import RealImage from '../image/mil.jpg'

export const ImageMe: React.FC = () => {
  const [skin,setSkin] = React.useState(CharaImage)
  const handleClick = () => skin === CharaImage ? setSkin(RealImage) : setSkin(CharaImage)

  return (
    <button onClick={handleClick}>
      <Image src={skin} />
    </button>
  )
}