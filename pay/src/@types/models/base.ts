type InputType = string | number;
type BooleanType = boolean | null;

export default interface IBase {
  currentMoney: InputType;
  hasFixedIncome: BooleanType;
  fixedIncome?: InputType;
  incomeCycle?: InputType;
}