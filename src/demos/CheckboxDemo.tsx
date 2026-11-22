import {useState} from 'react';
import {CheckboxInput} from '@astryxdesign/core/CheckboxInput';
import {CheckboxList, CheckboxListItem} from '@astryxdesign/core/CheckboxList';
import {VStack} from '@astryxdesign/core/VStack';

export default function CheckboxDemo() {
  const [terms, setTerms] = useState(false);
  const [toppings, setToppings] = useState<string[]>(['cheese']);
  return (
    <VStack gap={4} width={320}>
      <CheckboxInput label="I accept the terms" value={terms} onChange={setTerms} />
      <CheckboxList label="Toppings" value={toppings} onChange={setToppings}>
        <CheckboxListItem value="cheese" label="Cheese" />
        <CheckboxListItem value="olives" label="Olives" description="Kalamata" />
        <CheckboxListItem value="peppers" label="Peppers" />
      </CheckboxList>
    </VStack>
  );
}
