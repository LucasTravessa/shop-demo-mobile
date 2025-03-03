import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { BlueBlurBg } from '@/components/blue-blur-bg';
import { Button, Text } from '@/components/ui';

export default function Complete() {
  return (
    <BlueBlurBg>
      <View className="mx-4 mt-32 flex-1 items-center justify-start">
        <MaterialIcons name="shopping-cart" size={90} color="lightgray" />
        <Text className="mt-10 text-3xl font-bold">Checkout completado</Text>
        <Text className="my-8 text-center text-lg">
          Obrigado pelo seu pedido. Seu pedido foi despachado e chegará tão
          rápido quanto o pônei galopa!
        </Text>
        <Button label="Continue Comprando" onPress={() => router.push('/')} />
      </View>
    </BlueBlurBg>
  );
}
