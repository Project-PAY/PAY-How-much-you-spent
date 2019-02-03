import * as React from 'react';
import SideBarIcon from '../../assets/icons/icon-sidebar.png';
import PlusIcon from '../../assets/icons/icon-plus.png';
import './main.scss';
import {convertToSpecificFormat} from 'src/lib/convertNumber';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <header>
          <img
            src={SideBarIcon}
            alt="사이드바"
            className="icon-sidebar"
          />
          <span className="total">Total</span>
          <h1>₩ {convertToSpecificFormat('345672')}</h1>
          <img
            src={PlusIcon}
            alt="수입/지출 추가"
            className="icon-plus"
          />
        </header>
        <ul className="current-infos">
          <li>dd</li>
        </ul>
      </div>
    );
  }
}

export default Main;