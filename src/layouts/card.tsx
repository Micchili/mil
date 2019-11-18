import * as React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useSpring , animated} from 'react-spring'
import { BackBisinessCard } from '../molecules/backBisinessCard'
import { BisinessCard } from '../molecules/businessCard'
import { isFlip } from '../store/isFlip'

export const Card: React.FC = () => {
  const openSelecter = (state: isFlip) => state.flipped
  const flipped = useSelector(openSelecter)
  const dispach = useDispatch()

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const AnimetionBisinessCard = animated(BisinessCard)
  const AnimetionBackBisinessCard = animated(BackBisinessCard)

  return (
    <>
      <AnimetionBisinessCard style={{ opacity: opacity.interpolate((o: any) => 1 - o), transform }} />
      <AnimetionBackBisinessCard style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </>
  )
}