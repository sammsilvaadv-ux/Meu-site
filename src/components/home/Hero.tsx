'use client'

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
              <span className="text-gold">Direito Previdenciário</span>{' '}
              e do Consumidor
            </h1>

            {/* Subtítulo */}
            <p className="text-lg text-muted leading-relaxed max-w-xl">
              Atendemos pessoas em Duque de Caxias e região que buscam
              orientação jurídica séria, clara e ética para defender seus
              direitos em questões previdenciárias, consumeristas,
              imobiliárias e familiares.
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

          {/* Coluna decorativa */}
          <div
            className="hidden lg:flex items-center justify-center"
            aria-hidden
          >
            <div className="relative">
              {/* Monograma decorativo */}
              <div className="w-72 h-72 rounded-full border border-border/60 flex items-center justify-center bg-white shadow-card">
                <div className="text-center space-y-2">
                  <p
                    className="font-display text-primary leading-none select-none"
                    style={{ fontSize: '5rem', fontWeight: 700 }}
                  >
                    SM
                  </p>
                  <div className="w-12 h-px bg-gold mx-auto" />
                  <p className="font-body text-muted text-[10px] uppercase tracking-[0.2em]">
                    Advocacia
                  </p>
                  <p className="font-body text-muted/70 text-[9px] uppercase tracking-widest">
                    OAB/RJ 234.345
                  </p>
                </div>
              </div>
              {/* Anel externo */}
              <div className="absolute inset-0 -m-4 rounded-full border border-gold/20" />
              {/* Anel mais externo */}
              <div className="absolute inset-0 -m-10 rounded-full border border-border/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
