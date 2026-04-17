import type { Metadata } from 'next'
import Link from 'next/link'
import { legalNotice } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Conteúdos Jurídicos | Samuel Martins Advocacia',
  description: 'Orientação jurídica informativa sobre Direito Previdenciário, Consumidor, Imobiliário e Família para a Baixada Fluminense.',
  alternates: { canonical: '/blog' },
}

const posts = [
  {
    slug: 'inss-negou-meu-beneficio',
    area: 'Previdenciário',
    title: 'O INSS negou meu benefício — o que fazer?',
    summary: 'O INSS pode negar benefícios por razões formais ou de mérito. Saiba quais são os caminhos disponíveis para quem teve o pedido indeferido.',
    date: '15/01/2025',
  },
  {
    slug: 'negativacao-indevida-serasa',
    area: 'Consumidor',
    title: 'Negativação indevida no Serasa — entenda seus direitos',
    summary: 'Ter o nome negativado sem motivo justo é uma violação dos seus direitos. Entenda como identificar uma negativação indevida e o que a lei prevê nesses casos.',
    date: '22/01/2025',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-surface pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-site">
          <nav aria-label="Localização" className="text-xs text-muted mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary font-medium">Conteúdos</span>
          </nav>
          <h1 className="text-hero text-primary text-balance">
            Orientação Jurídica — Conteúdos para a Baixada Fluminense
          </h1>
          <p className="text-muted text-lg mt-4 max-w-2xl leading-relaxed">
            Informações sobre temas jurídicos frequentes para quem vive e trabalha em Duque de Caxias e região.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      {/* Aviso informativo */}
      <div className="bg-white border-b border-border">
        <div className="container-site py-3">
          <p className="text-xs text-muted">
            ⚠ Os conteúdos deste blog têm fins exclusivamente informativos e não constituem aconselhamento jurídico individualizado.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group hover:-translate-y-1 block"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="area-tag">{post.area}</span>
                    <span className="text-xs text-muted">{post.date}</span>
                  </div>
                  <h2 className="font-display text-primary font-semibold text-lg leading-snug group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {post.summary}
                  </p>
                  <p className="text-xs text-gold font-medium uppercase tracking-wide pt-1">
                    Ler artigo →
                  </p>
                </div>
              </Link>
            ))}
          </div>
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
