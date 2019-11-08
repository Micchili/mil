import * as React from 'react'
import { NameText } from '../components/nameText'
import { ImageMe } from '../components/imageMe'
import { SnsLink } from '../components/snsLink'
import { Article } from '../styles/bisinessCard'

export const BisinessCard: React.FC = () => {
  return (
    <Article>
      <NameText />
      <ImageMe />
      <SnsLink />
    </Article>
  )
}