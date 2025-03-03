export type CreateOrderResponse = {
  id: number;
  status: string;
  totalPrice: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

export type AddProdcutOrder = {
  orderId: number;
  productId: number;
  quantity: number;
};

export type UpdtProdcutOrder = {
  cartID: number;
  orderId: number;
  productId: number;
  quantity: number;
};

export type DelProdcutOrder = {
  cartID: number;
  orderId: number;
};
