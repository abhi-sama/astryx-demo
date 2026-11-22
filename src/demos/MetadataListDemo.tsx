import {MetadataList, MetadataListItem} from '@astryxdesign/core/MetadataList';
import {Timestamp} from '@astryxdesign/core/Timestamp';
import {StatusDot} from '@astryxdesign/core/StatusDot';

export default function MetadataListDemo() {
  return (
    <MetadataList title="Deployment">
      <MetadataListItem label="Status"><StatusDot variant="success" label="Live" /></MetadataListItem>
      <MetadataListItem label="Region">us-east-1</MetadataListItem>
      <MetadataListItem label="Updated"><Timestamp value="2026-11-10T09:00:00Z" /></MetadataListItem>
    </MetadataList>
  );
}
