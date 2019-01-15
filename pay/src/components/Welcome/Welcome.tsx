import * as React from 'react';
import MainImg from '../../assets/images/img-setting-background.png';
import MainTitle from '../common/MainTitle/MainTitle';
import LinkBtn from '../common/LinkBtn/LinkBtn';
import './welcome.scss';

const Welcome:React.ComponentType = () => (
  <div className="welcome">
    <MainTitle />
    <img
      src={MainImg}
      alt="배경사진"
    />
    <LinkBtn
      to="/setting"
      text="환영합니다!"
    />
  </div>
);

export default Welcome;