/* eslint-disable react/react-in-jsx-scope */

import { router } from 'expo-router';

import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { FocusAwareStatusBar, ScrollView, View } from '@/components/ui';
import { openLinkInBrowser, useAuth } from '@/lib';
import { useCartStore } from '@/lib/hooks/use-cart';
import { useCheckoutStore } from '@/lib/hooks/use-checkout';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  const { clearCart } = useCartStore();
  const { clearCheckout } = useCheckoutStore();
  function cleanUpApp() {
    clearCart();
    clearCheckout();
    signOut();
  }
  const apiDocsUrl = 'http://localhost:3000/doc#/';

  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <ItemsContainer title="TEST FLOWS">
            <Item
              text="Adicionar ao fluxo do carrinho"
              onPress={() => {
                router.push('/');
              }}
            />
            <Item
              text="Checkout Flow"
              onPress={() => {
                router.push('/cart');
              }}
            />
            <Item
              text="Log In Flow"
              onPress={() => {
                router.push('/login');
              }}
            />
            <Item text="QR Code Scanner" onPress={() => {}} />
            <Item text="Desenho" onPress={() => {}} />
          </ItemsContainer>

          <ItemsContainer title="ACTIONS">
            <ItemsContainer>
              <Item text="Log out" onPress={signOut} />
              <Item text="Reset App State" onPress={cleanUpApp} />
            </ItemsContainer>
          </ItemsContainer>

          <ItemsContainer title="OTHER">
            <ItemsContainer>
              <Item
                text="API Calls"
                onPress={() => openLinkInBrowser(apiDocsUrl)}
              />
              <Item text="Report A Bug" onPress={() => {}} />
              <Item text="About" onPress={() => router.push('/about')} />
            </ItemsContainer>
          </ItemsContainer>
        </View>
      </ScrollView>
    </>
  );
}
