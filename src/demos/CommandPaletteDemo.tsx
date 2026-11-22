import {useState} from 'react';
import {CommandPalette} from '@astryxdesign/core/CommandPalette';
import {createStaticSource} from '@astryxdesign/core/Typeahead';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';

const commands = createStaticSource([
  {id: 'new', label: 'New file'},
  {id: 'open', label: 'Open recent'},
  {id: 'theme', label: 'Toggle dark mode'},
  {id: 'settings', label: 'Open settings'},
]);

export default function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState('');
  return (
    <HStack gap={3}>
      <Button label="Open command palette" onClick={() => setOpen(true)} />
      <Text>{picked && `Ran: ${picked}`}</Text>
      <CommandPalette
        isOpen={open}
        onOpenChange={setOpen}
        searchSource={commands}
        label="Commands"
        onValueChange={v => {
          setPicked(v);
          setOpen(false);
        }}
      />
    </HStack>
  );
}
