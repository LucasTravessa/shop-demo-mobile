/* eslint-disable react/no-unstable-nested-components */
import { Redirect, router, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { Pressable } from 'react-native';

import { IconBadge } from '@/components/ui/icon-badge';
import ArrowLeft from '@/components/ui/icons/arrow-left';
import { Cart } from '@/components/ui/icons/cart';
import { Catalog } from '@/components/ui/icons/catalog';
import { GradientCart } from '@/components/ui/icons/gradient-cart';
import { GradientCatalog } from '@/components/ui/icons/gradient-catalog';
import Menu from '@/components/ui/icons/menu';
import { useAuth } from '@/lib';
import { useCartStore } from '@/lib/hooks/use-cart';

function WichCart({ focused }: { focused: boolean }) {
  if (focused) return <GradientCart />;
  return <Cart />;
}

export default function TabLayout() {
  const items = useCartStore().cart.length;
  const status = useAuth.use.status();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (status === 'signOut') {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerTitle: 'My demo app',
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Catalogo',
          tabBarIcon: ({ focused }) =>
            focused ? <GradientCatalog /> : <Catalog />,
          // headerRight: () => <CreateNewPostLink />,
          tabBarButtonTestID: 'catalog-tab',
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ focused }) =>
            items > 0 ? (
              <IconBadge icon={<WichCart focused={focused} />} count={items} />
            ) : (
              <WichCart focused={focused} />
            ),
          tabBarButtonTestID: 'cart-tab',
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Menu',
          tabBarIcon: () => <Menu />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />

      <Tabs.Screen
        name="details/[id]"
        options={{
          href: null,
          headerLeft: () => (
            <Pressable className="ml-4" onPress={() => router.back()}>
              <ArrowLeft />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="checkout"
        options={{
          href: null,
          headerLeft: () => (
            <Pressable className="ml-4" onPress={() => router.back()}>
              <ArrowLeft />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          href: null,
          headerLeft: () => (
            <Pressable className="ml-4" onPress={() => router.back()}>
              <ArrowLeft />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
