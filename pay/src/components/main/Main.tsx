import * as React from 'react';
import SideBarIcon from '../../assets/icons/icon-sidebar.png';
import PlusIcon from '../../assets/icons/icon-plus.png';
import PercentIcon from '../../assets/icons/icon-percent.png';
import DollarIcon from '../../assets/icons/icon-dollar.png';
import ResetIcon from '../../assets/icons/icon-reset.png';
import './main.scss';
import {convertToSpecificFormat} from 'src/lib/convertNumber';
import InfoList from '../common/InfoList/InfoList';

class Main extends React.Component {
  currentInfoLists = () => {
    // Logic
    return [
      {
        title: '현재 수치',
        subTitle: '현재 수치를 나타냅니다.',
        imgSrc: PercentIcon,
        mainValue: '95',
        suffix: '퍼센트'
      },
      {
        title: '남은 돈',
        subTitle: '현재 남은 돈을 나타냅니다.',
        imgSrc: DollarIcon,
        mainValue: convertToSpecificFormat('345672'),
        suffix: '원'
      },
      {
        title: '초기화',
        subTitle: '현재 남은 시간을 나타냅니다.',
        imgSrc: ResetIcon,
        mainValue: '14',
        suffix: '일'
      },
      {
        title: '하루 지출액',
        subTitle: '오늘 하루 지출액을 나타냅니다.',
        imgSrc: DollarIcon,
        mainValue: convertToSpecificFormat('56000'),
        suffix: '원'
      },
      {
        title: '이번 달 지출액',
        subTitle: '이번 한 달의 지출액을 나타냅니다.',
        imgSrc: DollarIcon,
        mainValue: convertToSpecificFormat('146000'),
        suffix: '원'
      },
      {
        title: '저번 달 지출액',
        subTitle: '저번 한 달의 지출액을 나타냅니다.',
        imgSrc: DollarIcon,
        mainValue: convertToSpecificFormat('672800'),
        suffix: '원'
      }
    ]
  }

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
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;