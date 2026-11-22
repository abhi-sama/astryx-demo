import {Toolbar} from '@astryxdesign/core/Toolbar';
import {Button} from '@astryxdesign/core/Button';
import {ButtonGroup} from '@astryxdesign/core/ButtonGroup';
import {MoreMenu} from '@astryxdesign/core/MoreMenu';
import {Text} from '@astryxdesign/core/Text';

export default function ToolbarDemo() {
  return (
    <Toolbar
      label="Document toolbar"
      startContent={<Text weight="bold">Untitled doc</Text>}
      centerContent={
        <ButtonGroup label="History">
          <Button label="Undo" />
          <Button label="Redo" />
        </ButtonGroup>
      }
      endContent={
        <>
          <Button label="Share" variant="primary" />
          <MoreMenu label="More" items={[{label: 'Export PDF'}, {label: 'Version history'}]} />
        </>
      }
    />
  );
}
