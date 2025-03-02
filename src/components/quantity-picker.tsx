import { Pressable, Text, View } from 'react-native';

import { AddCircle } from './ui/icons/add-circle';
import { RemoveCircle } from './ui/icons/remove-circle';

type QuantityPickerProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const QuantityPicker = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityPickerProps) => {
  return (
    <View className="flex flex-row items-center">
      <Pressable className="mr-2 px-2 py-1" onPress={onDecrease}>
        <RemoveCircle width={30} height={30} />
      </Pressable>
      <Text className="text-xl font-bold">{quantity}</Text>
      <Pressable className="ml-2 px-2 py-1" onPress={onIncrease}>
        <AddCircle width={30} height={30} />
      </Pressable>
    </View>
  );
};
