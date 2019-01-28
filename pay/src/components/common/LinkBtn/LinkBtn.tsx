import * as React from 'react';
import {Link} from 'react-router-dom';
import './link-btn.scss';

interface ILinkBtnProps {
  to: string;
  text: string;
  onClick?: () => void;
}

/**
 * TODO: Link 속성 때문에 조건에 맞지 않아도 라우터 푸시가 되는데, 이를 방지해야됨
 */

const LinkBtn:React.ComponentType<ILinkBtnProps> = ({
  to,
  text,
  onClick
}) => (
  <Link to={to}>
    <button onClick={onClick}>
      <span>{text}</span>
    </button>
  </Link>
);

export default LinkBtn;
