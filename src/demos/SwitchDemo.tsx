import {useState} from 'react';
import {Switch} from '@astryxdesign/core/Switch';
import {VStack} from '@astryxdesign/core/VStack';

export default function SwitchDemo() {
  const [wifi, setWifi] = useState(true);
  const [bt, setBt] = useState(false);
  return (
    <VStack gap={2} width={320}>
      <Switch label="Wi-Fi" value={wifi} onChange={setWifi} labelSpacing="spread" />
      <Switch label="Bluetooth" description="Connect nearby devices" value={bt} onChange={setBt} labelSpacing="spread" />
    </VStack>
  );
}
