import {useState} from 'react';
import {AlertDialog} from '@astryxdesign/core/AlertDialog';
import {Button} from '@astryxdesign/core/Button';

export default function AlertDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Delete project" variant="destructive" onClick={() => setOpen(true)} />
      <AlertDialog
        isOpen={open}
        onOpenChange={setOpen}
        title="Delete this project?"
        description="This removes all files and cannot be undone."
        actionLabel="Delete"
        actionVariant="destructive"
        onAction={() => setOpen(false)}
      />
    </>
  );
}
