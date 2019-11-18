import * as React from 'react'
import * as Styled from './styles/App'
import { Mil } from './pages/mil'
import { createStore } from 'redux'
import Flip from './store/isFlip'
import { Provider } from 'react-redux'

const store = createStore(Flip)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Styled.Global />
      <Mil />
    </Provider>
  )
}

export default App;
