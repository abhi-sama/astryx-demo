import {ScrollableArea} from '@astryxdesign/core/ScrollableArea';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function ScrollableAreaDemo() {
  return (
    <ScrollableArea label="Log" height={160} padding={3}>
      <VStack gap={1}>
        {Array.from({length: 30}, (_, i) => (
          <Text key={i}>Log line {i + 1}: request handled in {20 + i} ms</Text>
        ))}
      </VStack>
    </ScrollableArea>
  );
}
