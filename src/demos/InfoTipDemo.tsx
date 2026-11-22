import {InfoTip} from '@astryxdesign/core/InfoTip';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';

export default function InfoTipDemo() {
  return (
    <HStack gap={1}>
      <Text>Monthly active users</Text>
      <InfoTip label="About this metric" content="Unique users who signed in at least once in the last 30 days." />
    </HStack>
  );
}
