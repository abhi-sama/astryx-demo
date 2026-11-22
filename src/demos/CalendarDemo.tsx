import {useState} from 'react';
import {Calendar, type ISODateString} from '@astryxdesign/core/Calendar';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function CalendarDemo() {
  const [date, setDate] = useState<ISODateString | null>('2026-11-10');
  return (
    <VStack gap={2}>
      <Calendar mode="single" value={date} onChange={(d: ISODateString | null) => setDate(d)} />
      <Text>Picked: {date ?? 'none'}</Text>
    </VStack>
  );
}
