import type { Metadata } from 'next'
import Link from 'next/link'
import { WhatsAppCTA } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/home/ContactForm'
import { contact, legalNotice } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Advogado em Duque de Caxias | Samuel Martins Advocacia | OAB/RJ 234.345',
  description:
    'Escritório de advocacia em Duque de Caxias especializado em Direito Previdenciário e do Consumidor. Orientação jurídica ética e clara para quem vive e trabalha em Caxias.',
  alternates: { canonical: '/duque-de-caxias' },
}

const localAreas = [
  {
    title: 'Direito Previdenciário',
    body: 'Muitos moradores de Duque de Caxias têm histórico de contribuição ao INSS como trabalhadores formais, informais ou domésticos — e enfrentam dificuldades para acessar aposentadorias, benefícios por incapacidade, BPC/LOAS ou pensão por morte. A orientação jurídica ajuda a organizar os documentos, entender os requisitos e avaliar o melhor caminho.',
    href: '/previdenciario',
  },
  {
    title: 'Direito do Consumidor',
    body: 'Problemas com concessionárias de energia, telefonia, bancos e planos de saúde são frequentes em toda a Baixada Fluminense. Negativações indevidas e cobranças abusivas afetam o crédito e a vida prática de muitas famílias. A orientação jurídica identifica quais direitos estão envolvidos e qual a medida mais adequada para cada caso.',
    href: '/consumidor',
  },
  {
    title: 'Direito Imobiliário',
    body: 'Duque de Caxias tem uma realidade fundiária complexa, com muitos imóveis sem escritura, em processo de regularização ou com documentação incompleta. O escritório oferece orientação em contratos, regularização e conflitos imobiliários com atenção a essa realidade específica.',
    href: '/imobiliario',
  },
  {
    title: 'Direito de Família',
    body: 'Questões de divórcio, guarda, pensão e inventário são atendidas com discrição e atenção ao contexto familiar de cada cliente. O escritório oferece orientação clara sobre o que a lei prevê e quais caminhos são possíveis em cada situação.',
    href: '/familia',
  },
]

const schemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Samuel Martins Advocacia',
  description: 'Escritório de advocacia especializado em Direito Previdenciário e do Consumidor em Duque de Caxias.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Duque de Caxias',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  telephone: '+5521981302928',
  email: 'sam.msilva.adv@gmail.com',
  openingHours: 'Mo-Fr 09:00-18:00',
  url: 'https://samuel-martins-advocacia.com.br/duque-de-caxias',
  areaServed: contact.location.citiesServed,
})

export default function DuqueDeCaxiasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      {/* Hero */}
      <section className="bg-surface pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-site">
          <nav aria-label="Localização" className="text-xs text-muted mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary font-medium">Duque de Caxias</span>
          </nav>
          <h1 className="text-hero text-primary text-balance">
            Advogado em Duque de Caxias — Samuel Martins Advocacia
          </h1>
          <p className="text-muted text-lg mt-4 max-w-2xl leading-relaxed">
            Orientação jurídica especializada em Direito Previdenciário e do Consumidor para quem vive e trabalha em Duque de Caxias e na Baixada Fluminense.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      {/* Intro */}
      <section className="section-sm bg-white">
        <div className="container-site max-w-3xl space-y-4">
          <p className="text-muted leading-relaxed">
            Samuel Martins Advocacia tem presença voltada à realidade de Duque de Caxias e da Baixada Fluminense. O escritório atua com foco em Direito Previdenciário e Direito do Consumidor — as duas áreas que concentram a maior parte das demandas jurídicas de pessoas que vivem e trabalham nessa região.
          </p>
          <p className="text-muted leading-relaxed">
            Duque de Caxias é o maior município da Baixada Fluminense e um dos mais populosos do Estado do Rio de Janeiro. Sua realidade socioeconômica gera demandas jurídicas específicas: trabalhadores que contribuíram durante anos para o INSS e encontram dificuldade para acessar benefícios, consumidores que enfrentam cobranças indevidas, negativações injustas e problemas com empresas de serviços essenciais.
          </p>
        </div>
      </section>

      {/* Áreas com contexto local */}
      <section className="section bg-surface">
        <div className="container-site">
          <h2 className="text-h2 mb-10">Áreas de atuação em Duque de Caxias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localAreas.map((area) => (
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

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-h2 text-white">Precisa de orientação jurídica em Duque de Caxias?</h2>
            <p className="text-white/60 text-sm mt-1">Retornaremos em até 1 dia útil.</p>
          </div>
          <WhatsAppCTA
            label="Falar pelo WhatsApp"
            message="Olá, sou de Duque de Caxias e gostaria de orientação jurídica."
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
