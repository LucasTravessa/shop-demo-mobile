import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import * as React from 'react';
import { type Control, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';

import { Button, ControlledInput, ScrollView, Text } from '@/components/ui';
import { useCheckoutStore } from '@/lib/hooks/use-checkout';
import {
  checkout_shipping_schema,
  type ShippingFormType,
} from '@/types/checkout';

export default function Shipping() {
  const store = useCheckoutStore();

  const { control, handleSubmit } = useForm<ShippingFormType>({
    resolver: zodResolver(checkout_shipping_schema),
    defaultValues: store.shipping ?? undefined,
  });

  const onSubmit = (data: ShippingFormType) => {
    console.log(data);
    store.setShipping(data);
    router.push('/checkout/payment');
    showMessage({
      message: 'Shipping address saved successfully',
      type: 'success',
    });
  };

  return (
    <>
      <ScrollView className="flex-1 bg-white p-6">
        <Text className="mb-4 text-2xl font-bold">Checkout</Text>
        <ShippingForm control={control} handleSubmit={handleSubmit(onSubmit)} />
      </ScrollView>
    </>
  );
}

function ShippingForm({
  control,
  handleSubmit,
}: {
  control: Control<ShippingFormType>;
  handleSubmit: () => void;
}) {
  return (
    <>
      <Text className="mb-4 text-2xl font-bold">Enter a shipping address</Text>
      <ControlledInput
        name="fullName"
        label="Full Name"
        control={control}
        testID="full-name"
        className="mb-4"
      />
      <ControlledInput
        name="address1"
        label="Address Line 1"
        control={control}
        testID="address-line-1"
        className="mb-4"
      />
      <ControlledInput
        name="address2"
        label="Address Line 2"
        control={control}
        testID="address-line-2"
        className="mb-4"
      />
      <ControlledInput
        name="city"
        label="City"
        control={control}
        testID="city"
        className="mb-4"
      />
      <ControlledInput
        name="state"
        label="State / Region"
        control={control}
        testID="state"
        className="mb-4"
      />
      <ControlledInput
        name="zipCode"
        label="ZIP Code"
        control={control}
        testID="zip-code"
        className="mb-4"
      />
      <ControlledInput
        name="country"
        label="Country"
        control={control}
        testID="country"
        className="mb-6"
      />
      <Button
        label="Continue"
        onPress={handleSubmit}
        testID="continue-button"
      />
    </>
  );
}
