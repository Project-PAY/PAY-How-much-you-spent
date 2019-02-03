import * as React from 'react';
import cn from 'classnames';
import './info-list.scss';

interface InfoListProps {
  title: string;
  subTitle: string;
  imgSrc: string;
  mainValue: string;
  suffix: string;
}

const InfoList:React.FC<InfoListProps> = ({
  title,
  subTitle,
  imgSrc,
  mainValue,
  suffix
}) => {
  return (
    <li
      className="info-list"
      key={title}
    >
      <img
        src={imgSrc}
        alt={title}
        className={cn({'icon-money': suffix === '원'})}
      />
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <span>{mainValue} {suffix}</span>
    </li>
  );
};

export default InfoList;