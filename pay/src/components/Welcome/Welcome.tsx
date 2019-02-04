import * as React from 'react';
import {IMG_SETTING_BACKGROUND} from '../../constants/imgsAndIcons';
import MainTitle from '../common/MainTitle/MainTitle';
import LinkBtn from '../common/LinkBtn/LinkBtn';
import './welcome.scss';

const Welcome:React.ComponentType = () => (
  <div className="welcome">
    <MainTitle />
    <img
      src={IMG_SETTING_BACKGROUND}
      alt="배경사진"
    />
    <LinkBtn
      to="/setting"
      text="환영합니다!"
    />
  </div>
);

export default Welcome;