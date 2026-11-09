import { useState, useCallback } from 'react';
import './Faq.css';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'A entrada do festival é gratuita?',
    answer:
      'Sim! A entrada é gratuita. Os alimentos, as bebidas e os produtos comercializados pelos participantes são pagos à parte.',
  },
  {
    question: 'Quando e onde acontece o festival?',
    answer:
      'Nos dias 20 e 21 de novembro de 2026, na Praça Capistrano de Abreu, em Maranguape/CE. A abertura ao público acontece a partir das 18h.',
  },
  {
    question: 'Como posso votar no Melhor Espetinho de Maranguape?',
    answer:
      'A votação será realizada pelo QR Code disponível em cada estande. É necessário comprar um espetinho do participante escolhido, respeitando as regras oficiais.',
  },
  {
    question: 'A inscrição na FANE é gratuita?',
    answer:
      'Sim! A inscrição para participar da FANE como expositor não terá taxa. O preenchimento do formulário não substitui a confirmação da participação pela organização, conforme as orientações divulgadas.',
  },
  {
    question: 'Quantos expositores participarão da FANE?',
    answer: 'A feira contará com 60 expositores.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = useCallback((index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="faq section" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header">
          <span className="section__subtitle">Dúvidas Frequentes</span>
          <h3 id="faq-title">Perguntas e Respostas</h3>
        </div>

        <div className="faq__list" role="list">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
              role="listitem"
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span className="faq__icon" aria-hidden="true">+</span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="faq__answer"
                role="region"
                aria-hidden={openIndex !== index}
              >
                <div className="faq__answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
