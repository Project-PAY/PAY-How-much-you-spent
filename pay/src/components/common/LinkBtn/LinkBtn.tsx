import * as React from 'react';
import {Link} from 'react-router-dom';
import './link-btn.scss';

interface ILinkBtnProps {
  to: string;
  text: string;
}

const LinkBtn:React.ComponentType<ILinkBtnProps> = ({
  to,
  text
}) => (
  <Link to={to}>
    <button>
      <span>{text}</span>
    </button>
  </Link>
);

export default LinkBtn;
