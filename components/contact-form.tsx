"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For now, just show success message
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-6">
        <h3 className="text-2xl font-light text-gray-800 mb-6">Entre em Contato</h3>
        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-medium mb-2">WhatsApp</h4>
            <p className="text-sm sm:text-base">(11) 99999-9999</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Email</h4>
            <p className="text-sm sm:text-base">contato@yasminmartins.psi</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Instagram</h4>
            <p className="text-sm sm:text-base">@yasminmartins.psi</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Horários de Atendimento</h4>
            <p className="text-sm sm:text-base">Terça a quinta-feira</p>
            <p className="text-sm sm:text-base">Manhã e tarde</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white/50 p-6 sm:p-8 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Nome completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 border-2 border-gray-300 focus:border-rose-400 transition-colors"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 border-2 border-gray-300 focus:border-rose-400 transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Telefone/WhatsApp
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 border-2 border-gray-300 focus:border-rose-400 transition-colors"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-700 font-medium">
              Mensagem *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 border-2 border-gray-300 focus:border-rose-400 transition-colors resize-none"
              placeholder="Conte um pouco sobre o que você gostaria de conversar..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-rose-pastel py-3 hover:scale-105 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center">
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 border border-red-300 rounded-lg text-red-700 text-center">
              Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
