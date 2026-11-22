import {useState} from 'react';
import {FormLayout} from '@astryxdesign/core/FormLayout';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Switch} from '@astryxdesign/core/Switch';
import {Button} from '@astryxdesign/core/Button';

export default function FormLayoutDemo() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [news, setNews] = useState(true);
  return (
    <div style={{maxWidth: 400}}>
      <FormLayout defaultOptionality="required">
        <TextInput label="Full name" value={name} onChange={setName} />
        <TextInput label="Company" value={company} onChange={setCompany} isOptional />
        <Switch label="Send me product news" value={news} onChange={setNews} />
        <Button label="Create account" variant="primary" type="submit" />
      </FormLayout>
    </div>
  );
}
