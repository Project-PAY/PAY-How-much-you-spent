import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {loadState} from '../../lib/localStorage';
import './splash-main.scss';

interface IProps extends RouteComponentProps<any> { }

class SplashMain extends React.Component<IProps> {
  componentDidMount() {
    const pushTo = loadState() ? '/main' : '/welcome';

    setTimeout(() => {
      this.props.history.push(pushTo);
    }, 2500);
  }

  render() {
    return (
      <div className="splash-main">
        <span>PAY</span>
      </div>
    );
  }
};

export default withRouter(SplashMain);