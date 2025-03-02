import { Link } from 'expo-router';
import React from 'react';

import { type Product } from '@/api/products';
import { Image, Pressable, Text, View } from '@/components/ui';

import ColorPicker from './color-picker';
import { QuantityPicker } from './quantity-picker';
import { Rating } from './rating';

type Props = {
  product: Product;
  quantity: number;
  removeItem?: () => void;
  quantityAdd?: () => void;
  quantitySub?: () => void;
};

const imagePlaceHolder =
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80';

export const CartCard = ({
  product,
  quantity,
  removeItem,
  quantityAdd,
  quantitySub,
}: Props) => {
  const isEditable = !!quantityAdd && !!quantitySub && !!removeItem;
  return (
    <Link href={`/details/${product.id}`} asChild>
      <Pressable>
        <View className="flex-row overflow-hidden rounded-xl border border-neutral-300  bg-white dark:bg-neutral-900">
          <Image
            className="w-1/3 overflow-hidden"
            contentFit="cover"
            source={{
              uri: product.picture || imagePlaceHolder,
            }}
          />

          <View className="w-3/5 py-2 pl-4">
            <Text
              className="py-1 text-2xl"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {product.title}
            </Text>
            <Rating rating={3} />
            <View className="h-4" />
            <ColorPicker selectedColor="red" />
            <Text className="py-5 text-2xl font-bold">
              R$ {product.price.toFixed(2)}
            </Text>

            {isEditable && (
              <View className="flex-row items-center justify-between">
                <QuantityPicker
                  quantity={quantity}
                  onDecrease={quantitySub}
                  onIncrease={quantityAdd}
                />
                <Pressable onPress={removeItem}>
                  <Text className="text-center font-bold text-red-500">
                    Remover
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
