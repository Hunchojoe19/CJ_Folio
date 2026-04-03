import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqsLeft = [
  {
    question: "What type of photography do you specialize in?",
    answer: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
  },
  {
    question: "How can I book a photography session with you?",
    answer: "You can book a session by reaching out through the contact form on this website or by sending an email directly to Idaviesco@yahoo.com."
  },
  {
    question: "What equipment do you use for your photography?",
    answer: "I use mirrorless cameras along with a variety of premium lenses to ensure the highest quality images."
  },
  {
    question: "Can I request a specific location for a shoot?",
    answer: "Absolutely! I am available to travel to your preferred location. Travel fees may apply depending on the distance."
  }
];

const faqsRight = [
  {
    question: "What is your editing process like?",
    answer: "My editing process focuses on enhancing the natural beauty of the image while maintaining a timeless and authentic feel."
  },
  {
    question: "Are digital files included in your photography packages?",
    answer: "Yes, high-resolution digital files are included in all of my standard photography packages."
  },
  {
    question: "Do you offer prints of your photographs?",
    answer: "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing."
  },
  {
    question: "How long does it take to receive the edited photos after a session?",
    answer: "Typically, you will receive your fully edited photo gallery within 2-3 weeks after your photography session."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <h4 className={`text-[15px] font-medium transition ${isOpen ? 'text-white' : 'text-gray-400'}`}>
          {question.toUpperCase()}
        </h4>
        <div className="w-8 h-8 rounded-full bg-[#121214] flex items-center justify-center shrink-0 border border-gray-800">
          {isOpen ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 text-sm leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndexLeft, setOpenIndexLeft] = useState(0);
  const [openIndexRight, setOpenIndexRight] = useState(2);

  return (
    <section className="py-20 px-10 bg-[#070708] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            FAQ's
          </p>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            {faqsLeft.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndexLeft === idx}
                onClick={() => setOpenIndexLeft(openIndexLeft === idx ? -1 : idx)}
              />
            ))}
          </div>
          <div>
            {faqsRight.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndexRight === idx}
                onClick={() => setOpenIndexRight(openIndexRight === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
