import * as React from 'react';
import IBase from '../../@types/models/base';
import MainTitle from '../common/MainTitle/MainTitle';
import './setting.scss';
import Input from '../common/Input/Input';

interface IState extends IBase {
  [key: string]: any;
}

class Setting extends React.Component<{}, IState> {
  state: IState = {
    currentMoney: 0,
    hasFixedIncome: false,
    fixedIncome: 0,
    incomeCycle: 0
  }

  onChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [name]: value
    }, () => {
      console.log('--Current State --');
      console.dir(this.state);
    });
  }

  render() {
    /* const {
      currentMoney,
      hasFixedIncome,
      fixedIncome,
      incomeCycle
    } = this.state;*/

    return (
      <div className="setting">
        <MainTitle />
        <Input
          name="CurrentMoney"
          value={this.state.currentMoney}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Setting;