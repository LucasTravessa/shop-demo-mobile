import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  ControlledInput,
  Modal,
  Text,
  type useModal,
  View,
} from './ui';

const filterSchema = z.object({
  name: z.string(),
});
type filterSchemaType = z.infer<typeof filterSchema>;

export function FilterModal({
  onApplyFilter,
  modal,
}: {
  onApplyFilter: (criteria: string) => void;
  modal: ReturnType<typeof useModal>;
}) {
  const { control, handleSubmit } = useForm<filterSchemaType>({
    resolver: zodResolver(filterSchema),
  });

  const handleApplyFilter = (data: filterSchemaType) => {
    onApplyFilter(data.name);
    modal.dismiss();
  };

  return (
    <Modal ref={modal.ref}>
      <View className="gap-5 px-6">
        <Text className="text-xl font-bold">Search by name:</Text>
        <ControlledInput
          name="name"
          placeholder="Search..."
          control={control}
          testID="filter-name"
        />
        <Button
          label="Apply Filter"
          onPress={handleSubmit(handleApplyFilter)}
        />
      </View>
    </Modal>
  );
}
