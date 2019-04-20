import * as React from 'react';
import IBase from '../../@types/models/base';
import MainTitle from '../common/MainTitle/MainTitle';
import Input from '../common/Input/Input';
import {convertToNormalFormat} from '../../lib/convertNumber';
import LinkBtn from '../common/LinkBtn/LinkBtn';
import InputRange from '../common/InputRange/InputRange';
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {SECOND} from 'src/constants/times';
import {saveState} from 'src/lib/localStorage';
import _ from 'lodash-own';
import './setting.scss';

interface IProps {
  registerBaseInfo: (state: IBase) => void;
}

interface IState extends IBase {
  [key: string]: any;
}

class Setting extends React.Component<IProps, IState> {
  state: IState = {
    currentMoney: '',
    hasFixedIncome: false,
    fixedIncome: '',
    incomeCycle: ''
  }

  isRegisterAvailable = (isCheck: boolean = true) => {
    const {
      currentMoney,
      hasFixedIncome,
      fixedIncome,
      incomeCycle
    } = this.state;

    if (currentMoney === '') {
      isCheck && alert('소지한 돈을 입력해주세요!');
      return false;
    } else if (hasFixedIncome && (fixedIncome === '')) {
      isCheck && alert('한달 고정 수입을 입력해주세요!');
      return false;
    } else if (hasFixedIncome && (incomeCycle === '')) {
      isCheck && alert('수입 초기화 날짜를 입력해주세요!');
      return false;
    }

    return true;
  }

  onChange = (
    {target: {name, value}}: React.ChangeEvent<HTMLInputElement>,
    type: string = 'money'
  ) => {
    switch (type) {
      case 'money':
        this.setState({
          [name]: value && _.characterNotation(
            convertToNormalFormat(value), 3, ','
          )
        });
        break;
      case 'date':
        (Number(value) <= 31 || value === '') && this.setState({
          [name]: value
        });
        break;
      default: break;
    }
  }
  
  onClick = () => {
    this.setState(prevState => ({
      hasFixedIncome: !prevState.hasFixedIncome
    }));
  }
  
  onCompleteSetting = () => {
    this.props.registerBaseInfo(this.state);
    saveState('userBaseInfo', this.state);
  }

  render() {
    const {
      currentMoney,
      hasFixedIncome,
      fixedIncome,
      incomeCycle
    } = this.state;

    return (
      <div className="setting">
        <MainTitle />
        <Input
          name="currentMoney"
          value={currentMoney}
          placeholder="소지한 돈을 입력하세요."
          onChange={this.onChange}
          className="current-money"
          suffix="원"
        />
        <Input
          name="hasFixedIncome"
          value="고정 수입이 있나요?"
          disabled={true}
          className="has-fixed-income"
          arrow={true}
          opened={hasFixedIncome}
          onClick={this.onClick}
        />
        {hasFixedIncome && (
          <>
            <Input
              name="fixedIncome"
              value={fixedIncome}
              placeholder="한달 고정 수입을 입력하세요."
              onChange={this.onChange}
              suffix="원"
            />
            <Input
              name="incomeCycle"
              value={incomeCycle}
              placeholder="수입 초기화 날짜를 입력하세요."
              onChange={e => this.onChange(e, 'date')}
              suffix="일"
            />
            <InputRange
              min={1}
              max={31}
              step={1}
              value={incomeCycle || 1}
              onChange={({target: {value}}) => this.setState({incomeCycle: value})}
            />
          </>
        )}
        <LinkBtn
          to="/main"
          text="설정하기"
          isComplete={this.isRegisterAvailable(false)}
          onClick={() => {
            this.isRegisterAvailable() && this.onCompleteSetting();
          }}
        />
      </div>
    );
  }
}

export default Setting;