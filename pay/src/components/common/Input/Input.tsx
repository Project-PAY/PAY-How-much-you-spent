import * as React from 'react';
import './input.scss';

interface IProps {
  value: any;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suffix?: string;
}

export default class Input extends React.Component<IProps> {
  static defaultProps:Partial<IProps> = {
    type: 'text',
    placeholder: '내용을 입력해주세요.',
    suffix: '원'
  }

  render() {
    const {
      suffix,
      ...rest
    } = this.props;

    return (
      <div className="input">
        <input {...rest} />
        <span>{suffix}</span>
      </div>
    );
  }
}