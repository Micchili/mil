import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FlipButton: React.FC = () => {
  library.add(faSync)
  return (
    <button>
      <FontAwesomeIcon icon={faSync}  />
    </button>
  )
}