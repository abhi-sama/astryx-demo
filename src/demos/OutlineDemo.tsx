import {useState} from 'react';
import {Outline} from '@astryxdesign/core/Outline';

export default function OutlineDemo() {
  const [active, setActive] = useState('Button');
  return (
    <Outline
      label="On this page"
      activeId={active}
      onActiveIdChange={setActive}
      items={[
        {id: 'Button', label: 'Button', level: 1},
        {id: 'Dialog', label: 'Dialog', level: 1},
        {id: 'Chatbot', label: 'Chatbot', level: 2},
      ] as any}
    />
  );
}
