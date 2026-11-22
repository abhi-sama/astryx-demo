import {useToast} from '@astryxdesign/core/Toast';
import {Button} from '@astryxdesign/core/Button';
import {HStack} from '@astryxdesign/core/HStack';

export default function ToastDemo() {
  const showToast = useToast();
  return (
    <HStack gap={2}>
      <Button label="Show info" variant="primary" onClick={() => showToast({body: 'Changes saved', type: 'info'})} />
      <Button label="Show error" onClick={() => showToast({body: 'Could not connect', type: 'error'})} />
    </HStack>
  );
}
