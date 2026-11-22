import {useState} from 'react';
import {SelectableCard} from '@astryxdesign/core/SelectableCard';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';

export default function SelectableCardsDemo() {
  const [picked, setPicked] = useState('a');
  const [clicks, setClicks] = useState(0);
  return (
    <HStack gap={3} wrap="wrap">
      {['a', 'b'].map(k => (
        <SelectableCard key={k} label={`Option ${k.toUpperCase()}`} isSelected={picked === k} onChange={() => setPicked(k)} padding={4} width={160}>
          <Text>Option {k.toUpperCase()}</Text>
        </SelectableCard>
      ))}
      <ClickableCard label="Clickable card" onClick={() => setClicks(c => c + 1)} padding={4} width={180}>
        <Text>Clicked {clicks} times</Text>
      </ClickableCard>
    </HStack>
  );
}
