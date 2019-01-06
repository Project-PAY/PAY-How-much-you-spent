import * as React from 'react';
import SplashMain from '../components/SplashMain';
import '../style/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SplashMain />
      </div>
    );
  }
}

export default App;
