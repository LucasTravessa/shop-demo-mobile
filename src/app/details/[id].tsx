import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'moti';
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

const imagePlaceHolder =
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80';

export default function Details() {
  const local = useLocalSearchParams<{ id: string }>();

  const [quantity, setQuantity] = React.useState<number>(1);
  const { data, isPending, isError } = useProduct({
    //@ts-ignore
    variables: { id: local.id },
  });

  // const store = useCartStore();

  const handleAddToCart = () => {
    // store.removeFromCart(data.id);
    // store.addToCart(data, quantity);
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
        <Text className="text-center">Error loading post</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-3 ">
      <Stack.Screen />
      <FocusAwareStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mx-4 my-6 pt-3">
          <Text className="font-titilium-black text-neutral pt-1 text-3xl">
            {data?.title}
          </Text>
          <Rating rating={3} />
        </View>
        <View className="mx-4 mt-2 flex flex-col items-center justify-center px-4 py-2">
          <Image
            source={data.picture || imagePlaceHolder}
            className="size-96 rounded-xl object-contain"
          />
        </View>
        <ColorPicker />
        <Text className="font-titilium-black text-neutral pt-1 text-3xl">
          R$ {data.price.toFixed(2)}
        </Text>
        <View className="mx-4 mt-2 flex flex-row justify-between px-4 py-2">
          <QuantityPicker
            quantity={quantity}
            onIncrease={() => setQuantity(quantity + 1)}
            onDecrease={() => setQuantity(quantity - 1)}
          />
          <Button label="Adicionar ao carrinho" onPress={handleAddToCart} />
        </View>
      </ScrollView>
    </View>
  );
}
