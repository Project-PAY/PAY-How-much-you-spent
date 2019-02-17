import * as React from 'react';
import cn from 'classnames';
import MainTitle from '../MainTitle/MainTitle';
import {
  ICON_BLOG,
  ICON_GITHUB
} from '../../../constants/imgsAndIcons';
import './sidebar.scss';

interface ISidebarProps {
  isOpened: boolean;
  onClose: () => void;
  isBtnClicked: boolean;
}

const Sidebar:React.FC<ISidebarProps> = ({
  isOpened,
  onClose,
  isBtnClicked
}) => {
  return (
    <div className="sidebar">
      <div
        className={cn({'sidebar-cover': isOpened})}
        onClick={onClose}
      />
      <div className={cn(
        'sidebar-form',
        {'is-form-opened': isOpened},
        {'is-form-closed': isBtnClicked && !isOpened}
      )}
      >
        <div className="sidebar-header">
          <MainTitle />
        </div>
        <a
          className="link"
          href="https://pewww.tistory.com"
          target="_blank"
        >
          <img
            src={ICON_BLOG}
            alt="블로그 이동"
            style={{width: '26px'}}
          />
          <span>블로그</span>
        </a>
        <a
          className="link"
          href="https://github.com/pay-how-much-you-spent/PAY-How-much-you-spent"
          target="_blank"
        >
          <img
            src={ICON_GITHUB}
            alt="깃허브 이동"
            style={{width: '14px', height: '25px'}}
          />
          <span>깃허브</span>
        </a>
        <footer>
          <span className="copyright">
            Copyright PAY-How much you spent. All Rights Reserved.
          </span>
          <span className="version">
            version 1.0.0
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;