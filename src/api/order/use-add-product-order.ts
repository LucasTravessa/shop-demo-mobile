import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '../common';
import { type AddProdcutOrder, type CreateOrderResponse } from './types';

type Response = CreateOrderResponse;
type Variables = AddProdcutOrder;

export const useAddProductOrder = createMutation<
  Response,
  Variables,
  AxiosError
>({
  mutationFn: async (variables) =>
    client({
      url: `/orders/${variables.orderId}/products`,
      method: 'POST',
      data: {
        productId: variables.productId,
        quantity: variables.quantity,
      },
    }).then((response) => response.data),
});
