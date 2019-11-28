import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../styles/closeButton'
import { useDispatch } from 'react-redux'

export const CloseButton: React.FC = () => {
  const dispatch = useDispatch()
  library.add(faTimesCircle)

  return(
    <Button onClick={() => {dispatch({ type: "FADE_OUT" })}}>
      <FontAwesomeIcon icon={faTimesCircle} />
    </Button>
  )
}
