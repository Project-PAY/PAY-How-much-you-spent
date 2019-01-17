import * as React from 'react';
import './input-range.scss';
// import cn from 'classnames';

interface IProps {
  value: any;
  name?: string;
  min?: number;
  disabled?: boolean;
  max?: number;
  step?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputRange:React.ComponentType<IProps> = ({
    ...rest
}) => (
  <div className="input-range">
    <input
      type="range"
      {...rest}
    />
  </div>
);

export default InputRange;