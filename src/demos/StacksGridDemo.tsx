import {Grid, GridSpan} from '@astryxdesign/core/Grid';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Center} from '@astryxdesign/core/Center';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';

const Box = ({t}: {t: string}) => <Card padding={3}><Center><Text>{t}</Text></Center></Card>;

export default function StacksGridDemo() {
  return (
    <VStack gap={3}>
      <HStack gap={2}><Box t="HStack 1" /><Box t="HStack 2" /><Box t="HStack 3" /></HStack>
      <Grid columns={3} gap={2}>
        <GridSpan columns={2}><Box t="Grid span 2" /></GridSpan>
        <Box t="1" />
        <Box t="1" />
        <GridSpan columns={2}><Box t="Grid span 2" /></GridSpan>
      </Grid>
    </VStack>
  );
}
