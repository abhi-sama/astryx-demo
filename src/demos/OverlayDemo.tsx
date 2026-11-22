import {Overlay} from '@astryxdesign/core/Overlay';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';

export default function OverlayDemo() {
  return (
    <div style={{width: 320}}>
      <Overlay showOn="hover" scrim="dark" content={<span style={{color: "white", fontWeight: 600}}>Hover caption</span>}>
        <AspectRatio ratio={16 / 9} fit="cover">
          <img src="https://picsum.photos/seed/overlay/640/360" alt="Landscape" />
        </AspectRatio>
      </Overlay>
    </div>
  );
}
