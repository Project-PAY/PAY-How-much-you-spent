import IBase from '../@types/models/base';

export const loadState = (state: string) => {
  try {
    const serializedState = localStorage.getItem(state);
    console.dir(serializedState);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch(err) {
    console.error(err);
    return undefined;
  }
}

export const saveState = (key: string, state: IBase) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch(err) {
    console.error(err);
  }
}