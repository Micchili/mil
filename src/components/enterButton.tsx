import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const EnterButton: React.FC = () => {
  library.add(faAngleRight,faAngleLeft)
  return (
    <button>
      <div>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <p>Enter</p>
      <div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </button>
  )
}