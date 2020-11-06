import { match } from 'react-router-dom';

export interface IRoutesProps {
  match?: match;
}

export interface IGeneralReducer<E> {
  (state: E, action: E): E;
}

interface IObject<E> {
  [key: string]: E;
}

export type IAction<E> = IObject<E> & { type: string };

export interface User {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: Array<string>;
}
