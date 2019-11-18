import * as React from 'react'
import { ImageMe } from '../components/imageMe'
import { SnsLink } from '../components/snsLink'
import { Article, DivCenter } from '../styles/bisinessCard'
import { NamePlate } from './namePlate'

export const BisinessCard: React.FC = () => {
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