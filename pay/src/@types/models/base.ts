type InputType = number | string;

export default interface IBase {
  currentMoney: InputType;
  hasFixedIncome: boolean;
  fixedIncome?: InputType;
  incomeCycle?: InputType;
}