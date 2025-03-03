import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import { type CreateOrderResponse } from './types';

type Variables = { id: string };
type Response = CreateOrderResponse;

export const useOrderProducts = createQuery<Response, Variables, AxiosError>({
  queryKey: ['order-products'],
  fetcher: (variables) => {
    return client
      .get(`orders/${variables.id}`)
      .then((response) => response.data);
  },
});
