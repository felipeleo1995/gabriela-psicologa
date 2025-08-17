"use client"

import Image from "next/image"
import { MessageCircle, ChevronUp, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FAQAccordion } from "@/components/faq-accordion"
import { ContactForm } from "@/components/contact-form"
import { ScrollAnimation } from "@/components/scroll-animation"
import { MobileNav } from "@/components/mobile-nav"
import { InstagramFeed } from "@/components/instagram-feed"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "sobre", label: "Sobre Mim" },
    { id: "psicoterapia", label: "Psicoterapia" },
    { id: "ebooks", label: "Ebooks" },
    { id: "redes", label: "Redes Sociais" },
    { id: "faq", label: "FAQ" },
    { id: "contatos", label: "Contatos" },
  ]

  return (
    <div className="min-h-screen textured-bg relative">
      {/* Navigation */}
      <nav
        className={`w-full py-4 px-6 border-b-2 border-black fixed top-0 z-50 transition-all duration-300 ${
          isScrolled ? "textured-bg shadow-lg backdrop-blur-sm" : "textured-bg"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex justify-center items-center space-x-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-gray-900 transition-colors duration-200 hover:scale-105 transform"
                  aria-label={`Navegar para seção ${item.label}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex justify-between items-center">
            <span className="text-lg font-light text-gray-800">Gabriela Faria</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          navItems={navItems}
          onItemClick={scrollToSection}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 min-h-screen pt-32" id="topo">
        <ScrollAnimation>
          <div className="text-center relative">
            {/* Hummingbird Image */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <Image
                src="/borboleta1.png"
                alt="Beija-flor voando"
                width={120}
                height={80}
                className="object-contain"
                priority
                loading="eager"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wider text-gray-900 mb-6 animate-fade-in">
              GABRIELA FARIA FERREIRA
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-light tracking-wide animate-fade-in-delay">
              psicóloga | CRP: 06/154488
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Sobre Mim Section */}
        <section id="sobre" className="py-20 px-6 border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-16 text-center">
              SOBRE MIM
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Photo - Takes 2 columns on large screens */}
            <ScrollAnimation delay={100} className="lg:col-span-2">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Main photo container */}
                  <div className="relative border-4 border-black hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
                    <Image
                      src="foto.avif"
                      alt="Gabriela Faria Ferreira - Psicóloga Clínica especializada em Terapia Cognitivo Comportamental"
                      width={350}
                      height={450}
                      className="object-cover w-full h-full"
                      // loading="lazy"
                      priority
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Text Content - Takes 3 columns on large screens */}
            <ScrollAnimation delay={200} className="lg:col-span-3">
              <div className="space-y-6">
                <div className="space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p className="text-lg font-light text-gray-800 mb-6">
                    Olá! Eu sou Gabriela Faria Ferreira, Psicóloga Clínica (CRP: 06/154488) e Psicóloga Social.
                  </p>

                  <p>
                    Trabalho com a Terapia Cognitivo Comportamental (TCC) em meus atendimentos, uma abordagem científica
                    e eficaz que foca na relação entre pensamentos, sentimentos e comportamentos.
                  </p>

                  <p>
                    Atendo adolescentes e adultos de forma online, oferecendo um espaço seguro e acolhedor para o
                    desenvolvimento do autoconhecimento e bem-estar emocional.
                  </p>

                  <p>
                    A Terapia Cognitivo Comportamental é uma das abordagens mais estudadas e validadas cientificamente
                    na Psicologia. Ela nos ajuda a identificar padrões de pensamento que podem estar causando sofrimento
                    e desenvolver estratégias práticas para lidar com desafios do dia a dia.
                  </p>

                  <p>
                    Acredito que cada pessoa tem potencial para crescer e se desenvolver. Meu papel é acompanhar você
                    nessa jornada, oferecendo ferramentas e técnicas que promovam mudanças positivas e duradouras em sua
                    vida.
                  </p>

                  <p>
                    Como Psicóloga Social, também tenho interesse especial em compreender como os contextos sociais
                    influenciam nosso bem-estar e desenvolvimento pessoal.
                  </p>
                </div>

                <div className="pt-6">
                  <Button
                    variant="outline"
                    className="btn-rose-pastel px-8 py-3 bg-transparent hover:scale-105 transform transition-all duration-200 text-base"
                    onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                    aria-label="Entrar em contato via WhatsApp"
                  >
                    Fale diretamente comigo
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sobre o Meu Trabalho Section */}
      <section id="psicoterapia" className="py-20 px-6 border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-16 text-center">
              SOBRE O MEU TRABALHO
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation>
              <div className="flex justify-center lg:justify-start">
                <div className="border-4 border-black hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="trabalho.jpg"
                    alt="Ambiente terapêutico elegante e acolhedor"
                    width={400}
                    height={500}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-800 mb-4">
                    Psicoterapia Online
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                    <p>
                      Atendo <strong>adolescentes e adultos</strong> de forma online, proporcionando flexibilidade e comodidade para que você possa cuidar da sua saúde mental no conforto do seu lar.
                    </p>
                    <p>
                      Os atendimentos online são tão eficazes quanto os presenciais, oferecendo a mesma qualidade terapêutica com maior acessibilidade.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-800 mb-4">
                    Terapia Cognitivo Comportamental (TCC)
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                    <p>
                      A Terapia Cognitivo Comportamental é uma abordagem psicoterapêutica baseada em evidências científicas que foca na relação entre pensamentos, emoções e comportamentos.
                    </p>
                    <p>
                      <strong>Principais características da TCC:</strong>
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Foco no presente:</strong> Trabalhamos com questões atuais e estratégias práticas.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Orientada para objetivos:</strong> Definimos metas claras e mensuráveis.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Colaborativa:</strong> Terapeuta e paciente trabalham juntos como uma equipe.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Baseada em evidências:</strong> Utiliza técnicas cientificamente validadas.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    variant="outline"
                    className="btn-rose-pastel px-6 sm:px-8 py-3 bg-transparent hover:scale-105 transform transition-all duration-200"
                    onClick={() => window.open("https://wa.me/5511953934091", "_blank")}
                    aria-label="Entrar em contato para saber mais sobre psicoterapia"
                  >
                    Entrar em Contato
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Ebooks Section */}
      <section id="ebooks" className="py-20 px-6 border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-16 text-center">
              EBOOKS
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={200}>
              <div className="bg-white/50 rounded-lg border border-gray-200 p-6 sm:p-8 shadow-lg card-rose-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Ebook Cover */}
                  <div className="flex justify-center">
                    <div className="border-4 border-black hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/placeholder.svg?height=400&width=300&text=Um+caminho+para+educar+suas+emoções"
                        alt="Capa do ebook: Um caminho para educar suas emoções"
                        width={300}
                        height={400}
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Ebook Info */}
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-gray-800">
                      Um caminho para educar suas emoções
                    </h3>
                    
                    <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                      <p>
                        Este ebook é um guia prático e acessível para quem deseja compreender melhor suas emoções e desenvolver ferramentas para lidar com elas de forma mais saudável e consciente.
                      </p>
                      
                      <p>
                        Através de uma abordagem humanizada e baseada na Psicologia, você encontrará reflexões, exercícios práticos e estratégias para:
                      </p>
                      
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Identificar e nomear suas emoções</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Desenvolver inteligência emocional</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Criar estratégias de autorregulação</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Fortalecer o autoconhecimento</span>
                        </li>
                      </ul>
                      
                      <p className="text-sm text-gray-600 italic">
                        Material gratuito desenvolvido com carinho para apoiar sua jornada de autoconhecimento.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="outline"
                        className="btn-rose-pastel px-6 sm:px-8 py-3 bg-transparent hover:scale-105 transform transition-all duration-200 w-full sm:w-auto"
                        onClick={() => {
                          // Aqui você pode adicionar o link real do ebook
                          const link = document.createElement('a');
                          link.href = '/ebook-educar-emocoes.pdf'; // Substitua pelo link real
                          link.download = 'Um-caminho-para-educar-suas-emocoes.pdf';
                          link.click();
                        }}
                        aria-label="Baixar ebook gratuito"
                      >
                        📖 Download Gratuito
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Redes Sociais Section */}
      <section id="redes" className="py-20 px-6 border-t-2 border-black">
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light italic text-gray-800">
                instagram: @gabrielaferreira_psi
              </h2>
            </div>

            <InstagramFeed />

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="btn-rose-pastel px-6 sm:px-8 py-3 bg-transparent hover:scale-105 transform transition-all duration-200"
                onClick={() => window.open("https://instagram.com/gabrielaferreira_psi", "_blank")}
                aria-label="Ver perfil completo no Instagram"
              >
                Ver mais no Instagram
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 border-t-2 border-black slate-textured-bg relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-rose-100 rounded-full opacity-80"></div>

        <ScrollAnimation>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white mb-16 text-center">
              PERGUNTAS FREQUENTES
            </h2>

            <div className="bg-white border-4 border-black rounded-lg p-6 sm:p-8 shadow-lg">
              <FAQAccordion />
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Contatos Section */}
      <section id="contatos" className="py-20 px-6 border-t-2 border-black">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-16 text-center">
              CONTATOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <div className="text-center p-6 bg-white/50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <MessageCircle className="w-12 h-12 mx-auto text-green-500" />
                </div>
                <h3 className="text-xl font-light text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">(11) 95393-4091</p>
                <Button
                  variant="outline"
                  className="btn-rose-pastel hover:scale-105 transform transition-all duration-200"
                  onClick={() => window.open("https://wa.me/5511953934091", "_blank")}
                >
                  Conversar
                </Button>
              </div>

              {/* Instagram */}
              <div className="text-center p-6 bg-white/50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">@gabrielaferreira_psi</p>
                <Button
                  variant="outline"
                  className="btn-rose-pastel hover:scale-105 transform transition-all duration-200"
                  onClick={() => window.open("https://instagram.com/gabrielaferreira_psi", "_blank")}
                >
                  Seguir
                </Button>
              </div>

              {/* Email */}
              <div className="text-center p-6 bg-white/50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">contato@gabrielafaria.psi</p>
                <Button
                  variant="outline"
                  className="btn-rose-pastel hover:scale-105 transform transition-all duration-200"
                  onClick={() => window.open("mailto:contato@gabrielafaria.psi", "_blank")}
                >
                  Enviar Email
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>Horários de Atendimento:</strong><br />
                Segunda a sexta-feira | Manhã, tarde e noite
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Fixed Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <button
          onClick={() => window.open("https://wa.me/5511953934091", "_blank")}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 border-2 border-black hover:scale-110 transform"
          aria-label="Entrar em contato via WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 border-2 border-black hover:scale-110 transform"
          aria-label="Voltar ao topo da página"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </div>
  )
}
