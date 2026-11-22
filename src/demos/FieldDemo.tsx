import {Field} from '@astryxdesign/core/Field';
import {FieldStatus} from '@astryxdesign/core/FieldStatus';
import {VStack} from '@astryxdesign/core/VStack';

export default function FieldDemo() {
  return (
    <VStack gap={3} width={320}>
      <Field label="Custom control" inputID="custom-color" description="Field wraps any input with a label">
        <input id="custom-color" type="color" defaultValue="#6741d9" />
      </Field>
      <FieldStatus type="error" message="This is a standalone field status message" />
    </VStack>
  );
}
