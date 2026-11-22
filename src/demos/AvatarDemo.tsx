import {Avatar} from '@astryxdesign/core/Avatar';
import {AvatarGroup} from '@astryxdesign/core/AvatarGroup';
import {HStack} from '@astryxdesign/core/HStack';

export default function AvatarDemo() {
  return (
    <HStack gap={4}>
      <Avatar name="Avery Okafor" size="lg" tooltip />
      <Avatar name="Jordan Mensah" size="md" shape="rounded" />
      <AvatarGroup size="md">
        <Avatar name="Riley Haddad" />
        <Avatar name="Morgan Lindqvist" />
        <Avatar name="Taylor Ibarra" />
        <Avatar name="Casey Novak" />
      </AvatarGroup>
    </HStack>
  );
}
