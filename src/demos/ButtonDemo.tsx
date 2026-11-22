import {Button} from '@astryxdesign/core/Button';
import {HStack} from '@astryxdesign/core/HStack';

export default function ButtonDemo() {
  return (
    <HStack gap={2}>
      <Button label="Save changes" variant="primary" />
      <Button label="Cancel" variant="secondary" />
      <Button label="More" variant="ghost" />
      <Button label="Delete" variant="destructive" />
      <Button label="Saving" variant="primary" isLoading />
    </HStack>
  );
}
