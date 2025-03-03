import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import { type CreateOrderResponse } from './types';

type Response = CreateOrderResponse;
type Variables = { id: number };

export const usePurchaseOrder = createMutation<Response, Variables, AxiosError>(
  {
    mutationFn: async (variables) =>
      client({
        url: `orders/${variables.id}/purchase`,
        method: 'POST',
      }).then((response) => response.data),
  }
);
