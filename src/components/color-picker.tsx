import React from 'react';
import { Text, View } from 'react-native';

const colors = {
  black: 'black',
  gray: 'gray-400',
  red: 'red-600',
};

type Props = {
  selectedColor?: string;
};

function ColorCircle({ color }: { color: string }) {
  return <View className={'size-7 rounded-full' + ` bg-${color}`} />;
}

export default function ColorPicker({ selectedColor }: Props) {
  const colorValues = Object.values(colors);
  const isSelectedColor =
    !!selectedColor && Object.keys(colors).includes(selectedColor);
  return (
    <View className="flex w-full flex-row items-center">
      <Text className="text-lg">Cor: </Text>
      <View className="flex flex-row justify-between gap-2">
        {isSelectedColor ? (
          <ColorCircle color={colors[selectedColor as keyof typeof colors]} />
        ) : (
          colorValues.map((color) => <ColorCircle key={color} color={color} />)
        )}
      </View>
    </View>
  );
}
