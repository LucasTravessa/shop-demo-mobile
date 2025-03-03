/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { IconBadge } from '@/components/ui/icon-badge';
import { Cart } from '@/components/ui/icons/cart';
import { Catalog } from '@/components/ui/icons/catalog';
import Menu from '@/components/ui/icons/menu';
import { useAuth } from '@/lib';
import { useCartStore } from '@/lib/hooks/use-cart';

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
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Catalogo',
          tabBarIcon: ({}) => <Catalog />,
          // headerRight: () => <CreateNewPostLink />,
          tabBarButtonTestID: 'catalog-tab',
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          headerShown: false,
          tabBarIcon: ({}) =>
            items > 0 ? <IconBadge icon={<Cart />} count={items} /> : <Cart />,
          tabBarButtonTestID: 'cart-tab',
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: ({}) => <Menu />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
