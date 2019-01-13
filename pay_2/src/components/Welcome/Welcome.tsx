import * as React from 'react';
import MainImg from '../../assets/images/img-setting-background.png';
import './welcome.scss';
import {Link} from 'react-router-dom';
import MainTitle from '../common/MainTitle/MainTitle';

const Welcome:React.ComponentType = () => (
  <div className="welcome">
    <MainTitle />
    <img
      src={MainImg}
      alt="배경사진"
    />
    <Link to="/setting">
      <button>
        <span>환영합니다!</span>
      </button>
    </Link>
  </div>
);

export default Welcome;