import {useState} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {VStack} from '@astryxdesign/core/VStack';

export default function TextInputDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const invalid = email.length > 0 && !email.includes('@');
  return (
    <VStack gap={3} width={320}>
      <TextInput
        label="Email"
        placeholder="you@example.com"
        value={email}
        onChange={setEmail}
        hasClear
        status={invalid ? {type: 'error', message: 'Enter a valid email'} : undefined}
      />
      <TextInput label="Password" type="password" value={password} onChange={setPassword} description="At least 8 characters" />
    </VStack>
  );
}
