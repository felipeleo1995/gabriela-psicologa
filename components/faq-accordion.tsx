"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Como agendar uma sessão?",
    answer:
      "Entre em contato para verificar disponibilidade de horários. Os atendimentos acontecem de terça à quinta, durante manhã e tarde.",
  },
  {
    question: "Como saber mais sobre parcerias, palestras e rodas de conversa?",
    answer:
      "Para informações sobre parcerias, palestras e rodas de conversa, entre em contato através do WhatsApp ou Instagram. Estarei feliz em compartilhar mais detalhes sobre essas oportunidades de colaboração e eventos.",
  },
  {
    question: "Onde me encontrar?",
    answer:
      "Você pode me encontrar nas redes sociais @yasminmartins.psi no Instagram, ou entrar em contato diretamente pelo WhatsApp. Os atendimentos são realizados de forma online, proporcionando maior flexibilidade e comodidade.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0) // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left py-4 flex items-center justify-between hover:text-gray-600 transition-colors"
          >
            <span className="text-lg font-light text-gray-800 pr-4">{item.question}</span>
            {openIndex === index ? (
              <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0" />
            )}
          </button>

          {openIndex === index && (
            <div className="pb-4 pr-8">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
