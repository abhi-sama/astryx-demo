import {ChatMessage, ChatMessageBubble} from '@astryxdesign/core/Chat';
import {Avatar} from '@astryxdesign/core/Avatar';
import {VStack} from '@astryxdesign/core/VStack';

export default function ChatDemo() {
  return (
    <VStack gap={2} maxWidth={480}>
      <ChatMessage sender="user">
        <ChatMessageBubble>What are the main concerns this quarter?</ChatMessageBubble>
      </ChatMessage>
      <ChatMessage sender="assistant" avatar={<Avatar name="Agent" size="sm" />} name="Agent">
        <ChatMessageBubble>Pricing and access came up most, in 42% of calls.</ChatMessageBubble>
      </ChatMessage>
    </VStack>
  );
}
