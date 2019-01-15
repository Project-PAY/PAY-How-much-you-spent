import * as React from 'react';
import cn from 'classnames';
import './input.scss';

interface IProps {
  value: any;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  suffix?: string;
  className?: string;
  arrow?: boolean;
  opened?: boolean;
}

export default class Input extends React.Component<IProps> {
  static defaultProps:Partial<IProps> = {
    type: 'text',
    placeholder: '내용을 입력해주세요.',
    arrow: false,
    opened: false
  }

  render() {
    const {
      suffix,
      className,
      arrow,
      opened,
      onClick,
      ...rest
    } = this.props;

    return (
      <div className={cn(['input', className])}>
        <input {...rest} />
        <span>{suffix}</span>
        {arrow && (
          <div
            className={cn({
              'arrow-btn': true,
              'opened': opened
            })}
            onClick={onClick}
          />
        )}
      </div>
    );
  }
}