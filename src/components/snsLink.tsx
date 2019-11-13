import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faGithub, faInstagram,} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { DivWraperSnsLink } from '../styles/snsLink'

export const SnsLink: React.FC = () => {
  library.add(faTwitter,faGithub,faInstagram,faEnvelope)

  return (
    <DivWraperSnsLink>
      <address>
        <FontAwesomeIcon icon={faEnvelope} />
        wot.dannbo@gmail.com
      </address>
      <a href="https://github.com/Micchili" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
        github.com/Micchili
      </a>
      <a href="https://twitter.com/wagahaiwanekod7" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
        twitter.com/wagahaiwanekod7
      </a>
      <a href="https://www.instagram.com/micchili/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
        instagram.com/micchili
      </a>
    </DivWraperSnsLink>
  )
}
