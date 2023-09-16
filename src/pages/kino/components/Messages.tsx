import { useState } from 'react';

export const Messages = () => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div>
      <samp>Messages received:</samp>
      <ul>
        {messages.map((m, index) => (
          <li key={`${index}`}>{m}</li>
        ))}
      </ul>
    </div>
  );
};
