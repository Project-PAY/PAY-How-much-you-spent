import * as React from 'react';
import IBase from '../../@types/models/base';
import MainTitle from '../common/MainTitle/MainTitle';
import Input from '../common/Input/Input';
import {
  convertToSpecificFormat,
  convertToNormalFormat
} from '../../lib/convertNumber';
import './setting.scss';

interface IState extends IBase {
  [key: string]: any;
}

class Setting extends React.Component<{}, IState> {
  state: IState = {
    currentMoney: '',
    hasFixedIncome: false,
    fixedIncome: '',
    incomeCycle: ''
  }

  onChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [name]: value && convertToSpecificFormat(convertToNormalFormat(value))
    });
  }

  render() {
    const {
      currentMoney,
      /*hasFixedIncome,
      fixedIncome,
      incomeCycle*/
    } = this.state;

    return (
      <div className="setting">
        <MainTitle />
        <Input
          name="currentMoney"
          value={currentMoney}
          placeholder="소지한 돈을 입력하세요."
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Setting;