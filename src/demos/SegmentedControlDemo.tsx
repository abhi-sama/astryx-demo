import {useState} from 'react';
import {SegmentedControl, SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function SegmentedControlDemo() {
  const [view, setView] = useState('week');
  return (
    <VStack gap={2}>
      <SegmentedControl label="Range" value={view} onChange={setView}>
        <SegmentedControlItem value="day" label="Day" />
        <SegmentedControlItem value="week" label="Week" />
        <SegmentedControlItem value="month" label="Month" />
      </SegmentedControl>
      <Text>Showing: {view}</Text>
    </VStack>
  );
}
