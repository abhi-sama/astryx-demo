import {Collapsible} from '@astryxdesign/core/Collapsible';
import {Text} from '@astryxdesign/core/Text';

export default function CollapsibleDemo() {
  return (
    <Collapsible trigger="What is Astryx?" defaultIsOpen>
      <Text>An open source design system from Meta, built on React 19 and StyleX.</Text>
    </Collapsible>
  );
}
