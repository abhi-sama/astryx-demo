import {Citation} from '@astryxdesign/core/Citation';
import {Text} from '@astryxdesign/core/Text';

export default function CitationDemo() {
  return (
    <Text>
      Astryx powers over 13,000 internal apps
      <Citation number={1} source={{title: 'Astryx README', url: 'https://github.com/meta/astryx'}} />
      and ships 150+ components
      <Citation number={2} source={{title: 'Astryx docs', url: 'https://astryx.atmeta.com'}} />.
    </Text>
  );
}
