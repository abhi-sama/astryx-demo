import {useRef, useState} from 'react';
import {
  ChatLayout,
  ChatMessageList,
  ChatMessage,
  ChatMessageBubble,
  ChatMessageMetadata,
  ChatComposer,
  ChatSystemMessage,
  ChatToolCalls,
} from '@astryxdesign/core/Chat';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Markdown} from '@astryxdesign/core/Markdown';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Timestamp} from '@astryxdesign/core/Timestamp';

type Msg = {id: number; role: 'user' | 'assistant'; text: string; at: string; tools?: string[]};

const canned = [
  'Here is a **summary** of this week:\n\n- 128 calls logged\n- Top topic: *pricing and access*\n- 3 new questions flagged for follow-up',
  'Sure. The trend is up **12%** month over month, mostly in the North region.',
  'I could not find anything matching that. Try a different time range?',
];

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState('');
  const [streaming, setStreaming] = useState(false);
  const timer = useRef<number | null>(null);
  const turn = useRef(0);
  const nextId = useRef(0);

  function send(text: string) {
    if (!text.trim() || timer.current) return;
    const now = new Date().toISOString();
    setMessages(m => [...m, {id: nextId.current++, role: 'user', text, at: now}]);
    setDraft('');
    setStreaming(true);
    const full = canned[turn.current++ % canned.length];
    const id = nextId.current++;
    setMessages(m => [...m, {id, role: 'assistant', text: '', at: now, tools: ['search_calls', 'summarize']}]);
    let i = 0;
    timer.current = window.setInterval(() => {
      i += 3;
      setMessages(m => m.map(x => (x.id === id ? {...x, text: full.slice(0, i)} : x)));
      if (i >= full.length) stop();
    }, 30);
  }

  function stop() {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
    setStreaming(false);
  }

  return (
    <div style={{height: 560, border: '1px solid color-mix(in oklch, currentColor 15%, transparent)', borderRadius: 16, overflow: 'hidden'}}>
      <ChatLayout
        composer={
          <ChatComposer
            value={draft}
            onChange={setDraft}
            onSubmit={send}
            onStop={stop}
            isStopShown={streaming}
            placeholder="Ask about your calls..."
          />
        }>
        <ChatMessageList
          isStreaming={streaming}
          emptyState={<EmptyState title="Ask me anything" description="Try: summarize this week" />}>
          {messages.length > 0 && <ChatSystemMessage>Conversation started</ChatSystemMessage>}
          {messages.map(m =>
            m.role === 'user' ? (
              <ChatMessage key={m.id} sender="user" metadata={<ChatMessageMetadata timestamp={<Timestamp value={m.at} />} />}>
                <ChatMessageBubble>{m.text}</ChatMessageBubble>
              </ChatMessage>
            ) : (
              <ChatMessage key={m.id} sender="assistant" name="Agent" avatar={<Avatar name="Agent" size="sm" />}>
                {m.tools && <ChatToolCalls calls={m.tools.map(t => ({name: t, status: m.text ? 'complete' : 'running'} as any))} />}
                <Markdown isStreaming={streaming && !m.text.endsWith('.')}>{m.text || '…'}</Markdown>
              </ChatMessage>
            ),
          )}
        </ChatMessageList>
      </ChatLayout>
    </div>
  );
}
