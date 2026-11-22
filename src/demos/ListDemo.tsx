import {List, ListItem} from '@astryxdesign/core/List';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Badge} from '@astryxdesign/core/Badge';

export default function ListDemo() {
  return (
    <List hasDividers>
      <ListItem label="Avery Okafor" description="Engineer" startContent={<Avatar name="Avery Okafor" size="sm" />} endContent={<Badge label="Admin" variant="info" />} onClick={() => {}} />
      <ListItem label="Jordan Mensah" description="Designer" startContent={<Avatar name="Jordan Mensah" size="sm" />} onClick={() => {}} />
      <ListItem label="Riley Haddad" description="PM" startContent={<Avatar name="Riley Haddad" size="sm" />} onClick={() => {}} />
    </List>
  );
}
