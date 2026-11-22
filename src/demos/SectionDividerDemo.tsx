import {Section} from '@astryxdesign/core/Section';
import {Divider} from '@astryxdesign/core/Divider';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export default function SectionDividerDemo() {
  return (
    <Section padding={3} dividers={['top', 'bottom']}>
      <Heading level={4}>Billing</Heading>
      <Text>Sections group related content with optional dividers.</Text>
      <Divider label="or" />
      <Text>Dividers can carry a label.</Text>
    </Section>
  );
}
