import {useState} from 'react';
import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {SideNav, SideNavItem, SideNavSection} from '@astryxdesign/core/SideNav';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

const pages = ['Dashboard', 'Projects', 'Reports', 'Settings'];

export default function AppShellDemo() {
  const [page, setPage] = useState('Dashboard');
  return (
    <div style={{height: 420, border: '1px solid color-mix(in oklch, currentColor 15%, transparent)', borderRadius: 12, overflow: 'hidden'}}>
      <AppShell
        height="fill"
        topNav={
          <TopNav heading={<TopNavHeading heading="Acme" />}>
            <TopNavItem label="Home" href="#" isSelected />
            <TopNavItem label="Docs" href="#" />
          </TopNav>
        }
        sideNav={
          <SideNav>
            <SideNavSection title="Workspace">
              {pages.map(p => (
                <SideNavItem key={p} label={p} isSelected={p === page} onClick={() => setPage(p)} />
              ))}
            </SideNavSection>
          </SideNav>
        }>
        <VStack gap={2} padding={5}>
          <Heading level={2}>{page}</Heading>
          <Text>AppShell wires the top nav, side nav and content area together.</Text>
        </VStack>
      </AppShell>
    </div>
  );
}
