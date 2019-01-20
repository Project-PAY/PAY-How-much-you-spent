import {createAction, handleActions} from 'redux-actions';
import IBase from '../../@types/models/base';

// 액션 타입 정의
const REGISTER_BASE_INFO = 'REGISTER_BASE_INFO';

// 액션 생성 함수 생성
export const registerBaseInfo = createAction(REGISTER_BASE_INFO);

// 초기 상태 정의
const initialState = {
  currentMoney: 0,
  hasFixedIncome: false,
  fixedIncome: 0,
  incomeCycle: 0
};

export default handleActions({
  [REGISTER_BASE_INFO]: ({
    currentMoney,
    hasFixedIncome,
    fixedIncome,
    incomeCycle
  }: IBase, _: any) => ({
    currentMoney,
    hasFixedIncome,
    fixedIncome,
    incomeCycle
  })
}, initialState);