import {useState} from 'react';
import {ComplexSelector} from '@astryxdesign/core/ComplexSelector';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';

const colors = ['Red', 'Green', 'Blue', 'Purple'];

export default function ComplexSelectorDemo() {
  const [color, setColor] = useState('Blue');
  return (
    <ComplexSelector label="Brand colour" value={color} onChange={setColor} triggerLabel={color} width={240}>
      {(value, onChange, close) => (
        <VStack gap={1} padding={2}>
          {colors.map(c => (
            <Button key={c} label={c} variant={c === value ? 'primary' : 'ghost'} onClick={() => { onChange(c); close(); }} />
          ))}
        </VStack>
      )}
    </ComplexSelector>
  );
}
