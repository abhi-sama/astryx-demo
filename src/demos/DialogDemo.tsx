import {useState} from 'react';
import {Dialog, DialogHeader} from '@astryxdesign/core/Dialog';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Open dialog" variant="primary" onClick={() => setOpen(true)} />
      <Dialog isOpen={open} onOpenChange={setOpen} width={420}>
        <DialogHeader title="Invite teammates" subtitle="They'll get an email" onOpenChange={setOpen} />
        <VStack gap={3} padding={4}>
          <Text>Send an invite to join this workspace?</Text>
          <HStack gap={2}>
            <Button label="Send invite" variant="primary" onClick={() => setOpen(false)} />
            <Button label="Cancel" onClick={() => setOpen(false)} />
          </HStack>
        </VStack>
      </Dialog>
    </>
  );
}
