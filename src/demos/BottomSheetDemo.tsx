import {useState} from 'react';
import {BottomSheet} from '@astryxdesign/core/BottomSheet';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function BottomSheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Open bottom sheet" onClick={() => setOpen(true)} />
      <BottomSheet isOpen={open} onOpenChange={setOpen} label="Share" purpose="info">
        <VStack gap={2} padding={4}>
          <Text>Bottom sheets slide up from the edge, ideal on phones and tablets.</Text>
          <Button label="Done" variant="primary" onClick={() => setOpen(false)} />
        </VStack>
      </BottomSheet>
    </>
  );
}
