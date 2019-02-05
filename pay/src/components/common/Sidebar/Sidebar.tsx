import * as React from 'react';
import cn from 'classnames';
import './sidebar.scss';

interface ISidebarProps {
  isOpened: boolean;
}

const Sidebar:React.FC<ISidebarProps> = ({
  isOpened
}) => {
  return (
    <div className={cn(
      'sidebar',
      {'is-opened': isOpened}
    )}>
      Sidebar
    </div>
  );
};

export default Sidebar;