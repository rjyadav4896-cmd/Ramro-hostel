import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function Chatbot({ phoneDisplay }: { phoneDisplay: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([{ type: 'bot', text: 'Namaste! How can I help you with Ramro Hostel?' }]);
  const [input, setInput] = useState('');

  const faqs = [
    { question: 'Room fees', answer: '2 sharing is Rs. 13,000, 3 sharing is Rs. 12,000, and 4 sharing is Rs. 11,000 per month. Admission fee is Rs. 2,000.' },
    { question: 'Meal time', answer: 'Breakfast: 7:30 AM - 8:40 AM, Lunch: 9:00 AM - 12:30 PM, Snacks: 4:00 PM - 5:00 PM, Dinner: 7:40 PM - 9:00 PM.' },
    { question: 'Location', answer: 'Ramro Hostel is in Narephat, Kathmandu. KMC College, stationery, library, mall, and Ratna Park access are nearby.' },
    { question: 'Contact', answer: `Please call or WhatsApp ${phoneDisplay} for direct details.` }
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { type: 'user' as const, text: input };
    setMessages((prev) => [...prev, userMessage]);

    const lower = input.toLowerCase();
    let response = `Please contact us at ${phoneDisplay} for more information.`;
    for (const faq of faqs) {
      if (lower.includes(faq.question.toLowerCase().split(' ')[0])) {
        response = faq.answer;
        break;
      }
    }

    window.setTimeout(() => setMessages((prev) => [...prev, { type: 'bot', text: response }]), 400);
    setInput('');
  };

  const handleQuickQuestion = (question: string) => {
    setMessages((prev) => [...prev, { type: 'user', text: question }]);
    const faq = faqs.find((f) => f.question === question);
    if (faq) window.setTimeout(() => setMessages((prev) => [...prev, { type: 'bot', text: faq.answer }]), 400);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-emerald-700 to-amber-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
        aria-label="Chat Support"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-50 border border-slate-200 flex flex-col max-h-[500px]">
          <div className="bg-slate-950 px-4 py-3 rounded-t-2xl">
            <h3 className="font-semibold text-white">Ramro Hostel Support</h3>
            <p className="text-xs text-slate-300">Quick answers from the HSTL_001 details</p>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl px-3 py-2 ${message.type === 'user' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-800'}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-slate-600 text-center mb-2">Quick questions:</p>
                {faqs.map((faq) => (
                  <button key={faq.question} onClick={() => handleQuickQuestion(faq.question)} className="w-full text-left px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-sm text-slate-700 transition-colors">
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-200">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm"
              />
              <button onClick={handleSend} className="w-10 h-10 rounded-md bg-emerald-700 hover:bg-emerald-800 flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
