import { ReactNode } from 'react';

export interface IAccessToken {
  access_token: string;
}

export type LocationState = {
  from: {
    pathname: string;
    search: string;
  }
}

export type ChildrenType = {
  children: ReactNode | ReactNode[];
}

export interface BackendType {
  [n: string]: Array<{[n: string]: any}>
}

