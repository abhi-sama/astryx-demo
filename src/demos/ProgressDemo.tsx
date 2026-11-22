import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Spinner} from '@astryxdesign/core/Spinner';
import {VStack} from '@astryxdesign/core/VStack';

export default function ProgressDemo() {
  return (
    <VStack gap={3} width={360}>
      <ProgressBar label="Uploading" value={64} hasValueLabel />
      <ProgressBar label="Processing" isIndeterminate />
      <Spinner />
    </VStack>
  );
}
