import {useState} from 'react';
import {FileInput} from '@astryxdesign/core/FileInput';

export default function FileInputDemo() {
  const [files, setFiles] = useState<any>(null);
  return (
    <FileInput label="Attachments" value={files} onChange={setFiles} isMultiple accept="image/*,.pdf" width={360} />
  );
}
