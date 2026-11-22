import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Code} from '@astryxdesign/core/Code';
import {Kbd} from '@astryxdesign/core/Kbd';
import {Link} from '@astryxdesign/core/Link';
import {Blockquote} from '@astryxdesign/core/Blockquote';
import {VStack} from '@astryxdesign/core/VStack';

export default function TypographyDemo() {
  return (
    <VStack gap={2}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Text>Body text with <Code>inline code</Code>, a <Link href="#">link</Link>, and <Kbd keys="mod+k" /></Text>
      <Text color="secondary" size="sm">Secondary small text</Text>
      <Blockquote cite="Design principle">Guidance over enforcement.</Blockquote>
    </VStack>
  );
}
