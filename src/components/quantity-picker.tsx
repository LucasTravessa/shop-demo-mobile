import { AntDesign } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

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
      <Pressable className="mr-2 bg-gray-600 px-2 py-1" onPress={onDecrease}>
        <AntDesign name="minus" size={16} color="white" />
      </Pressable>
      <Text className="font-titilium-bold text-lg">{quantity}</Text>
      <Pressable className="ml-2 bg-gray-600 px-2 py-1" onPress={onIncrease}>
        <AntDesign name="plus" size={16} color="white" />
      </Pressable>
    </View>
  );
};
