import * as React from 'react'
import{ Image }from '../styles/imageMe'
import image from '../image/me3.jpg'
// import { useDispatch , useSelector } from 'react-redux'
// import { ImageUrl } from '../store/getImage'

export const ImageMe: React.FC = () => {
  // const getSelecter = (state: ImageUrl) => state.imageUrl
  // const get = useSelector(getSelecter)
  // const dispatch = useDispatch()

  return (
    <Image src={image} />
  )
}