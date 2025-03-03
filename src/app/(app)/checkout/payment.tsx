import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import * as React from 'react';
import { type Control, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';

import {
  Button,
  ControlledInput,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
import { Github } from '@/components/ui/icons';
import { useCheckoutStore } from '@/lib/hooks/use-checkout';
import {
  checkout_payment_schema,
  type PaymentFormType,
} from '@/types/checkout';

export default function Payment() {
  const store = useCheckoutStore();

  const { control, handleSubmit } = useForm<PaymentFormType>({
    resolver: zodResolver(checkout_payment_schema),
    defaultValues: store.payment ?? undefined,
  });

  const onSubmit = (data: PaymentFormType) => {
    console.log(data);
    store.setPayment(data);
    router.push('/checkout/review');
    showMessage({
      message: 'Payment saved successfully',
      type: 'success',
    });
  };

  return (
    <>
      <ScrollView className="flex-1 bg-white p-6">
        <Text className="mb-4 text-2xl font-bold">Checkout</Text>
        <PaymentForm control={control} handleSubmit={handleSubmit(onSubmit)} />
      </ScrollView>
    </>
  );
}

function PaymentForm({
  control,
  handleSubmit,
}: {
  control: Control<PaymentFormType>;
  handleSubmit: () => void;
}) {
  return (
    <>
      <Text className="mb-4 text-2xl font-bold">Enter a payment method</Text>
      <Text className="mb-4 text-lg font-light">
        You will not be charged until you review your purchase on the next
        screen.
      </Text>
      <View className="flex flex-row">
        <Text className="text-lg font-medium">Card</Text>
        <Github />
      </View>
      <ControlledInput
        name="fullNameOnCard"
        label="Full Name on Card"
        control={control}
        testID="full-name-on-card"
        className="mb-4"
      />
      <ControlledInput
        name="cardNumber"
        label="Card Number"
        control={control}
        testID="card-number"
        keyboardType="numeric"
        className="mb-4"
      />
      <ControlledInput
        name="expirationDate"
        label="Expiration Date (MM/YY)"
        control={control}
        testID="expiration-date"
        keyboardType="numeric"
        className="mb-4"
      />
      <ControlledInput
        name="securityCode"
        label="Security Code (CVV)"
        control={control}
        testID="security-code"
        keyboardType="numeric"
        className="mb-6"
      />
      <Button
        label="COMPRAR AGORA"
        onPress={handleSubmit}
        testID="confirm-payment-button"
      />
    </>
  );
}
