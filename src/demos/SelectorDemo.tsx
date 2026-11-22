import {useState} from 'react';
import {Selector} from '@astryxdesign/core/Selector';

const options = [
  {value: 'nyc', label: 'New York'},
  {value: 'lon', label: 'London'},
  {value: 'tok', label: 'Tokyo'},
  {value: 'syd', label: 'Sydney'},
];

export default function SelectorDemo() {
  const [city, setCity] = useState('lon');
  return (
    <Selector label="Office" options={options} value={city} onChange={setCity} hasSearch width={320} />
  );
}
