type InputType = string | number;

export default interface IBase {
  currentMoney: InputType;
  hasFixedIncome: boolean;
  fixedIncome?: InputType;
  incomeCycle?: InputType;
}