import * as React from 'react'
import { NameText } from '../components/nameText'
import { CardText } from '../components/cardText'
import { NamePlateArticle } from '../styles/namePlate'

export const NamePlate: React.FC = () => {
  return (
    <NamePlateArticle>
      <NameText />
      <CardText text={'HAL東京 Web開発学科3年'} />
      <CardText text={'2021年3月卒業予定'} />
    </NamePlateArticle>
  )
}