import {useState} from 'react';
import {Tokenizer} from '@astryxdesign/core/Tokenizer';
import {createStaticSource, type SearchableItem} from '@astryxdesign/core/Typeahead';

const labels = createStaticSource([
  {id: 'bug', label: 'bug'},
  {id: 'feature', label: 'feature'},
  {id: 'docs', label: 'docs'},
  {id: 'urgent', label: 'urgent'},
]);

export default function TokenizerDemo() {
  const [items, setItems] = useState<SearchableItem[]>([{id: 'bug', label: 'bug'}]);
  return <Tokenizer label="Labels" searchSource={labels} value={items} onChange={setItems} hasEntriesOnFocus width={360} />;
}
