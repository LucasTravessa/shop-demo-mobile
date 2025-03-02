import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';

import { useProduct } from '@/api/products';
import ColorPicker from '@/components/color-picker';
import { QuantityPicker } from '@/components/quantity-picker';
import { Rating } from '@/components/rating';
import {
  ActivityIndicator,
  Button,
  FocusAwareStatusBar,
  Image,
  Text,
  View,
} from '@/components/ui';
import { useCartStore } from '@/lib/hooks/use-cart';

const imagePlaceHolder =
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80';

export default function Details() {
  const local = useLocalSearchParams<{ id: string }>();

  const [quantity, setQuantity] = React.useState<number>(1);
  const { data, isPending, isError } = useProduct({
    //@ts-ignore
    variables: { id: local.id },
  });

  const store = useCartStore();

  const handleAddToCart = () => {
    if (!!!data) return;
    store.addToCart(data, quantity);
  };

  if (isPending) {
    return (
      <View className="flex-1 justify-center  p-3">
        <Stack.Screen />
        <FocusAwareStatusBar />
        <ActivityIndicator />
      </View>
    );
  }
  if (isError) {
    return (
      <View className="flex-1 justify-center p-3">
        <Stack.Screen />
        <FocusAwareStatusBar />
        <Text className="text-center">Error loading the Product</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-3 ">
      <Stack.Screen />
      <FocusAwareStatusBar />
      <View>
        <View className="my-2">
          <Text className="mb-2 text-3xl font-bold">{data?.title}</Text>
          <Rating rating={3} />
        </View>
        <View className="mb-8 mt-2 flex flex-col items-center justify-center">
          <Image
            className="size-96 rounded-xl object-contain"
            contentFit="cover"
            source={{
              uri: data.picture || imagePlaceHolder,
            }}
          />
        </View>
        <ColorPicker />
        <Text className="mt-5 text-3xl font-bold">
          R$ {data.price.toFixed(2)}
        </Text>
        <View className="mt-8 flex flex-row justify-between">
          <QuantityPicker
            quantity={quantity}
            onIncrease={() => setQuantity(quantity + 1)}
            onDecrease={() => setQuantity(quantity - 1)}
          />
          <Button label="Adicionar ao carrinho" onPress={handleAddToCart} />
        </View>
      </View>
    </View>
  );
}
