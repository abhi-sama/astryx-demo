import {CodeBlock} from '@astryxdesign/core/CodeBlock';

const code = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}`;

export default function CodeBlockDemo() {
  return <CodeBlock code={code} language="ts" title="greet.ts" hasLineNumbers highlightLines={[2]} hasCopyButton />;
}
