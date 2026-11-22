import {useState} from 'react';
import {Tab, TabList} from '@astryxdesign/core/TabList';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function TabsDemo() {
  const [tab, setTab] = useState('overview');
  return (
    <VStack gap={3}>
      <TabList value={tab} onChange={setTab} hasDivider>
        <Tab value="overview" label="Overview" />
        <Tab value="activity" label="Activity" />
        <Tab value="settings" label="Settings" />
      </TabList>
      <Text>Selected tab: {tab}</Text>
    </VStack>
  );
}
