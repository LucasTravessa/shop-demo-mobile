import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import type { LoginPayload, LoginResponse } from './types';

type Variables = LoginPayload;
type Response = LoginResponse;

export const useLogin = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    client({
      url: 'auth/login',
      method: 'POST',
      data: variables,
    }).then((response) => response.data),
});
