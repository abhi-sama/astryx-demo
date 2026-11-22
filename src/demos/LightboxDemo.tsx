import {useState} from 'react';
import {Lightbox} from '@astryxdesign/core/Lightbox';
import {Thumbnail} from '@astryxdesign/core/Thumbnail';
import {HStack} from '@astryxdesign/core/HStack';

const photos = [1, 2, 3].map(n => ({
  src: `https://picsum.photos/seed/astryx${n}/1200/800`,
  alt: `Sample photo ${n}`,
  caption: `Photo ${n}`,
}));

export default function LightboxDemo() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <HStack gap={2}>
        {photos.map((p, i) => (
          <Thumbnail key={p.src} src={p.src} alt={p.alt} label={p.alt} onClick={() => setIndex(i)} />
        ))}
      </HStack>
      <Lightbox
        isOpen={index !== null}
        onOpenChange={o => !o && setIndex(null)}
        media={photos}
        index={index ?? 0}
        onIndexChange={setIndex}
        hasZoom
      />
    </>
  );
}
