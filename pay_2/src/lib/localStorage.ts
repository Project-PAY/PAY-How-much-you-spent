import IBase from '../@types/models/base';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('isRegistered');
    console.dir(serializedState);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch(err) {
    console.error(err);
    return undefined;
  }
}

export const saveState = (state: IBase) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userSettingInfos', serializedState);
  } catch(err) {
    console.error(err);
  }
}