import {TreeList} from '@astryxdesign/core/TreeList';

export default function TreeListDemo() {
  return (
    <TreeList
      items={[
        {id: 'src', label: 'src', children: [
          {id: 'app', label: 'App.tsx'},
          {id: 'demos', label: 'demos', children: [{id: 'btn', label: 'ButtonDemo.tsx'}]},
        ]},
        {id: 'pkg', label: 'package.json'},
      ] as any}
    />
  );
}
