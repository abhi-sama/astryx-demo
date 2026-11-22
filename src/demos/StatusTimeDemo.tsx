import {StatusDot} from '@astryxdesign/core/StatusDot';
import {Timestamp} from '@astryxdesign/core/Timestamp';
import {Timer} from '@astryxdesign/core/Timer';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';

const started = Date.now();

export default function StatusTimeDemo() {
  return (
    <VStack gap={2}>
      <HStack gap={3}>
        <StatusDot variant="success" label="Online" isPulsing />
        <StatusDot variant="warning" label="Degraded" />
        <StatusDot variant="error" label="Down" />
      </HStack>
      <Text>Posted <Timestamp value="2026-11-09T18:00:00Z" hasTooltip /></Text>
      <Text>Session time: <Timer startTime={started} /></Text>
    </VStack>
  );
}
