import {Table} from '@astryxdesign/core/Table';
import {Badge} from '@astryxdesign/core/Badge';

type Row = {id: string; name: string; role: string; status: string};
const rows: Row[] = [
  {id: '1', name: 'Avery Okafor', role: 'Engineer', status: 'Active'},
  {id: '2', name: 'Jordan Mensah', role: 'Designer', status: 'Away'},
  {id: '3', name: 'Riley Haddad', role: 'PM', status: 'Active'},
];

export default function TableDemo() {
  return (
    <Table<Row>
      data={rows}
      idKey="id"
      hasHover
      isStriped
      columns={[
        {key: 'name', header: 'Name'},
        {key: 'role', header: 'Role'},
        {
          key: 'status',
          header: 'Status',
          renderCell: r => <Badge label={r.status} variant={r.status === 'Active' ? 'success' : 'warning'} />,
        },
      ]}
    />
  );
}
