import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import * as React from 'react';
import { type Control, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';

import { Button, ControlledInput, Text, View } from '@/components/ui';
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
    <View className="flex-1 bg-white p-6">
      <Text className="mb-4 text-2xl font-bold">Checkout</Text>
      <ShippingForm control={control} handleSubmit={handleSubmit(onSubmit)} />
    </View>
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
      <Text className="mb-4 text-xl font-bold">Enter a shipping address</Text>
      <ControlledInput
        name="fullName"
        label="FULL NAME*"
        control={control}
        testID="full-name"
      />
      <ControlledInput
        name="address1"
        label="ADDRESS LINE 1*"
        control={control}
        testID="address-line-1"
      />
      <ControlledInput
        name="address2"
        label="ADDRESS LINE 2"
        control={control}
        testID="address-line-2"
      />

      <View className="flex flex-row justify-between">
        <View className="w-[48%]">
          <ControlledInput
            name="city"
            label="CITY*"
            control={control}
            testID="city"
          />
        </View>
        <View className="w-[48%]">
          <ControlledInput
            name="state"
            label="STATE / REGION"
            control={control}
            testID="state"
          />
        </View>
      </View>

      <View className="flex flex-row justify-between">
        <View className="w-[48%]">
          <ControlledInput
            name="zipCode"
            label="ZIP CODE*"
            control={control}
            testID="zip-code"
          />
        </View>
        <View className="w-[48%]">
          <ControlledInput
            name="country"
            label="COUNTRY*"
            control={control}
            testID="country"
          />
        </View>
      </View>

      <View className="mt-6">
        <Button
          label="Continuar"
          onPress={handleSubmit}
          testID="continue-button"
        />
      </View>
    </>
  );
}
