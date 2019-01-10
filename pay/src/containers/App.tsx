import * as React from 'react';
import {Route} from 'react-router-dom';
import {
  SplashMain,
  Welcome,
  Setting
} from '../routes';
import '../style/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact={true}
          path="/"
          component={SplashMain}
        />
        <Route path="/welcome" component={Welcome} />
        <Route path="/setting" component={Setting} />
      </div>
    );
  }
}

export default App;
