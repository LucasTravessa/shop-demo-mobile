import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import { type CreateOrderResponse, type DelProdcutOrder } from './types';

type Response = CreateOrderResponse;
type Variables = DelProdcutOrder;

export const useDelProductOrder = createMutation<
  Response,
  Variables,
  AxiosError
>({
  mutationFn: async (variables) =>
    client({
      url: `/orders/${variables.orderId}/products/${variables.cartID}`,
      method: 'DELETE',
    }).then((response) => response.data),
});
