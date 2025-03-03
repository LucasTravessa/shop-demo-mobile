import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { BlueBlurBg } from '@/components/blue-blur-bg';
import { CartCard } from '@/components/cart-card';
import { Button, Text } from '@/components/ui';
import { useCartStore } from '@/lib/hooks/use-cart';

export default function Cart() {
  const router = useRouter();
  const store = useCartStore();
  const total = useMemo(() => store.cartTotal(), [store]);

  if (store.cart.length === 0) {
    return (
      <BlueBlurBg>
        <View className="mx-4 mt-32 flex-1 items-center justify-start">
          <MaterialIcons name="shopping-cart" size={90} color="lightgray" />
          <Text className="mt-10 text-3xl font-bold">Nenhum item</Text>
          <Text className="my-8 text-lg">
            Oh não! Seu carrinho está vazio. Preencha-o com brindes para
            concluir sua compra.
          </Text>
          <Button label="Go Shopping" onPress={() => router.push('/')} />
        </View>
      </BlueBlurBg>
    );
  }

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <View className="flex-1 justify-between px-5 py-3">
      <View>
        <Text className="mb-6 text-3xl font-bold">My Cart</Text>
        <ScrollView showsVerticalScrollIndicator={false} className="h-3/4">
          <View className="gap-5">
            {store.cart.map((item, index) => (
              <CartCard
                key={index}
                product={item.product}
                quantity={item.quantity}
                removeItem={() => store.removeFromCart(item.product.id)}
                quantityAdd={() =>
                  store.updateCartItemQuantity(
                    item.product.id,
                    item.quantity + 1
                  )
                }
                quantitySub={() =>
                  store.updateCartItemQuantity(
                    item.product.id,
                    item.quantity - 1
                  )
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View className="gap-5">
        <View className="flex flex-row justify-between">
          <Text className="text-xl font-semibold">
            Total: <Text className="text-lg ">{store.cart.length} itens</Text>{' '}
          </Text>
          <Text className="text-xl font-bold">R$ {total.toFixed(2)}</Text>
        </View>

        <Button label="Ir para Checkout" onPress={handleCheckout} />
      </View>
    </View>
  );
}
