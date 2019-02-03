import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {loadState} from '../../lib/localStorage';
import './splash-main.scss';
import {SECOND} from 'src/constants/times';

interface IProps extends RouteComponentProps<any> {}

class SplashMain extends React.Component<IProps> {
  componentDidMount() {
    const pushTo = loadState('isRegistered') ? '/main' : '/welcome';

    setTimeout(() => {
      this.props.history.push(pushTo);
    }, 2.5 * SECOND);
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