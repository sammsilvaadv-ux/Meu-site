import type { Metadata } from 'next'
import Link from 'next/link'
import { WhatsAppCTA } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/home/ContactForm'
import { legalNotice } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Advogado na Baixada Fluminense | Samuel Martins Advocacia | OAB/RJ 234.345',
  description:
    'Escritório de advocacia especializado em Direito Previdenciário e do Consumidor com atendimento para toda a Baixada Fluminense. Orientação jurídica ética e clara.',
  alternates: { canonical: '/baixada-fluminense' },
}

const cities = [
  { name: 'Duque de Caxias', note: 'Município sede', href: '/duque-de-caxias' },
  { name: 'Nova Iguaçu', note: null, href: null },
  { name: 'São João de Meriti', note: null, href: null },
  { name: 'Belford Roxo', note: null, href: null },
  { name: 'Nilópolis', note: null, href: null },
  { name: 'Mesquita', note: null, href: null },
  { name: 'Queimados', note: null, href: null },
  { name: 'Seropédica', note: null, href: null },
  { name: 'Japeri', note: null, href: null },
  { name: 'Paracambi', note: null, href: null },
  { name: 'Itaguaí', note: null, href: null },
]

const areas = [
  { title: 'Direito Previdenciário', body: 'Aposentadorias, benefícios por incapacidade, BPC/LOAS, pensão por morte e revisão de benefícios. Atendimento para segurados do INSS de toda a Baixada Fluminense.', href: '/previdenciario' },
  { title: 'Direito do Consumidor', body: 'Negativação indevida, cobranças abusivas, plano de saúde e conflitos com concessionárias e bancos. Orientação para consumidores de toda a região.', href: '/consumidor' },
  { title: 'Direito Imobiliário', body: 'Contratos, regularização de imóveis e conflitos patrimoniais. Atenção às particularidades fundiárias da Baixada Fluminense.', href: '/imobiliario' },
  { title: 'Direito de Família', body: 'Divórcio, guarda, pensão e inventário. Atendimento com discrição e cuidado para quem enfrenta questões familiares na região.', href: '/familia' },
]

const steps = [
  { step: '01', title: 'Contato inicial', body: 'Envie uma mensagem pelo WhatsApp ou pelo formulário com um resumo da sua situação. O contato é sigiloso.' },
  { step: '02', title: 'Análise do caso', body: 'O escritório analisa as informações apresentadas e identifica quais são as questões jurídicas envolvidas.' },
  { step: '03', title: 'Orientação clara', body: 'Você recebe uma explicação objetiva sobre sua situação, as opções possíveis e o próximo passo mais adequado.' },
]

export default function BaixadaFluminensePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-site">
          <nav aria-label="Localização" className="text-xs text-muted mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary font-medium">Baixada Fluminense</span>
          </nav>
          <h1 className="text-hero text-primary text-balance">
            Advocacia na Baixada Fluminense — Samuel Martins Advocacia
          </h1>
          <p className="text-muted text-lg mt-4 max-w-2xl leading-relaxed">
            Orientação jurídica especializada em Direito Previdenciário e do Consumidor para quem vive e trabalha nos municípios da Baixada Fluminense.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      {/* Intro */}
      <section className="section-sm bg-white">
        <div className="container-site max-w-3xl space-y-4">
          <p className="text-muted leading-relaxed">
            A Baixada Fluminense concentra uma população de mais de três milhões de pessoas espalhadas por municípios com características socioeconômicas próprias. Essa realidade gera um conjunto específico de demandas jurídicas — e muitas pessoas da região têm dificuldade de acesso a orientação jurídica qualificada que entenda o contexto em que vivem.
          </p>
          <p className="text-muted leading-relaxed">
            Samuel Martins Advocacia está estruturado para atender justamente esse público: trabalhadores, aposentados, pensionistas e consumidores da Baixada Fluminense que precisam de orientação jurídica séria, clara e acessível nas áreas em que as demandas são mais frequentes.
          </p>
        </div>
      </section>

      {/* Municípios */}
      <section className="section-sm bg-surface">
        <div className="container-site">
          <h2 className="text-h2 mb-6">Municípios atendidos</h2>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <div key={city.name}>
                {city.href ? (
                  <Link href={city.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-border text-sm text-primary hover:border-gold hover:text-gold transition-colors">
                    {city.name}
                    {city.note && <span className="text-xs text-muted">({city.note})</span>}
                  </Link>
                ) : (
                  <span className="inline-flex px-3 py-1.5 rounded bg-white border border-border text-sm text-text-main">
                    {city.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="section bg-white">
        <div className="container-site">
          <h2 className="text-h2 mb-10">Áreas de atuação na Baixada Fluminense</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area) => (
              <div key={area.href} className="card space-y-3">
                <h3 className="font-display text-primary font-semibold text-lg">{area.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{area.body}</p>
                <Link href={area.href} className="text-xs text-gold font-medium uppercase tracking-wide hover:text-gold-light transition-colors">
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section bg-surface">
        <div className="container-site">
          <h2 className="text-h2 mb-10">Como funciona o atendimento para a Baixada Fluminense</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="space-y-3">
                <p className="font-display text-gold font-bold text-3xl">{step.step}</p>
                <h3 className="font-display text-primary font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-h2 text-white">Precisa de orientação na Baixada Fluminense?</h2>
            <p className="text-white/60 text-sm mt-1">Retornaremos em até 1 dia útil.</p>
          </div>
          <WhatsAppCTA
            label="Falar pelo WhatsApp"
            message="Olá, sou da Baixada Fluminense e gostaria de orientação jurídica."
            variant="white"
            className="shrink-0"
          />
        </div>
      </section>

      {/* Formulário */}
      <section className="section bg-white">
        <div className="container-site max-w-lg mx-auto">
          <h2 className="text-h2 text-center mb-3">Enviar mensagem</h2>
          <p className="text-muted text-sm text-center mb-8">Seu contato é sigiloso. Retornaremos em até 1 dia útil.</p>
          <div className="card"><ContactForm /></div>
        </div>
      </section>

      <div className="bg-surface border-t border-border">
        <div className="container-site py-4">
          <p className="legal-notice">{legalNotice}</p>
        </div>
      </div>
    </>
  )
}
