import { Link } from 'expo-router';
import React from 'react';

import { type Product } from '@/api/products';
import { Image, Pressable, Text, View } from '@/components/ui';

import { Rating } from './rating';

type Props = Product;

const imagePlaceHolder =
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80';

export const Card = ({ id, title, picture, price }: Props) => {
  return (
    <Link href={`/details/${id}`} asChild>
      <Pressable>
        <View className="m-2 overflow-hidden rounded-xl border border-neutral-300 bg-white  dark:bg-neutral-900">
          <Image
            className="h-56 w-full overflow-hidden rounded-t-xl"
            contentFit="cover"
            source={{
              uri: picture || imagePlaceHolder,
            }}
          />

          <View className="p-2">
            <Text className="py-3 text-2xl ">{title}</Text>
            <Text className="py-3 text-2xl ">R$ {price.toFixed(2)}</Text>
            <Rating rating={3} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
