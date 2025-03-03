import React from 'react';

import { BlueBlurBg } from '@/components/blue-blur-bg';
import { Image, Text, View } from '@/components/ui';
import { openLinkInBrowser } from '@/lib';

export default function About() {
  return (
    <BlueBlurBg>
      <View className="mx-4 mt-32 flex-1 items-center justify-start">
        <Text className="my-8 text-3xl font-bold">Sobre</Text>
        <Image source={require('@/../assets/icon.png')} className="size-32" />
        <Text className="mt-8 text-3xl font-semibold">
          My Demo <Text className="text-3xl font-light">App</Text>
        </Text>
        <Text className="my-8 text-center text-lg">
          Um aplicativo para executar testes
          {'\n'}
          v1.5.0-build 188
        </Text>
        <Text
          className="text-center text-lg font-bold text-blue-600"
          onPress={() => openLinkInBrowser('https://www.google.com')}
        >
          Visite nosso site
        </Text>
      </View>
    </BlueBlurBg>
  );
}
