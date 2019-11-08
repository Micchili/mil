import * as React from 'react'
import * as Styled from './styles/App'
import { Mil } from './pages/mil'

const App: React.FC = () => {
  return (
    <>
      <Styled.Global />
      <Mil />
    </>
  )
}

export default App;
