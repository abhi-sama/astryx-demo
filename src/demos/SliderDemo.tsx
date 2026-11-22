import {useState} from 'react';
import {Slider} from '@astryxdesign/core/Slider';

export default function SliderDemo() {
  const [volume, setVolume] = useState(40);
  return (
    <Slider
      label="Volume"
      value={volume}
      onChange={setVolume}
      valueDisplay="text"
      marks={[{value: 0, label: '0'}, {value: 50, label: '50'}, {value: 100, label: '100'}]}
      width={320}
    />
  );
}
