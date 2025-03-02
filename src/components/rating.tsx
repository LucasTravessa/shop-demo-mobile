import React from 'react';
import { View } from 'react-native';

import Star from './ui/icons/star';

export function Rating({ rating }: { rating: number }) {
  return (
    <View className="flex flex-row gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} color={i <= rating ? '#FFC107' : '#CCC'} />
      ))}
    </View>
  );
}
