import {Tooltip} from '@astryxdesign/core/Tooltip';
import {Button} from '@astryxdesign/core/Button';

export default function TooltipDemo() {
  return (
    <Tooltip content="Saved 2 minutes ago" placement="above">
      <Button label="Hover or focus me" />
    </Tooltip>
  );
}
