import { ReactNode } from 'react';

export interface IAccessToken {
  access_token: string;
}

export type LocationState = {
  from: {
    pathname: string;
  }
}

export type ChildrenType = {
  children: ReactNode | ReactNode[];
}

