import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/components/ui';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-around p-4">
        <View className="justify-center">
          <Text testID="form-title" className="pb-6 text-4xl font-bold">
            Login
          </Text>

          <Text className="mb-6 text-lg font-light">
            Selecione um nome de usuário e uma senha na lista abaixo ou clique
            no nome de usuário para preencher automaticamente o nome de usuário
            e a senha.
          </Text>
        </View>

        <View>
          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label="Nome Completo"
          />
          <ControlledInput
            testID="password-input"
            control={control}
            name="password"
            label="Senha"
            placeholder="***"
            secureTextEntry={true}
          />
          <Button
            testID="login-button"
            label="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <View className="mt-4 justify-center rounded-md border border-gray-200 bg-gray-100 p-2">
          <Text className="font-bold">Nomes de usuário aceitos:</Text>
          <Text className="">dev.zap@yopmail.com</Text>
          <Text className="font-bold">Senha para todos os usuários:</Text>
          <Text className="">12345678</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
