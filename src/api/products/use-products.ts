import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { FindAllProductsQuery, Product } from './types';

type Response = Product[];
type Variables = FindAllProductsQuery;

export const useProducts = createQuery<Response, Variables, AxiosError>({
  queryKey: ['products'],
  fetcher: (variables) => {
    return client
      .get(`products`, { params: variables })
      .then((response) => response.data);
  },
});
