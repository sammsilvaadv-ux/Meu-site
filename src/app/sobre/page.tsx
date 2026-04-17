import type { Metadata } from 'next'
import Link from 'next/link'
import { WhatsAppCTA } from '@/components/shared/CTAButton'
import { legalNotice } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Sobre o Escritório | Samuel Martins Advocacia | OAB/RJ 234.345',
  description: 'Conheça Samuel Martins Advocacia — escritório especializado em Direito Previdenciário e do Consumidor com presença em Duque de Caxias e Baixada Fluminense.',
  alternates: { canonical: '/sobre' },
}

const areas = [
  { title: 'Direito Previdenciário', href: '/previdenciario' },
  { title: 'Direito do Consumidor', href: '/consumidor' },
  { title: 'Direito Imobiliário', href: '/imobiliario' },
  { title: 'Direito de Família', href: '/familia' },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-site">
          <nav aria-label="Localização" className="text-xs text-muted mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary font-medium">Sobre o Escritório</span>
          </nav>
          <h1 className="text-hero text-primary text-balance">
            Sobre o Escritório — Samuel Martins Advocacia
          </h1>
          <p className="text-muted text-lg mt-4 max-w-2xl leading-relaxed">
            Advocacia com foco definido, presença local e comprometimento com a situação concreta de cada cliente.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      {/* Apresentação */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Decorativo */}
            <div className="flex justify-center" aria-hidden>
              <div className="relative">
                <div className="w-64 h-64 rounded-full border border-border flex items-center justify-center bg-surface shadow-card">
                  <div className="text-center space-y-2">
                    <p className="font-display text-primary leading-none select-none" style={{ fontSize: '4.5rem', fontWeight: 700 }}>
                      SM
                    </p>
                    <div className="w-10 h-px bg-gold mx-auto" />
                    <p className="font-body text-muted text-[9px] uppercase tracking-[0.2em]">Advocacia</p>
                    <p className="font-body text-muted/60 text-[8px] uppercase tracking-widest">OAB/RJ 234.345</p>
                  </div>
                </div>
                <div className="absolute inset-0 -m-4 rounded-full border border-gold/20" />
              </div>
            </div>

            {/* Texto */}
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">O escritório</p>
                <h2 className="text-h2">Orientação jurídica séria e comprometida</h2>
                <div className="gold-divider mt-4" />
              </div>
              <p className="text-muted leading-relaxed">
                Samuel Martins Advocacia atua com foco principal em Direito Previdenciário e Direito do Consumidor, mantendo também atuação em áreas correlatas e estratégicas, como Direito Imobiliário e Direito de Família.
              </p>
              <p className="text-muted leading-relaxed">
                O escritório foi pensado para atender pessoas que procuram orientação jurídica séria, clara e comprometida, sem excessos de formalismo e sem promessas incompatíveis com a ética profissional. A proposta é oferecer atendimento responsável, com análise técnica da situação concreta e comunicação acessível desde o primeiro contato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="section bg-surface">
        <div className="container-site max-w-3xl">
          <h2 className="text-h2 mb-4">Como atendemos</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted leading-relaxed mb-4">
            A relação entre advogado e cliente precisa ser construída com confiança, transparência e compreensão real do problema apresentado. Por isso, o escritório adota uma postura de escuta atenta, explicação objetiva e definição cuidadosa do caminho jurídico possível em cada caso.
          </p>
          <p className="text-muted leading-relaxed">
            O objetivo não é apenas falar em termos técnicos, mas ajudar o cliente a entender a própria situação com clareza. Em temas sensíveis — como benefícios previdenciários, conflitos de consumo, questões patrimoniais e problemas familiares — essa postura faz diferença no modo como o atendimento é prestado.
          </p>
        </div>
      </section>

      {/* OAB e presença local */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-h2">Registro e presença local</h2>
              <div className="gold-divider" />
              <p className="text-muted leading-relaxed">
                Samuel Martins é inscrito na OAB/RJ sob o nº 234.345. O escritório tem presença voltada à realidade de Duque de Caxias e da Baixada Fluminense, com atendimento direcionado a quem busca orientação jurídica próxima, organizada e compatível com os desafios concretos da região.
              </p>
              <p className="text-muted leading-relaxed">
                Essa presença local não é apenas geográfica: ela também se reflete na linguagem, na forma de atendimento e na compreensão das demandas mais recorrentes de quem vive e trabalha na Baixada.
              </p>
              <div className="oab-badge w-fit mt-2">OAB/RJ 234.345 · Duque de Caxias — RJ</div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-primary font-semibold text-xl">Áreas de atuação</h3>
              <ul className="space-y-2">
                {areas.map((a) => (
                  <li key={a.href}>
                    <Link href={a.href} className="flex items-center gap-2 text-sm text-text-main hover:text-primary transition-colors group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-125 transition-transform" aria-hidden />
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container-site text-center space-y-5">
          <h2 className="text-h2 text-white">Precisa de orientação jurídica?</h2>
          <p className="text-white/60 text-base">
            Entre em contato pelo WhatsApp ou pelo formulário. Retornaremos em até 1 dia útil.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppCTA
              label="Falar pelo WhatsApp"
              message="Olá, gostaria de orientação jurídica. Pode me ajudar?"
              variant="white"
            />
            <Link href="/contato" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Formulário de contato
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white border-t border-border">
        <div className="container-site py-4">
          <p className="legal-notice">{legalNotice}</p>
        </div>
      </div>
    </>
  )
}
