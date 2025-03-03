import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import * as React from 'react';
import { type Control, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';

import {
  Button,
  Checkbox,
  ControlledInput,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
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
      <Text className="mb-2 text-lg font-light">
        You will not be charged until you review your purchase on the next
        screen.
      </Text>
      <View className="my-4 flex flex-row items-center justify-between">
        <Text className="text-lg font-medium">Card</Text>
        <MaterialIcons name="credit-card" size={24} color="lightgray" />
      </View>
      <ControlledInput
        name="fullNameOnCard"
        label="FULL NAME ON CARD*"
        control={control}
        testID="full-name-on-card"
      />
      <ControlledInput
        name="cardNumber"
        label="CARD NUMBER*"
        control={control}
        testID="card-number"
        keyboardType="numeric"
      />
      <View className="mb-4 flex flex-row justify-between">
        <View className="w-[48%]">
          <ControlledInput
            name="expirationDate"
            label="EXPIRATION DATE*"
            control={control}
            testID="expiration-date"
            keyboardType="numeric"
          />
        </View>
        <View className="w-[48%]">
          <ControlledInput
            name="securityCode"
            label="SECURITY CODE*"
            control={control}
            testID="security-code"
            keyboardType="numeric"
          />
        </View>
      </View>

      <CheckboxAddress />

      <View className="mt-4">
        <Button
          label="COMPRAR AGORA"
          onPress={handleSubmit}
          testID="confirm-payment-button"
        />
      </View>
    </>
  );
}

const CheckboxAddress = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox.Root
      checked={checked}
      onChange={setChecked}
      accessibilityLabel="accept terms of condition"
      className="pb-2"
    >
      <Checkbox.Icon checked={checked} />
      <Checkbox.Label text="Meu endereço de cobrança é igual ao meu endereço de entrega" />
    </Checkbox.Root>
  );
};
