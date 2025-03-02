import React from 'react';
import { Text, View } from 'react-native';

interface IconBadgeProps {
  icon: React.ReactNode;
  count?: number;
}

export const IconBadge: React.FC<IconBadgeProps> = ({ icon, count }) => {
  return (
    <View className="relative">
      {icon}
      {!!count && count > 0 && (
        <View className="absolute right-[-5px] top-[-5px] flex size-5 items-center justify-center rounded-full bg-red-500">
          <Text className="text-xs font-bold text-white">{count}</Text>
        </View>
      )}
    </View>
  );
};
