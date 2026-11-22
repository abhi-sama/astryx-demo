import {useState} from 'react';
import {DateInput} from '@astryxdesign/core/DateInput';
import {DateRangeInput} from '@astryxdesign/core/DateRangeInput';
import {DateTimeInput} from '@astryxdesign/core/DateTimeInput';
import {TimeInput} from '@astryxdesign/core/TimeInput';
import {VStack} from '@astryxdesign/core/VStack';

export default function DateTimeInputsDemo() {
  const [date, setDate] = useState<any>('2026-11-10');
  const [range, setRange] = useState<any>(null);
  const [when, setWhen] = useState<any>(undefined);
  const [time, setTime] = useState<any>('09:30');
  return (
    <VStack gap={3} width={320}>
      <DateInput label="Due date" value={date} onChange={setDate} />
      <DateRangeInput label="Trip" value={range} onChange={setRange} />
      <DateTimeInput label="Meeting" value={when} onChange={setWhen} />
      <TimeInput label="Alarm" value={time} onChange={setTime} />
    </VStack>
  );
}
