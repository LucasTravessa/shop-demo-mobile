import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Pressable } from 'react-native-gesture-handler';

import { type Product, useProducts } from '@/api/products';
import { Card } from '@/components/card';
import { FilterModal } from '@/components/filter-modal';
import {
  EmptyList,
  FocusAwareStatusBar,
  Text,
  useModal,
  View,
} from '@/components/ui';
import Filter from '@/components/ui/icons/filter';

export default function Feed() {
  const [filter, setFilter] = React.useState<string>('');
  const { data, isPending, isError } = useProducts({
    variables:
      filter !== '' ? { searchBy: 'title', search: filter } : undefined,
  });
  const modal = useModal();

  const renderItem = React.useCallback(
    ({ item }: { item: Product }) => <Card {...item} />,
    []
  );

  if (isError) {
    return (
      <View>
        <EmptyList isLoading={false} />
      </View>
    );
  }
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <View className="flex-row items-center justify-between p-4">
        <Text className="text-3xl font-bold">Produtos</Text>
        <Pressable onPress={modal.present}>
          <Filter className="size-24" />
        </Pressable>
      </View>
      <FlashList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      />
      <FilterModal modal={modal} onApplyFilter={setFilter} />
    </View>
  );
}
