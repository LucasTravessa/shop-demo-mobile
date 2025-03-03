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
        <Text className="mt-10 text-3xl font-bold">Nenhum item</Text>
        <Text className="my-8 text-lg">
          Oh não! Seu carrinho está vazio. Preencha-o com brindes para concluir
          sua compra.
        </Text>
        <Button label="Go Shopping" onPress={() => router.push('/')} />
      </View>
    </BlueBlurBg>
  );
}
