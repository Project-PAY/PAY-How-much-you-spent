import * as React from 'react';
import {Link} from 'react-router-dom';
import './link-btn.scss';

interface ILinkBtnProps {
  to: string;
  text: string;
  onClick?: () => void;
}

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
