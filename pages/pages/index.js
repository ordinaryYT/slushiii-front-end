import { useEffect, useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://your-render-backend-url'); // Replace with Render WebSocket URL

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessages(prev => [...prev.slice(-50), msg]); // Keep last 50 messages
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl font-bold mb-4">Live Chat Viewer</h1>
      <div className="space-y-2 overflow-y-auto h-[80vh]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded-lg ${msg.platform === 'twitch' ? 'bg-purple-600' : 'bg-red-600'}`}>
            <strong>{msg.username}</strong>: {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}
