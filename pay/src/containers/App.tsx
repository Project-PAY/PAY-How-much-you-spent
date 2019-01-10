import * as React from 'react';
// import SplashMain from '../components/SplashMain/SplashMain';
import Welcome from '../components/Welcome/Welcome';
import '../style/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/*<SplashMain />*/}
        <Welcome />
      </div>
    );
  }
}

export default App;
