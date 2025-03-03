import { router } from 'expo-router';
import * as React from 'react';
import { showMessage } from 'react-native-flash-message';

import { CartCard } from '@/components/cart-card';
import { Button, ScrollView, Text, View } from '@/components/ui';
import { useCartStore } from '@/lib/hooks/use-cart';
import { useCheckoutStore } from '@/lib/hooks/use-checkout';

export default function Review() {
  const { shipping, clearCheckout } = useCheckoutStore();
  const { cart, cartTotal, clearCart } = useCartStore();

  const total = React.useMemo(() => cartTotal(), [cartTotal]);

  const onSubmit = () => {
    router.push('/checkout/complete');
    clearCart();
    clearCheckout();
    showMessage({
      message: 'Pedido realizado com sucesso',
      type: 'success',
    });
  };

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-4 text-2xl font-bold">Checkout</Text>
      <Text className="mb-4 text-lg font-light">Revise seu pedido</Text>
      <ScrollView className="flex-1">
        {cart.map((item, index) => (
          <CartCard
            key={index}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </ScrollView>
      <Text className="mb-4 text-lg font-light">Endereço de entrega</Text>
      {shipping && (
        <View className="mb-4">
          <Text className="text-lg font-semibold">{shipping.fullName}</Text>
          <Text className="text-lg">{shipping.address1}</Text>
          {shipping.address2 && (
            <Text className="text-lg">{shipping.address2}</Text>
          )}
          <Text className="text-lg">{shipping.city}</Text>
          <Text className="text-lg">{shipping.state}</Text>
          <Text className="text-lg">{shipping.zipCode}</Text>
        </View>
      )}
      <Text className="mb-4 text-lg font-light">Método de pagamento</Text>
      <View className="flex flex-row justify-between">
        <Text className="text-xl font-semibold">
          Total: <Text className="text-lg ">{cart.length} itens</Text>{' '}
        </Text>
        <Text className="text-xl font-bold">R$ {total.toFixed(2)}</Text>
      </View>
      <Button label="Fazer Pedido" onPress={onSubmit} />
    </View>
  );
}
