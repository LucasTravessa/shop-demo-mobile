import { Env } from '@env';
import axios from 'axios';

import { getToken } from '@/lib/auth/utils';

const client = axios.create({
  baseURL: Env.API_URL,
});

const accessToken = getToken();

if (accessToken)
  client.defaults.headers.common['Authorization'] =
    `Bearer ${accessToken.access}`;

export { client };
