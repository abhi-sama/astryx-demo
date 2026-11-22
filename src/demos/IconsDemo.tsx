import {Icon} from '@astryxdesign/core/Icon';
import {NavIcon} from '@astryxdesign/core/NavIcon';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {HStack} from '@astryxdesign/core/HStack';

export default function IconsDemo() {
  return (
    <HStack gap={3}>
      <Icon icon="search" size="lg" />
      <Icon icon="calendar" size="lg" color="secondary" />
      <Icon icon="check" size="lg" />
      <Icon icon="info" size="lg" />
      <NavIcon icon={<Icon icon="copy" />} />
      <VisuallyHidden>Screen readers hear this, sighted users do not see it.</VisuallyHidden>
    </HStack>
  );
}
