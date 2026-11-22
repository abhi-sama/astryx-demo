import {useState} from 'react';
import {Banner} from '@astryxdesign/core/Banner';
import {VStack} from '@astryxdesign/core/VStack';

export default function BannerDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <VStack gap={2}>
      <Banner status="info" title="New version available" description="Refresh to get the latest features." />
      {visible && (
        <Banner
          status="warning"
          title="Your trial ends in 3 days"
          description="Add a payment method to keep access."
          isDismissable
          onDismiss={() => setVisible(false)}
        />
      )}
    </VStack>
  );
}
