import {Layout, LayoutHeader, LayoutContent, LayoutPanel, LayoutFooter} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';

export default function LayoutDemo() {
  return (
    <div style={{height: 300, border: '1px solid color-mix(in oklch, currentColor 15%, transparent)', borderRadius: 12, overflow: 'hidden'}}>
      <Layout
        height="fill"
        header={<LayoutHeader hasDivider padding={3}><Text weight="bold">Header</Text></LayoutHeader>}
        start={<LayoutPanel hasDivider width={160} padding={3}><Text>Start panel</Text></LayoutPanel>}
        content={<LayoutContent padding={3} isScrollable><Text>Main content scrolls independently.</Text></LayoutContent>}
        end={<LayoutPanel hasDivider width={160} padding={3}><Text>End panel</Text></LayoutPanel>}
        footer={<LayoutFooter hasDivider padding={3}><Text>Footer</Text></LayoutFooter>}
      />
    </div>
  );
}
