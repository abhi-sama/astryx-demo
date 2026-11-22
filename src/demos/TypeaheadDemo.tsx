import {useState} from 'react';
import {Typeahead, createStaticSource, type SearchableItem} from '@astryxdesign/core/Typeahead';

const people = createStaticSource([
  {id: '1', label: 'Avery Okafor'},
  {id: '2', label: 'Jordan Mensah'},
  {id: '3', label: 'Riley Haddad'},
  {id: '4', label: 'Morgan Lindqvist'},
]);

export default function TypeaheadDemo() {
  const [person, setPerson] = useState<SearchableItem | null>(null);
  return <Typeahead label="Assign to" searchSource={people} value={person} onChange={setPerson} hasEntriesOnFocus width={320} />;
}
