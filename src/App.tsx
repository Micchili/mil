import * as React from 'react';
import { Provider } from 'react-redux';
import * as Styled from './styles/App';
import { Switch, Route } from 'react-router-dom';
import { Portfolio } from './pages/portforio';
import About from './pages/about'
import { store } from './store/storeState';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Styled.Global />
      <Switch>
        <Route path="/" exact={true} component={Portfolio} />
        <Route path="" exact={false} component={About} />
      </Switch>
    </Provider>
  );
};

export default App;
