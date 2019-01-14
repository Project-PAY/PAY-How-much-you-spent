export const convertToSpecificFormat = (value: string) => {
  // TODO: Array 타입으로 변환하지 않고 해결하기

  const SPLIT_UNIT = 3;
  const arr = parseInt(value, 10).toString().split('');
  let unit = 3;

  while(arr.length - unit > 0) {
    const target = arr.length - unit;

    arr[target] = ',' + arr[target];
    unit += SPLIT_UNIT;
  }

  return arr.join('');
};

export const convertToNormalFormat = (value: string) => {
  return value.split(',').join('');
}