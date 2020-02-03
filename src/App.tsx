import * as React from 'react';
import {Provider} from 'react-redux';
import * as Styled from './styles/App';
import {Switch, Route, useLocation} from 'react-router-dom';
import {animated, useTransition} from 'react-spring';
import {Mil} from './pages/mil';
import About from './pages/about'
import {store} from './store/storeState';

const App: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
  });

  return (
    <Provider store={store}>
      <Styled.Global />
      {transitions.map(({key, item , props}) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact={true} component={Mil} />
            <Route path="/about" exact={true} component={About} />
          </Switch>
        </animated.div>
      ))}
    </Provider>
  );
};

export default App;
