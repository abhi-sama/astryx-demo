import {useState} from 'react';
import {Drawer, DrawerHeader} from '@astryxdesign/core/Drawer';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Open drawer" onClick={() => setOpen(true)} />
      <Drawer isOpen={open} onOpenChange={setOpen} label="Filters" purpose="info" side="end" width={360}>
        <DrawerHeader title="Filters" subtitle="Narrow the results" onOpenChange={setOpen} />
        <VStack gap={2} padding={4}>
          <Text>Drawer content goes here.</Text>
          <Button label="Apply" variant="primary" onClick={() => setOpen(false)} />
        </VStack>
      </Drawer>
    </>
  );
}
