import {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';

export default function MultiSelectorDemo() {
  const [tags, setTags] = useState<string[]>(['react']);
  return (
    <MultiSelector
      label="Tags"
      value={tags}
      onChange={setTags}
      width={320}
      options={[
        {value: 'react', label: 'React'},
        {value: 'css', label: 'CSS'},
        {value: 'a11y', label: 'Accessibility'},
        {value: 'perf', label: 'Performance'},
      ]}
    />
  );
}
