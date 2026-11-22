import {Skeleton} from '@astryxdesign/core/Skeleton';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';

export default function SkeletonDemo() {
  return (
    <HStack gap={3}>
      <Skeleton width={48} height={48} radius={4} />
      <VStack gap={2}>
        <Skeleton width={220} height={14} index={0} />
        <Skeleton width={160} height={14} index={1} />
      </VStack>
    </HStack>
  );
}
