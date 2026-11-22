import {useState} from 'react';
import {Token} from '@astryxdesign/core/Token';
import {Thumbnail} from '@astryxdesign/core/Thumbnail';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';

export default function TokenThumbnailDemo() {
  const [tags, setTags] = useState(['design', 'react', 'a11y']);
  return (
    <VStack gap={3}>
      <HStack gap={2}>
        {tags.map(t => (
          <Token key={t} label={t} onRemove={() => setTags(x => x.filter(y => y !== t))} />
        ))}
      </HStack>
      <HStack gap={2}>
        <Thumbnail src="https://picsum.photos/seed/t1/200" alt="Upload 1" label="Upload 1" onRemove={() => {}} showRemoveOn="always" />
        <Thumbnail src="https://picsum.photos/seed/t2/200" alt="Upload 2" label="Upload 2" isLoading />
      </HStack>
    </VStack>
  );
}
