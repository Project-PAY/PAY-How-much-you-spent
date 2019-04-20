import * as React from 'react';
import {
  ICON_PLUS,
  ICON_PERCENT,
  ICON_DOLLAR,
  ICON_RESET,
  ICON_SIDEBAR
} from '../../constants/imgsAndIcons';
import InfoList from '../common/InfoList/InfoList';
import Sidebar from '../common/Sidebar/Sidebar';
import './main.scss';
import IBase from 'src/@types/models/base';
import _ from 'lodash-own';

interface IProps {
  baseInfo: IBase;
}

interface IState {
  isOpened: boolean;
  isBtnClicked: boolean; // 초기 sidebar close 애니메이션 방지용
}

class Main extends React.Component<IProps, IState> {
  state: IState = {
    isOpened: false,
    isBtnClicked: false
  };

  currentInfoLists = () => {
    // Logic
    /**
     * fixedIncome이 있는 경우: currentMoney / fixedIncome * 100
     * fixedIncome이 없는 경우(currentMoney만 입력된 경우)
     * currentMoney는 불변으로 놔두고, 다른 변수로 current를 측정하도록
     * Ex. currentMoney = 100000, money = 84000(16000원 소비)
     * => money / currentMoney * 100
     */
    const {
      baseInfo: {
        currentMoney,
        fixedIncome,
        incomeCycle
      }
    } = this.props;
    console.dir(currentMoney);
    console.dir(fixedIncome);
    console.dir(incomeCycle);

    return [
      {
        title: '현재 수치',
        subTitle: '현재 수치를 나타냅니다.',
        imgSrc: ICON_PERCENT,
        mainValue: fixedIncome ?
          '22' : '33',
        suffix: '퍼센트'
      },
      {
        title: '남은 돈',
        subTitle: '현재 남은 돈을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: currentMoney as string,
        suffix: '원'
      },
      {
        title: '초기화',
        subTitle: '현재 남은 시간을 나타냅니다.',
        imgSrc: ICON_RESET,
        mainValue: incomeCycle,
        suffix: '일'
      },
      {
        title: '하루 지출액',
        subTitle: '오늘 하루 지출액을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: _.characterNotation('56000', 3, ','),
        suffix: '원'
      },
      {
        title: '이번 달 지출액',
        subTitle: '이번 한 달의 지출액을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: _.characterNotation('146000', 3, ','),
        suffix: '원'
      },
      {
        title: '저번 달 지출액',
        subTitle: '저번 한 달의 지출액을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: _.characterNotation('672800', 3, ','),
        suffix: '원'
      }
    ]
  }

  toggleSidebar = () => {
    this.setState({
      isOpened: !this.state.isOpened,
      isBtnClicked: true
    });
  }

  render() {
    const {
      isOpened,
      isBtnClicked
    } = this.state;

    return (
      <div className="main">
        <Sidebar
          isOpened={isOpened}
          onClose={this.toggleSidebar}
          isBtnClicked={isBtnClicked}
        />
        <header>
          <img
            src={ICON_SIDEBAR}
            alt="사이드바"
            className="icon-sidebar"
            onClick={this.toggleSidebar}
          />
          <span className="total">Total</span>
          <h1>₩ {_.characterNotation('345672', 3, ',')}</h1>
          <img
            src={ICON_PLUS}
            alt="수입/지출 추가"
            className="icon-plus"
          />
        </header>
        <ul className="current-infos">
          {this.currentInfoLists().map(({
            title,
            subTitle,
            imgSrc,
            mainValue,
            suffix
          }) => (
            <InfoList
              title={title}
              subTitle={subTitle}
              imgSrc={imgSrc}
              mainValue={mainValue}
              suffix={suffix}
              key={title}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;