import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import { AllState } from '../store/storeState'
import { Button } from '../styles/flipButton'

export const FlipButton: React.FC = () => {
  const openSelecter = (state: AllState) => state.isOpenFlip.isFlip
  const flipped = useSelector(openSelecter)
  console.log(flipped)
  const dispatch = useDispatch()
  library.add(faSync)
  const flip = flipped ? 'CLOSE' : 'OPEN'

  return (
    <Button onClick={() => dispatch({type: flip})}>
      <FontAwesomeIcon icon={faSync}  />
    </Button>
  )
}