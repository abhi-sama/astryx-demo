import {useState} from 'react';
import {DropdownMenu} from '@astryxdesign/core/DropdownMenu';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';

export default function DropdownMenuDemo() {
  const [last, setLast] = useState('nothing yet');
  return (
    <HStack gap={3}>
      <DropdownMenu
        button={{label: 'Actions'}}
        items={[
          {label: 'Edit', onClick: () => setLast('Edit')},
          {label: 'Duplicate', onClick: () => setLast('Duplicate')},
          {type: 'divider'},
          {label: 'Delete', variant: 'destructive', onClick: () => setLast('Delete')},
        ]}
      />
      <Text>Clicked: {last}</Text>
    </HStack>
  );
}
