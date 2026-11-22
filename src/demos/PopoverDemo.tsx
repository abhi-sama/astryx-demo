import {Popover} from '@astryxdesign/core/Popover';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';

export default function PopoverDemo() {
  return (
    <Popover label="Details" content={<Text>Popovers hold richer, interactive content.</Text>} padding={3}>
      <Button label="Open popover" />
    </Popover>
  );
}
