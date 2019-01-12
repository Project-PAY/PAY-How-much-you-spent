import * as React from 'react';
import './welcome.scss';

const Welcome:React.ComponentType = () => (
  <div className="welcome">
    <h1>PAY</h1>
    <h2>How much you spent</h2>
    <img
      src="../../assets/images/img-setting-background.png"
      alt="배경사진"
    />
  </div>
);

export default Welcome;