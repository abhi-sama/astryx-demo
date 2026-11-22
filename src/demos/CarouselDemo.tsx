import {Carousel} from '@astryxdesign/core/Carousel';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';

export default function CarouselDemo() {
  return (
    <Carousel aria-label="Featured" hasButtons gap={3}>
      {[1, 2, 3, 4, 5, 6].map(n => (
        <Card key={n} padding={4} width={200}>
          <img src={`https://picsum.photos/seed/c${n}/400/240`} alt="" style={{width: '100%', borderRadius: 8}} />
          <Text>Slide {n}</Text>
        </Card>
      ))}
    </Carousel>
  );
}
