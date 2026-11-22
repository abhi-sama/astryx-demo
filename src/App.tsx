import {useEffect, useRef, useState, type ComponentType} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {Card} from '@astryxdesign/core/Card';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Selector} from '@astryxdesign/core/Selector';
import {SegmentedControl, SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {themes, defaultThemeSlug, type ThemeSlug} from './astryx-themes';

const modules = import.meta.glob<{default: ComponentType}>('./demos/*.tsx', {eager: true});
const sources = import.meta.glob<string>('./demos/*.tsx', {eager: true, query: '?raw', import: 'default'});

const blurbs: Record<string, string> = {
  Button: 'Primary, secondary, ghost, destructive and loading actions.',
  IconButton: 'Square icon-only buttons with tooltips and accessible labels.',
  Badge: 'Small status labels in semantic colours.',
  Avatar: 'People, with initials fallback, plus a stacked group.',
  Banner: 'Page-level messages; the warning one can be dismissed.',
  Card: 'A surface that groups related content.',
  TextInput: 'Labelled text fields with live validation and clear button.',
  Switch: 'On/off settings with labels and descriptions.',
  Selector: 'A searchable single-select dropdown.',
  SegmentedControl: 'Pick one of a few mutually exclusive views.',
  Slider: 'Choose a number by dragging, with marks.',
  Tabs: 'Switch between sibling sections.',
  Collapsible: 'Show and hide a section of content.',
  Breadcrumbs: 'Where you are in a hierarchy.',
  Tooltip: 'A hint on hover or keyboard focus.',
  Dialog: 'A modal that asks for a decision.',
  DropdownMenu: 'A button that opens a list of actions.',
  Calendar: 'Pick a single date.',
  Progress: 'Determinate and indeterminate progress, plus a spinner.',
  Stepper: 'Multi-step flow; click a step or press Next.',
  Table: 'Data rows with custom cell rendering.',
  Toast: 'Transient notifications triggered from code.',
  Chat: 'User and assistant chat bubbles.',
  EmptyState: 'What to show when there is nothing to show.',
  Chatbot: 'A full working chatbot: layout, message list, streaming markdown replies, tool calls, timestamps, stop button.',
  AppShell: 'Top nav + side nav + content, wired together. Click the side nav items.',
  Layout: 'Header, side panels, scrollable content and footer regions.',
  MobileNav: 'Slide-in navigation menu for small screens.',
  Pagination: 'Move between pages of results.',
  Toolbar: 'Start, centre and end slots with a ButtonGroup and MoreMenu.',
  TreeList: 'Nested, expandable hierarchy.',
  Outline: 'An "on this page" table of contents.',
  StacksGrid: 'HStack, VStack, Grid, GridSpan and Center layout primitives.',
  SectionDivider: 'Section with dividers, and a labelled Divider.',
  ScrollableArea: 'A fixed-height region that scrolls.',
  Typography: 'Heading, Text, Code, Kbd, Link and Blockquote.',
  Markdown: 'Renders markdown, including lists and tables.',
  CodeBlock: 'Syntax-highlighted code with line numbers, highlight and copy.',
  List: 'Rows with avatars, descriptions and trailing content.',
  MetadataList: 'Label/value pairs, with StatusDot and Timestamp.',
  Carousel: 'Horizontally scrolling slides with buttons.',
  SelectableCards: 'SelectableCard (pick one) and ClickableCard.',
  Skeleton: 'Loading placeholders.',
  StatusTime: 'StatusDot, Timestamp and a live Timer.',
  TokenThumbnail: 'Removable Tokens and Thumbnails.',
  Citation: 'Numbered source citations inline in text.',
  AspectRatio: 'Keep media at a fixed ratio.',
  Icons: 'Icon, NavIcon and VisuallyHidden.',
  OverflowList: 'Collapses items that do not fit into "+N". Drag the corner to resize.',
  AlertDialog: 'A confirm-or-cancel dialog for destructive actions.',
  Drawer: 'A side panel over the page.',
  BottomSheet: 'A sheet that slides up from the bottom.',
  Popover: 'Click-triggered floating content.',
  HoverCard: 'Rich preview on hover.',
  ContextMenu: 'Right-click menu.',
  CommandPalette: 'Searchable command launcher.',
  Lightbox: 'Full-screen media viewer. Click a thumbnail.',
  Overlay: 'Content layered over media on hover.',
  InfoTip: 'An info icon with an explanation.',
  Checkbox: 'CheckboxInput and CheckboxList.',
  RadioList: 'Pick exactly one option.',
  TextArea: 'Multi-line text with a character limit.',
  NumberInput: 'Numbers with steppers and min/max.',
  DateTimeInputs: 'DateInput, DateRangeInput, DateTimeInput and TimeInput.',
  FileInput: 'Pick or drop files.',
  MultiSelector: 'Pick several options.',
  ComplexSelector: 'A selector with fully custom popup content.',
  Typeahead: 'Search-as-you-type single pick.',
  Tokenizer: 'Search-as-you-type multi pick as tokens.',
  PowerSearch: 'Structured filters: field, operator, value.',
  ToggleButton: 'ToggleButton and ToggleButtonGroup.',
  InputGroup: 'Prefix and suffix text around an input.',
  FormLayout: 'Consistent form spacing and required/optional marks.',
  Field: 'Field wraps any custom control; FieldStatus shows messages.',
};

const groups: Record<string, string[]> = {
  'Chat': ['Chatbot', 'Chat', 'Citation'],
  'Actions': ['Button', 'IconButton', 'ToggleButton', 'DropdownMenu', 'Toolbar'],
  'Forms': ['TextInput', 'TextArea', 'NumberInput', 'Checkbox', 'RadioList', 'Switch', 'Selector', 'MultiSelector', 'ComplexSelector', 'Typeahead', 'Tokenizer', 'PowerSearch', 'SegmentedControl', 'Slider', 'DateTimeInputs', 'Calendar', 'FileInput', 'InputGroup', 'FormLayout', 'Field'],
  'Overlays': ['Dialog', 'AlertDialog', 'Drawer', 'BottomSheet', 'Popover', 'HoverCard', 'Tooltip', 'InfoTip', 'ContextMenu', 'CommandPalette', 'Lightbox', 'Toast', 'Overlay'],
  'Navigation': ['AppShell', 'MobileNav', 'Tabs', 'Breadcrumbs', 'Pagination', 'Stepper', 'TreeList', 'Outline'],
  'Layout': ['Layout', 'StacksGrid', 'Card', 'SelectableCards', 'SectionDivider', 'ScrollableArea', 'AspectRatio', 'Collapsible', 'Carousel'],
  'Content': ['Typography', 'Markdown', 'CodeBlock', 'Table', 'List', 'MetadataList', 'Avatar', 'Badge', 'TokenThumbnail', 'Icons', 'OverflowList'],
  'Feedback': ['Banner', 'Progress', 'Skeleton', 'StatusTime', 'EmptyState'],
};
const wide = new Set(['Chatbot', 'AppShell', 'Layout', 'Table', 'Carousel', 'PowerSearch']);

const all = Object.keys(modules).map(path => {
  const file = path.split('/').pop()!.replace('.tsx', '');
  const name = file.replace(/Demo$/, '');
  return {name, file, Component: modules[path].default, source: sources[path]};
});
const byName = new Map(all.map(d => [d.name, d]));
const grouped = Object.entries(groups).map(([g, names]) => ({
  group: g,
  items: names.map(n => byName.get(n)).filter((d): d is (typeof all)[number] => !!d),
}));
const listed = new Set(Object.values(groups).flat());
const rest = all.filter(d => !listed.has(d.name));
if (rest.length) grouped.push({group: 'Other', items: rest});
const demos = grouped.flatMap(g => g.items);

type DeviceKey = 'desktop' | 'ipad' | 'phone';
const devices: Record<DeviceKey, {label: string; w: number; h: number}> = {
  desktop: {label: 'Desktop 1440 × 900', w: 1440, h: 900},
  ipad: {label: 'iPad 1180 × 820', w: 1180, h: 820},
  phone: {label: 'Phone 390 × 844', w: 390, h: 844},
};

const params = new URLSearchParams(window.location.search);
const embed = params.get('embed');

/** One demo alone, filling the frame's viewport, so its responsive rules see the device width. */
function Embedded({name}: {name: string}) {
  const demo = byName.get(name);
  const slug = (params.get('theme') as ThemeSlug) || defaultThemeSlug;
  const mode = (params.get('mode') as 'light' | 'dark') || 'light';
  return (
    <Theme theme={themes[slug] ?? themes[defaultThemeSlug]} mode={mode}>
      <div className="embed" style={{minHeight: 0}}>{demo ? <demo.Component /> : <Text>Unknown demo {name}</Text>}</div>
    </Theme>
  );
}

/** A device-sized viewport (an iframe), zoomed down to fit the space it has. */
function DeviceFrame({name, device, portrait, slug, mode}: {name: string; device: DeviceKey; portrait: boolean; slug: string; mode: string}) {
  const box = useRef<HTMLDivElement>(null);
  const [avail, setAvail] = useState(0);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setAvail(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const d = devices[device];
  const rotate = device === 'ipad' && portrait;
  const w = rotate ? d.h : d.w;
  const h = rotate ? d.w : d.h;
  const border = device === 'desktop' ? 2 : 20;
  const zoom = avail ? Math.min(1, avail / (w + border)) : 1;
  const label = device === 'ipad' ? `iPad ${w} × ${h}` : d.label;
  // Fit the frame to the component's own height (never taller than the device), so small components are not lost in blank space.
  const [content, setContent] = useState(0);
  const watch = (frame: HTMLIFrameElement | null) => {
    const doc = frame?.contentDocument;
    if (!doc?.body) return;
    const root = doc.getElementById('root');
    if (!root) return;
    const measure = () => setContent(Math.ceil(root.getBoundingClientRect().height));
    new ResizeObserver(measure).observe(root);
    measure();
  };
  const shownH = content ? Math.min(h, Math.max(240, content)) : h;
  return (
    <div className="device" ref={box}>
      <div className="devicelabel">{label}{zoom < 1 ? ` · shown at ${Math.round(zoom * 100)}%` : ''}</div>
      <iframe
        title={`${name} on ${label}`}
        className={`frame ${device}`}
        loading="lazy"
        src={`?embed=${encodeURIComponent(name)}&theme=${slug}&mode=${mode}`}
        onLoad={e => watch(e.currentTarget)}
        style={{width: w + border, height: shownH + border, zoom}}
      />
    </div>
  );
}

export default function App() {
  if (embed) return <Embedded name={embed} />;
  return <Showcase />;
}

function Showcase() {
  const [slug, setSlug] = useState<ThemeSlug>(defaultThemeSlug);
  const [mode, setMode] = useState('light');
  const [view, setView] = useState('inline');
  const [portrait, setPortrait] = useState(false);
  const shown: DeviceKey[] = view === 'all' ? ['desktop', 'ipad', 'phone'] : view === 'inline' ? [] : [view as DeviceKey];
  return (
    <Theme theme={themes[slug]} mode={mode as 'light' | 'dark' | 'system'}>
      <div className="shell">
        <aside className="sidebar">
          <Heading level={2}>Astryx</Heading>
          <Text>{demos.length} components</Text>
          <nav>
            {grouped.map(g => (
              <div key={g.group} className="navgroup">
                <div className="navhead">{g.group}</div>
                {g.items.map(d => (
                  <a key={d.name} href={`#${d.name}`}>{d.name}</a>
                ))}
              </div>
            ))}
          </nav>
        </aside>
        <main className="main">
          <VStack gap={6}>
            <HStack gap={4} justify="between" wrap="wrap">
              <VStack gap={1}>
                <Heading level={1}>Astryx component demo</Heading>
                <Text>Each card shows the live component and the exact code that renders it.</Text>
              </VStack>
              <HStack gap={3} wrap="wrap">
                <Selector
                  label="Theme"
                  width={180}
                  value={slug}
                  onChange={v => setSlug(v as ThemeSlug)}
                  options={Object.keys(themes).map(t => ({value: t, label: t}))}
                />
                <SegmentedControl label="Mode" value={mode} onChange={setMode}>
                  <SegmentedControlItem value="light" label="Light" />
                  <SegmentedControlItem value="dark" label="Dark" />
                </SegmentedControl>
                <SegmentedControl label="Device" value={view} onChange={setView}>
                  <SegmentedControlItem value="inline" label="This window" />
                  <SegmentedControlItem value="desktop" label="Desktop" />
                  <SegmentedControlItem value="ipad" label="iPad" />
                  <SegmentedControlItem value="phone" label="Phone" />
                  <SegmentedControlItem value="all" label="All three" />
                </SegmentedControl>
                {(view === 'ipad' || view === 'all') && (
                  <SegmentedControl label="iPad" value={portrait ? 'portrait' : 'landscape'} onChange={v => setPortrait(v === 'portrait')}>
                    <SegmentedControlItem value="landscape" label="Landscape" />
                    <SegmentedControlItem value="portrait" label="Portrait" />
                  </SegmentedControl>
                )}
              </HStack>
            </HStack>
            {demos.map(({name, Component, source}) => (
              <section id={name} key={name}>
                <Card padding={5} elevation="low">
                  <VStack gap={4}>
                    <VStack gap={1}>
                      <Heading level={2}>{name}</Heading>
                      <Text>{blurbs[name] ?? ''}</Text>
                    </VStack>
                    {shown.length > 0 && (
                      <div className={`devices n${shown.length}`}>
                        {shown.map(dv => (
                          <DeviceFrame key={dv} name={name} device={dv} portrait={portrait} slug={slug} mode={mode} />
                        ))}
                      </div>
                    )}
                    <div className={wide.has(name) || shown.length > 0 ? "split wide" : "split"}>
                      {shown.length === 0 && <div className="live"><Component /></div>}
                      <div className="code">
                        <CodeBlock code={source.trim()} language="tsx" hasCopyButton maxHeight={420} size="sm" />
                      </div>
                    </div>
                  </VStack>
                </Card>
              </section>
            ))}
          </VStack>
        </main>
      </div>
    </Theme>
  );
}
