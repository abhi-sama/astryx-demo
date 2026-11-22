import {useState} from 'react';
import {MobileNav} from '@astryxdesign/core/MobileNav';
import {SideNavItem} from '@astryxdesign/core/SideNav';
import {Button} from '@astryxdesign/core/Button';

export default function MobileNavDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Open mobile menu" onClick={() => setOpen(true)} />
      <MobileNav isOpen={open} onOpenChange={setOpen} label="Main menu">
        <SideNavItem label="Home" isSelected onClick={() => setOpen(false)} />
        <SideNavItem label="Search" onClick={() => setOpen(false)} />
        <SideNavItem label="Profile" onClick={() => setOpen(false)} />
      </MobileNav>
    </>
  );
}
