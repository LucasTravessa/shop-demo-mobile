import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import { type CreateOrderResponse } from './types';

type Response = CreateOrderResponse;
type Variables = void;

export const useCreateOrder = createMutation<Response, Variables, AxiosError>({
  mutationFn: async () =>
    client({
      url: 'orders',
      method: 'POST',
    }).then((response) => response.data),
});
