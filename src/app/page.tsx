import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { AreasGrid } from '@/components/home/AreasGrid'
import { Differentials } from '@/components/home/Differentials'
import { ProblemSection } from '@/components/home/ProblemSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { ContactForm } from '@/components/home/ContactForm'
import { contact, legalNotice } from '@/lib/contact'
import { WhatsAppCTA } from '@/components/shared/CTAButton'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Advogado Duque de Caxias | Previdenciário e Consumidor | Samuel Martins Advocacia',
  description:
    'Escritório de advocacia especializado em Direito Previdenciário e do Consumidor em Duque de Caxias. Orientação jurídica ética e clara para a Baixada Fluminense.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* S1 — Hero */}
      <Hero />

      {/* S2 — Áreas */}
      <AreasGrid />

      {/* S3 — Diferenciais */}
      <Differentials />

      {/* S4 — Captação por Problema */}
      <ProblemSection />

      {/* S5 — Sobre resumido */}
      <AboutPreview />

      {/* S6 — Blog Preview */}
      <BlogPreviewSection />

      {/* S7 — Formulário + contato */}
      <FormSection />
    </>
  )
}

// ─── Blog Preview ─────────────────────────────────────────────────────────────

function BlogPreviewSection() {
  const posts = [
    {
      slug: 'inss-negou-meu-beneficio',
      area: 'Previdenciário',
      title: 'O INSS negou meu benefício — o que fazer?',
      summary:
        'O INSS pode negar benefícios por razões formais ou de mérito. Saiba quais são os caminhos disponíveis para quem teve o pedido indeferido.',
    },
    {
      slug: 'negativacao-indevida-serasa',
      area: 'Consumidor',
      title: 'Negativação indevida no Serasa — entenda seus direitos',
      summary:
        'Ter o nome negativado sem motivo justo é uma violação dos seus direitos. Entenda como identificar e o que a lei prevê nesses casos.',
    },
  ]

  return (
    <section className="section bg-surface">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-h2">Orientação jurídica — entenda seus direitos</h2>
            <p className="text-muted text-sm mt-2">
              Conteúdo informativo sobre temas jurídicos relevantes para a Baixada Fluminense.
            </p>
            <div className="gold-divider mt-4" />
          </div>
          <Link
            href="/blog"
            className="text-sm text-primary font-medium hover:text-gold transition-colors shrink-0"
          >
            Ver todos os conteúdos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group hover:-translate-y-1 block"
            >
              <div className="space-y-3">
                <span className="area-tag">{post.area}</span>
                <h3 className="font-display text-primary font-semibold text-lg leading-snug group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
                <p className="text-xs text-gold font-medium uppercase tracking-wide">
                  Ler artigo →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Formulário ──────────────────────────────────────────────────────────────

function FormSection() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Texto */}
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
                Contato
              </p>
              <h2 className="text-h2 text-balance">
                Tem uma dúvida jurídica? Descreva sua situação.
              </h2>
              <p className="text-muted mt-3">
                Seu contato é sigiloso. Retornaremos em até 1 dia útil.
              </p>
              <div className="gold-divider mt-4" />
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Se preferir, envie uma mensagem com um breve resumo do seu caso.
              Quanto mais claro for o contexto inicial, mais objetiva poderá
              ser a análise do próximo passo.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${contact.whatsapp.number}`}
                className="flex items-center gap-2 text-sm text-text-main hover:text-primary transition-colors"
              >
                <span aria-hidden>📱</span>
                {contact.whatsapp.display}
              </a>
              <a
                href={contact.email.href}
                className="flex items-center gap-2 text-sm text-text-main hover:text-primary transition-colors"
              >
                <span aria-hidden>✉</span>
                {contact.email.address}
              </a>
              <p className="flex items-center gap-2 text-sm text-muted">
                <span aria-hidden>🕐</span>
                {contact.hours.display}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted">
                <span aria-hidden>📍</span>
                {contact.location.display}
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
