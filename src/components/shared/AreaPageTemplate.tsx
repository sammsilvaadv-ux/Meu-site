import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { WhatsAppCTA } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/home/ContactForm'
import { legalNotice } from '@/lib/contact'

interface Breadcrumb { label: string; href: string }
interface Situation { text: string; href?: string | null }

interface AreaPageProps {
  breadcrumbs: Breadcrumb[]
  h1: string
  subtitle: string
  intro: string
  situationsTitle?: string
  situations: Situation[]
  midCtaMessage: string
  midCtaLabel?: string
  area: string
  educationalTitle: string
  educationalText: string
  formTitle?: string
  formSubtitle?: string
  relatedArticles?: { slug: string; area: string; title: string; summary: string }[]
}

export function AreaPageTemplate({
  breadcrumbs,
  h1,
  subtitle,
  intro,
  situationsTitle = 'Situações atendidas',
  situations,
  midCtaMessage,
  midCtaLabel = 'Consulte sua situação pelo WhatsApp',
  area,
  educationalTitle,
  educationalText,
  formTitle,
  formSubtitle,
  relatedArticles,
}: AreaPageProps) {
  return (
    <>
      {/* Hero interno */}
      <section className="bg-surface pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-site">
          {/* Breadcrumb */}
          <nav aria-label="Localização" className="flex items-center gap-1.5 text-xs text-muted mb-6 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} aria-hidden />}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-hero text-primary text-balance">{h1}</h1>
          <p className="text-muted text-lg mt-4 max-w-2xl leading-relaxed">{subtitle}</p>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      {/* Intro */}
      <section className="section-sm bg-white">
        <div className="container-site max-w-3xl">
          {intro.split('\n\n').map((p, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>
      </section>

      {/* Situações atendidas */}
      <section className="section-sm bg-surface">
        <div className="container-site">
          <h2 className="text-h2 mb-8">{situationsTitle}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {situations.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold block" aria-hidden />
                </span>
                {s.href ? (
                  <Link href={s.href} className="text-sm text-text-main hover:text-primary transition-colors leading-relaxed">
                    {s.text}
                  </Link>
                ) : (
                  <p className="text-sm text-text-main leading-relaxed">{s.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA intermediário */}
      <section className="py-10 bg-white border-y border-border">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary font-display font-semibold text-lg">
            Precisa de orientação sobre esse tema?
          </p>
          <WhatsAppCTA
            label={midCtaLabel}
            message={midCtaMessage}
            area={area}
          />
        </div>
      </section>

      {/* Bloco educativo */}
      <section className="section bg-surface">
        <div className="container-site max-w-3xl">
          <h2 className="text-h2 mb-6">{educationalTitle}</h2>
          <div className="gold-divider mb-6" />
          {educationalText.split('\n\n').map((p, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>
      </section>

      {/* Artigos relacionados */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="section-sm bg-white">
          <div className="container-site">
            <h2 className="text-h3 text-primary mb-6">Conteúdos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="card group hover:-translate-y-1 block">
                  <span className="area-tag mb-3 inline-block">{a.area}</span>
                  <h3 className="font-display text-primary font-semibold leading-snug group-hover:text-gold transition-colors mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">{a.summary}</p>
                  <p className="text-xs text-gold font-medium uppercase tracking-wide mt-3">Ler artigo →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Formulário */}
      <section className="section bg-surface">
        <div className="container-site">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-h2">{formTitle ?? 'Tem uma dúvida sobre esse tema?'}</h2>
              <p className="text-muted text-sm mt-2">
                {formSubtitle ?? 'Descreva brevemente a situação. Retornaremos em até 1 dia útil.'}
              </p>
            </div>
            <div className="card">
              <ContactForm defaultArea={area} />
            </div>
          </div>
        </div>
      </section>

      {/* Aviso legal */}
      <div className="bg-white border-t border-border">
        <div className="container-site py-4">
          <p className="legal-notice">{legalNotice}</p>
        </div>
      </div>
    </>
  )
}
