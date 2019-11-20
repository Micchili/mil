import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import { isFlip } from '../store/isFlip'

export const FlipButton: React.FC = () => {
  const openSelecter = (state: isFlip) => state.flipped
  const flipped = useSelector(openSelecter)
  const dispatch = useDispatch()
  library.add(faSync)
  const flip = flipped ? 'OPEN' : 'CLOSE'

  return (
    <button onClick={() => dispatch({type: flip})}>
      <FontAwesomeIcon icon={faSync}  />
    </button>
  )
}