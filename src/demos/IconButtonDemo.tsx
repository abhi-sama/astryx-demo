import {IconButton} from '@astryxdesign/core/IconButton';
import {Icon} from '@astryxdesign/core/Icon';
import {HStack} from '@astryxdesign/core/HStack';

export default function IconButtonDemo() {
  return (
    <HStack gap={2}>
      <IconButton label="Search" icon={<Icon icon="search" />} tooltip="Search" />
      <IconButton label="Copy" icon={<Icon icon="copy" />} tooltip="Copy" variant="primary" />
      <IconButton label="Info" icon={<Icon icon="info" />} tooltip="Info" variant="ghost" />
    </HStack>
  );
}
