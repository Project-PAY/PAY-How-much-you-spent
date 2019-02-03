import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import './link-btn.scss';

interface ILinkBtnProps extends RouteComponentProps<any> {
  to: string;
  text: string;
  onClick?: () => void;
  isComplete?: boolean;  
}

// TODO: 좀 더 나은 구문으로 변경하기

class LinkBtn extends React.Component<ILinkBtnProps> {
  static defaultProps = {
    isComplete: true
  }

  render() {
    const {
      to,
      text,
      onClick,
      history,
      isComplete
    } = this.props;

    return (
      <button onClick={() => {
        onClick && onClick();
        isComplete && history.push(to);
      }}
      >
        <span>{text}</span>
      </button>
    );
  }
}

export default withRouter(LinkBtn);
