import {useState} from 'react';
import {Stepper, Step} from '@astryxdesign/core/Stepper';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';

export default function StepperDemo() {
  const [active, setActive] = useState(1);
  return (
    <VStack gap={3}>
      <Stepper activeStep={active} onStepClick={setActive}>
        <Step step={0} label="Account" />
        <Step step={1} label="Profile" />
        <Step step={2} label="Billing" />
        <Step step={3} label="Done" />
      </Stepper>
      <Button label="Next step" onClick={() => setActive(a => Math.min(a + 1, 3))} />
    </VStack>
  );
}
