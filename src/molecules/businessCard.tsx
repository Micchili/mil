import * as React from 'react'
import { ImageMe } from '../components/imageMe'
import { SnsLink } from '../components/snsLink'
import { Article, DivCenter } from '../styles/bisinessCard'
import { NamePlate } from './namePlate'
import { CloseButton } from '../components/closeButton'
import { FlipButton } from '../components/flipButton'

export const BisinessCard: React.FC = () => {
  return (
    <Article>
      <CloseButton />
      <DivCenter>
        <ImageMe />
      </DivCenter>
      <DivCenter>
        <NamePlate />
        <SnsLink />
      </DivCenter>
      <FlipButton />
    </Article>
  )
}