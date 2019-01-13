import * as React from 'react';
import './input.scss';

interface IProps {
  value?: any;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class Input extends React.Component<IProps> {
  static defaultProps:Partial<IProps> = {
    type: 'text',
    placeholder: '내용을 입력해주세요.'
  }

  render() {
    const {
      type,
      onChange,
      placeholder,
      ...rest
    } = this.props;

    return (
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
}