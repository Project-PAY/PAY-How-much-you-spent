import * as React from 'react';
import './input.scss';

interface IProps {
  value?: any;
  type?: string;
  maxLength?: number;
  disabled?: boolean;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class Input extends React.Component<IProps> {
  static defaultProps:Partial<IProps> = {
    type: 'text'
  }

  render() {
    const {
      type,
      onChange,
      ...rest
    } = this.props;

    return (
      <div className="input">
        <input
          type={type}
          onChange={onChange}
          {...rest}
        />
      </div>
    );
  }
}