import {useState} from 'react';
import {NumberInput} from '@astryxdesign/core/NumberInput';

export default function NumberInputDemo() {
  const [qty, setQty] = useState<number | null>(2);
  return (
    <NumberInput label="Quantity" value={qty} onChange={setQty} min={0} max={10} hasNumberSteppers width={200} />
  );
}
