import {useState} from 'react';
import {ContextMenu} from '@astryxdesign/core/ContextMenu';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';

export default function ContextMenuDemo() {
  const [last, setLast] = useState('none');
  return (
    <ContextMenu
      label="File actions"
      items={[
        {label: 'Rename', onClick: () => setLast('Rename')},
        {label: 'Move', onClick: () => setLast('Move')},
        {label: 'Delete', variant: 'destructive', onClick: () => setLast('Delete')},
      ]}>
      <Card padding={4}>
        <Text>Right-click (or long-press) this card. Last action: {last}</Text>
      </Card>
    </ContextMenu>
  );
}
