import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { type Control, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { z } from 'zod';

import { Button, ControlledInput, ScrollView, Text } from '@/components/ui';

const schema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  address1: z.string().min(5, 'Address Line 1 is required'),
  address2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State/Region is required'),
  zipCode: z.string().min(4, 'ZIP Code is required'),
  country: z.string().min(2, 'Country is required'),

  // Novos campos para pagamento
  fullNameOnCard: z.string().min(2, 'Full Name on Card is required'),
  cardNumber: z.string().regex(/^\d{16}$/, 'Card Number must be 16 digits'),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be MM/YY'),
  securityCode: z.string().regex(/^\d{3}$/, 'Security Code must be 3 digits'),
});

type FormType = z.infer<typeof schema>;

export default function Checkout() {
  const [step, setStep] = React.useState<number>(1);

  const onContinue = () => {
    setStep(step + 1);
  };

  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
    showMessage({
      message: 'Shipping address saved successfully',
      type: 'success',
    });
  };

  return (
    <>
      <ScrollView className="flex-1 bg-white p-6">
        {step === 1 && <Step1 control={control} onContinue={onContinue} />}
        {step === 2 && (
          <Step2 control={control} handleSubmit={handleSubmit(onSubmit)} />
        )}
      </ScrollView>
    </>
  );
}

function Step1({
  control,
  onContinue,
}: {
  control: Control<FormType>;
  onContinue: () => void;
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
      <Button label="Continue" onPress={onContinue} testID="continue-button" />
    </>
  );
}

function Step2({
  control,
  handleSubmit,
}: {
  control: Control<FormType>;
  handleSubmit: any;
}) {
  return (
    <>
      <Text className="mb-4 text-2xl font-bold">Enter a payment method</Text>
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
