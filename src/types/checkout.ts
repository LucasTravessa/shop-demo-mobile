import { z } from 'zod';

export const checkout_shipping_schema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  address1: z.string().min(5, 'Address Line 1 is required'),
  address2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State/Region is required'),
  zipCode: z.string().min(4, 'ZIP Code is required'),
  country: z.string().min(2, 'Country is required'),
});

export const checkout_payment_schema = z.object({
  fullNameOnCard: z.string().min(2, 'Full Name on Card is required'),
  cardNumber: z.string().regex(/^\d{16}$/, 'Card Number must be 16 digits'),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be MM/YY'),
  securityCode: z.string().regex(/^\d{3}$/, 'Security Code must be 3 digits'),
});

export const checkout_schema = checkout_shipping_schema.merge(
  checkout_payment_schema
);

export type CheckoutType = z.infer<typeof checkout_schema>;
export type ShippingFormType = z.infer<typeof checkout_shipping_schema>;
export type PaymentFormType = z.infer<typeof checkout_payment_schema>;
