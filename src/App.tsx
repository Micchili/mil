import * as React from 'react'
import * as Styled from './styles/App'
import { Mil } from './pages/mil'
import { Provider } from 'react-redux'
import { store } from './store/storeState'

console.log(store.getState());

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Styled.Global />
      <Mil />
    </Provider>
  )
}

export default App;
