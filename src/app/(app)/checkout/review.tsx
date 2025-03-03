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
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="mb-4 text-2xl font-bold">Checkout</Text>
      <Text className="text-xl font-bold">Revise seu pedido</Text>
      <View className="my-6 gap-4">
        {cart.map((item, index) => (
          <CartCard
            key={index}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </View>
      <Text className="mb-4 text-xl font-bold">Endereço de entrega</Text>
      {shipping && (
        <View className="mb-4">
          <Text className="text-lg">{shipping.fullName}</Text>
          <Text className="text-lg">
            {shipping.address1}
            {shipping.address2 && `, ${shipping.address2}`}
          </Text>
          <Text className="text-lg">
            {shipping.city}, {shipping.state}
          </Text>
          <Text className="text-lg">{shipping.zipCode}</Text>
        </View>
      )}
      <Text className="mb-4 text-lg font-bold">Método de pagamento</Text>
      <View className="mb-8 flex flex-row justify-between">
        <Text className="text-xl font-semibold">
          Total: <Text className="text-lg ">{cart.length} itens</Text>{' '}
        </Text>
        <Text className="text-xl font-bold">R$ {total.toFixed(2)}</Text>
      </View>
      <Button label="Fazer Pedido" onPress={onSubmit} />
    </ScrollView>
  );
}
