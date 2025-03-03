import { create } from 'zustand';

import { type Product } from '@/api/products';

type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  cartTotal: () => number;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  cartTotal: () => {
    const { cart } = get();
    if (cart.length === 0) return 0;
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  },
  addToCart: (product, quantity) => {
    set((state) => {
      if (!state.cart.some((item) => item.product.id === product.id)) {
        return {
          cart: [
            ...state.cart,
            {
              product,
              quantity,
            },
          ],
        };
      }
      return state;
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    }));
  },
  updateCartItemQuantity: (productId, newQuantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ),
    }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));

export { useCartStore };
