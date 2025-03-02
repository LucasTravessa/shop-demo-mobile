/* eslint-disable react/react-in-jsx-scope */

import { useRouter } from 'expo-router';

import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { FocusAwareStatusBar, ScrollView, View } from '@/components/ui';
import { useAuth } from '@/lib';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  const router = useRouter();
  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <ItemsContainer title="TEST FLOWS">
            <Item text="Adicionar ao fluxo do carrinho" onPress={() => {}} />
            <Item text="Checkout Flow" onPress={() => {}} />
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
              <Item text="Reset App State" onPress={() => {}} />
            </ItemsContainer>
          </ItemsContainer>

          <ItemsContainer title="OTHER">
            <ItemsContainer>
              <Item text="API Calls" onPress={() => {}} />
              <Item text="Report A Bug" onPress={() => {}} />
              <Item text="About" onPress={() => {}} />
            </ItemsContainer>
          </ItemsContainer>
        </View>
      </ScrollView>
    </>
  );
}
