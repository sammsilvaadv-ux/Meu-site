'use client'

import Image from 'next/image'
import { WhatsAppCTA } from '@/components/shared/CTAButton'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-bg pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">

      {/* Elemento decorativo fundo */}
      <div
        aria-hidden
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #1A2E4A 0px, #1A2E4A 1px,
            transparent 1px, transparent 12px
          )`,
        }}
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Coluna de texto */}
          <div className="space-y-6 animate-fade-in">

            {/* Badge OAB */}
            <div className="oab-badge w-fit">
              Samuel Martins Advocacia · OAB/RJ 234.345
            </div>

            {/* H1 */}
            <h1 className="text-hero text-primary text-balance leading-tight">
              Assessoria jurídica especializada em{' '}
              <span className="text-gold">Direito Imobiliário, Previdenciário</span>{' '}
              e de Família
            </h1>

            {/* Subtítulo */}
            <p className="text-lg text-muted leading-relaxed max-w-xl">
              Orientação jurídica séria, clara e ética para quem busca defender
              seus direitos — seja no Estado do Rio de Janeiro ou em qualquer
              parte do Brasil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <WhatsAppCTA
                label="Falar pelo WhatsApp"
                message="Olá, gostaria de orientação jurídica. Pode me ajudar?"
                area="geral"
              />
              <Link
                href="#areas"
                className="btn-outline"
                aria-label="Ver áreas de atuação"
              >
                Conheça nossas áreas
              </Link>
            </div>
          </div>

          {/* Coluna decorativa com logo */}
          <div
            className="hidden lg:flex items-center justify-center"
            aria-hidden
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full border border-border/60 flex items-center justify-center bg-white shadow-card">
                <Image
                  src="/logo-color.png"
                  alt="Samuel Martins Assessoria Jurídica"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain"
                  priority
                />
              </div>
              <div className="absolute inset-0 -m-4 rounded-full border border-gold/20" />
              <div className="absolute inset-0 -m-10 rounded-full border border-border/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
