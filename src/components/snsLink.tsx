import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Section } from '../styles/snsLink'

export const SnsLink: React.FC = () => {
  library.add(faTwitter,faGithub,faInstagram)

  return (
    <Section>
      <h3>Link</h3>
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
    </Section>
  )
}
