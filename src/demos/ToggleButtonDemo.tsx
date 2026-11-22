import {useState} from 'react';
import {ToggleButton, ToggleButtonGroup} from '@astryxdesign/core/ToggleButton';
import {HStack} from '@astryxdesign/core/HStack';

export default function ToggleButtonDemo() {
  const [bold, setBold] = useState(false);
  const [align, setAlign] = useState<any>('left');
  return (
    <HStack gap={4}>
      <ToggleButton label="Bold" isPressed={bold} onPressedChange={setBold} />
      <ToggleButtonGroup label="Alignment" type="single" value={align} onChange={setAlign}>
        <ToggleButton label="Left" value="left" />
        <ToggleButton label="Center" value="center" />
        <ToggleButton label="Right" value="right" />
      </ToggleButtonGroup>
    </HStack>
  );
}
