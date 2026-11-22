import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';

export default function CardDemo() {
  return (
    <Card padding={4} elevation="low" maxWidth={360}>
      <VStack gap={2}>
        <Heading level={3}>Quarterly report</Heading>
        <Text>Revenue grew 18% over last quarter, led by enterprise accounts.</Text>
        <Button label="Open report" variant="primary" />
      </VStack>
    </Card>
  );
}
