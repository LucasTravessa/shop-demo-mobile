import { create } from 'zustand';

import {
  type CheckoutType,
  type PaymentFormType,
  type ShippingFormType,
} from '@/types/checkout';

type CheckoutStore = {
  shipping: ShippingFormType | null;
  payment: PaymentFormType | null;
  checkout: () => CheckoutType | null;
  setShipping: (shipping: ShippingFormType) => void;
  setPayment: (payment: PaymentFormType) => void;
  clearCheckout: () => void;
};

const fakeShippingData = {
  address1: 'Rua doze de junho 1219',
  address2: undefined,
  city: 'Quissama',
  country: 'Brazil',
  fullName: 'Lucas Travessa',
  state: 'Rio de Janeiro',
  zipCode: '2889321',
};

const fakePaymentData = {
  cardNumber: '1231231231231231',
  expirationDate: '12/12',
  fullNameOnCard: 'Lucas Travessa',
  securityCode: '123',
};

const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  shipping: fakeShippingData,
  payment: fakePaymentData,
  checkout: () => {
    const { shipping, payment } = get();
    if (shipping && payment) {
      return {
        ...shipping,
        ...payment,
      };
    }
    return null;
  },
  setShipping: (shipping) => {
    set({ shipping });
  },
  setPayment: (payment) => {
    set({ payment });
  },
  clearCheckout: () => {
    set({ shipping: null, payment: null });
  },
}));

export { useCheckoutStore };
