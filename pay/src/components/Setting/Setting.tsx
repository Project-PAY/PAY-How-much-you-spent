import * as React from 'react';
import IBase from '../../@types/models/base';
import './setting.scss';

interface IState extends IBase { }

class Setting extends React.Component<{}, IState> {
  state: IState = {
    currentMoney: 0,
    hasFixedIncome: false,
    fixedIncome: 0,
    incomeCycle: 0
  }

  render() {
    return (
      <div className="setting">
        Hello
      </div>
    );
  }
}

export default Setting;