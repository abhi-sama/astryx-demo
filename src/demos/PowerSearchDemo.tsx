import {useState} from 'react';
import {PowerSearch, createPowerSearchConfig, type PowerSearchFilter} from '@astryxdesign/core/PowerSearch';

const {config} = createPowerSearchConfig([
  {key: 'name', type: 'string', label: 'Name'},
  {key: 'age', type: 'number', label: 'Age'},
  {key: 'team', type: 'enum', label: 'Team', enumValues: [{value: 'eng', label: 'Engineering'}, {value: 'design', label: 'Design'}]},
] as const);

export default function PowerSearchDemo() {
  const [filters, setFilters] = useState<ReadonlyArray<PowerSearchFilter>>([]);
  return <PowerSearch label="Filter people" config={config} filters={filters} onChange={f => setFilters(f)} />;
}
