import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import { type CreateOrderResponse, type UpdtProdcutOrder } from './types';

type Response = CreateOrderResponse;
type Variables = UpdtProdcutOrder;

export const useUpdtProductOrder = createMutation<
  Response,
  Variables,
  AxiosError
>({
  mutationFn: async (variables) =>
    client({
      url: `/orders/${variables.orderId}/products/${variables.cartID}`,
      method: 'PUT',
      data: {
        productId: variables.productId,
        quantity: variables.quantity,
      },
    }).then((response) => response.data),
});
