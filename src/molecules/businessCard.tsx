import * as React from 'react'
import { ImageMe } from '../components/imageMe'
import { SnsLink } from '../components/snsLink'
import { Article, DivCenter } from '../styles/bisinessCard'
import { NamePlate } from './namePlate'

type IProps = {
  style?: {}
}

export const BisinessCard: React.FC<IProps> = () => {
  return (
    <Article>
      <DivCenter>
        <ImageMe />
      </DivCenter>
      <DivCenter>
        <NamePlate />
        <SnsLink />
      </DivCenter>
    </Article>
  )
}