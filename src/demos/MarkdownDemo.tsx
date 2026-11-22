import {Markdown} from '@astryxdesign/core/Markdown';

const md = `### Release notes

- **Faster** search
- New \`Chat\` components
- [Read the docs](https://astryx.atmeta.com)

| Plan | Price |
|------|-------|
| Free | $0 |
| Pro  | $12 |`;

export default function MarkdownDemo() {
  return <Markdown>{md}</Markdown>;
}
