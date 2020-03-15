import * as React from 'react'
import { AboutWrap } from '../styles/about'
import SelfIntroduction from '../layouts/selfIntroduction'

const About: React.FC = () => {
  return (
    <AboutWrap>
      <SelfIntroduction />
    </AboutWrap>
  )
}

export default About;