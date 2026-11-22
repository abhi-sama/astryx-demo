import {OverflowList} from '@astryxdesign/core/OverflowList';
import {Badge} from '@astryxdesign/core/Badge';

const tags = ['react', 'stylex', 'design', 'tokens', 'a11y', 'theming', 'motion', 'i18n', 'charts'];

export default function OverflowListDemo() {
  return (
    <div style={{maxWidth: 300, resize: 'horizontal', overflow: 'hidden', padding: 4}}>
      <OverflowList gap={1} overflowRenderer={items => <Badge label={`+${items.length}`} variant="neutral" />}>
        {tags.map(t => <Badge key={t} label={t} variant="info" />)}
      </OverflowList>
    </div>
  );
}
