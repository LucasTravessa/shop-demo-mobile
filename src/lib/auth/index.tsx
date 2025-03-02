import { create } from 'zustand';

import { type User } from '@/api/auth';

import { createSelectors } from '../utils';
import type { TokenType } from './utils';
import {
  getToken,
  getUser,
  removeToken,
  removeUser,
  setToken,
  setUser,
} from './utils';

interface AuthState {
  user: User | null;
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (tokens: TokenType, user: User) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  user: null,
  signIn: (token, user) => {
    setToken(token);
    setUser(user);
    set({ status: 'signIn', token, user });
  },
  signOut: () => {
    removeToken();
    removeUser();
    set({ status: 'signOut', token: null, user: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      const user = getUser();
      if (userToken !== null && user !== null) {
        get().signIn(userToken, user);
      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType, user: User) =>
  _useAuth.getState().signIn(token, user);
export const hydrateAuth = () => _useAuth.getState().hydrate();
