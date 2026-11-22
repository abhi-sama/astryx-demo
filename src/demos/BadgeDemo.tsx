import {Badge} from '@astryxdesign/core/Badge';
import {HStack} from '@astryxdesign/core/HStack';

export default function BadgeDemo() {
  return (
    <HStack gap={2}>
      <Badge label="Neutral" variant="neutral" />
      <Badge label="Info" variant="info" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
    </HStack>
  );
}
