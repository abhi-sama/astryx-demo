import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';

export default function EmptyStateDemo() {
  return (
    <EmptyState
      icon={<Icon icon="search" size="lg" />}
      title="No results"
      description="Try a different search term or clear the filters."
      actions={<Button label="Clear filters" />}
    />
  );
}
