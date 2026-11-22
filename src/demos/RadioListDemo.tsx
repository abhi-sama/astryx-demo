import {useState} from 'react';
import {RadioList, RadioListItem} from '@astryxdesign/core/RadioList';

export default function RadioListDemo() {
  const [plan, setPlan] = useState('pro');
  return (
    <RadioList label="Plan" value={plan} onChange={setPlan} width={320}>
      <RadioListItem value="free" label="Free" description="For individuals" />
      <RadioListItem value="pro" label="Pro" description="For small teams" />
      <RadioListItem value="ent" label="Enterprise" description="SSO and audit logs" />
    </RadioList>
  );
}
