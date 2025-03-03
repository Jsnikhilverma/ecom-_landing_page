import { useState } from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "Is the app free to download?",
      answer:
        "Yes, the app is completely free to download and use with our basic features. We offer premium subscriptions for enhanced features and exclusive benefits.",
    },
    {
      question: "Which platforms is the app available on?",
      answer:
        "Our app is available on both iOS and Android platforms. You can download it from the Apple App Store or Google Play Store.",
    },
    {
      question: "How do I get the exclusive app-only deals?",
      answer:
        "Exclusive deals are available to all app users. Premium subscribers get access to additional special offers and early access to sales.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption to protect your payment information and ensure secure transactions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Find answers to common questions about our app
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center p-4 text-lg font-medium"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="px-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
