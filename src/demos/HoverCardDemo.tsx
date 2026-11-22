import {HoverCard} from '@astryxdesign/core/HoverCard';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Link} from '@astryxdesign/core/Link';

export default function HoverCardDemo() {
  return (
    <HoverCard
      label="Profile"
      content={
        <VStack gap={2} padding={3}>
          <Avatar name="Avery Okafor" size="lg" />
          <Text weight="bold">Avery Okafor</Text>
          <Text>Staff engineer, Platform team</Text>
        </VStack>
      }>
      <Link href="#">@avery</Link>
    </HoverCard>
  );
}
