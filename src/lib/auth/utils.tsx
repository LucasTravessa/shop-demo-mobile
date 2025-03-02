import { type User } from '@/api/auth';
import { getItem, removeItem, setItem } from '@/lib/storage';

const TOKEN = 'token';
const USER = 'user';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);

export const getUser = () => getItem<User>(USER);
export const removeUser = () => removeItem(USER);
export const setUser = (value: User) => setItem<User>(USER, value);
