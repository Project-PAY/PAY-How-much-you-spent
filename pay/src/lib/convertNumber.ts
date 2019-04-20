import _ from 'lodash-own';

export const convertToNormalFormat = (value: string) => {
  return _.join(value.split(','), '');
};