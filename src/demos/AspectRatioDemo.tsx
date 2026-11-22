import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {HStack} from '@astryxdesign/core/HStack';

export default function AspectRatioDemo() {
  return (
    <HStack gap={3}>
      <div style={{width: 200}}>
        <AspectRatio ratio={16 / 9} fit="cover"><img src="https://picsum.photos/seed/ar1/600/400" alt="Wide" /></AspectRatio>
      </div>
      <div style={{width: 120}}>
        <AspectRatio ratio={1} shape="ellipse" fit="cover"><img src="https://picsum.photos/seed/ar2/400/400" alt="Square" /></AspectRatio>
      </div>
    </HStack>
  );
}
