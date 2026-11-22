import {useState} from 'react';
import {TextArea} from '@astryxdesign/core/TextArea';

export default function TextAreaDemo() {
  const [notes, setNotes] = useState('');
  return (
    <TextArea label="Notes" value={notes} onChange={setNotes} rows={4} maxLength={200} placeholder="Write something..." width={360} />
  );
}
