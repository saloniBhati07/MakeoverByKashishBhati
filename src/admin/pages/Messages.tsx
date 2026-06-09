import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Circle, CheckCheck } from 'lucide-react';
import { conversations, type Conversation } from '../data/mockData';

const GOLD = '#C8A97E';

export function Messages() {
  const [convs, setConvs] = useState<Conversation[]>(conversations);
  const [activeId, setActiveId] = useState<string>(conversations[0].id);
  const [reply, setReply] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const active = convs.find(c => c.id === activeId)!;

  // Mark as read when opening
  const openConversation = (id: string) => {
    setConvs(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
    setActiveId(id);
  };

  const sendReply = () => {
    if (!reply.trim()) return;
    const newMsg = { id: `m${Date.now()}`, text: reply, timestamp: 'Now', isFromClient: false };
    setConvs(prev => prev.map(c => c.id === activeId ? {
      ...c, messages: [...c.messages, newMsg], lastMessage: reply, timestamp: 'Now',
    } : c));
    setReply('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [active?.messages.length]);

  const totalUnread = convs.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Messages</h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>
          {totalUnread > 0 ? <><span style={{ color: GOLD, fontWeight: 600 }}>{totalUnread} unread</span> messages</> : 'All messages read'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 0, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid rgba(200,169,126,0.15)', boxShadow: '0 2px 12px rgba(44,44,44,0.04)', overflow: 'hidden', height: '68vh' }}>
        {/* Conversation list */}
        <div style={{ borderRight: '1px solid rgba(200,169,126,0.1)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px 16px 12px', borderBottom: '1px solid rgba(200,169,126,0.1)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>Conversations</h3>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {convs.map(conv => {
              const isActive = conv.id === activeId;
              return (
                <div key={conv.id}
                  onClick={() => openConversation(conv.id)}
                  style={{ padding: '14px 16px', cursor: 'pointer', borderBottom: '1px solid rgba(200,169,126,0.06)', backgroundColor: isActive ? 'rgba(200,169,126,0.08)' : 'transparent', borderLeft: isActive ? `3px solid ${GOLD}` : '3px solid transparent', transition: 'all 0.15s' }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = '#FAFAF8'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#FFF', fontWeight: 600 }}>
                        {conv.avatar}
                      </div>
                      {conv.unread > 0 && (
                        <span style={{ position: 'absolute', top: -2, right: -2, width: 16, height: 16, borderRadius: '50%', backgroundColor: GOLD, border: '2px solid #FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#FFF', fontWeight: 700, fontFamily: "'Jost', sans-serif" }}>
                          {conv.unread}
                        </span>
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13.5, fontWeight: conv.unread > 0 ? 600 : 500, color: '#2C2C2C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {conv.clientName}
                        </span>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#B0A8A0', flexShrink: 0, marginLeft: 8 }}>{conv.timestamp}</span>
                      </div>
                      <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 12, color: conv.unread > 0 ? '#4A4040' : '#8A7A6E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: conv.unread > 0 ? 500 : 400 }}>
                        {conv.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Message thread */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Thread header */}
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#FFF', fontWeight: 600, flexShrink: 0 }}>
              {active.avatar}
            </div>
            <div>
              <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 600, color: '#2C2C2C' }}>{active.clientName}</p>
              <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Circle size={7} color="#22C55E" fill="#22C55E" /> Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {active.messages.map(msg => (
              <motion.div key={msg.id}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', justifyContent: msg.isFromClient ? 'flex-start' : 'flex-end' }}
              >
                <div style={{ maxWidth: '70%' }}>
                  {msg.isFromClient && (
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 10, color: '#FFF', fontWeight: 600, marginBottom: 4 }}>
                      {active.avatar}
                    </div>
                  )}
                  <div style={{
                    backgroundColor: msg.isFromClient ? '#F8F5F2' : '#1A1A1A',
                    color: msg.isFromClient ? '#2C2C2C' : '#F8F5F2',
                    borderRadius: msg.isFromClient ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                    padding: '10px 14px',
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    border: msg.isFromClient ? '1px solid rgba(200,169,126,0.15)' : 'none',
                  }}>
                    {msg.text}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, justifyContent: msg.isFromClient ? 'flex-start' : 'flex-end' }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10.5, color: '#B0A8A0' }}>{msg.timestamp}</span>
                    {!msg.isFromClient && <CheckCheck size={11} color={GOLD} />}
                  </div>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Reply input */}
          <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(200,169,126,0.1)', display: 'flex', gap: 10, alignItems: 'flex-end' }}>
            <textarea
              value={reply}
              onChange={e => setReply(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendReply(); } }}
              placeholder="Type a reply... (Enter to send)"
              rows={2}
              style={{ flex: 1, border: '1px solid rgba(200,169,126,0.25)', borderRadius: 12, padding: '10px 14px', fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: '#2C2C2C', outline: 'none', resize: 'none', backgroundColor: '#FAFAF8' }}
            />
            <button onClick={sendReply}
              style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: GOLD, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Send size={17} color="#FFF" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
