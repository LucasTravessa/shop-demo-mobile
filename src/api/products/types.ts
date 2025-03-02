export type Product = {
  id: number;
  title: string;
  description: string | null;
  picture: string | null;
  price: number;
  quantity: number;
};

export type FindAllProductsQuery = {
  searchBy?: 'title' | 'description';
  search?: string;
  sortBy?: 'price';
  order?: 'asc' | 'desc';
};
