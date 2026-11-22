import {useState} from 'react';
import {InputGroup, InputGroupText} from '@astryxdesign/core/InputGroup';
import {TextInput} from '@astryxdesign/core/TextInput';

export default function InputGroupDemo() {
  const [site, setSite] = useState('example');
  return (
    <InputGroup label="Website">
      <InputGroupText>https://</InputGroupText>
      <TextInput label="Domain" isLabelHidden value={site} onChange={setSite} />
      <InputGroupText>.com</InputGroupText>
    </InputGroup>
  );
}
