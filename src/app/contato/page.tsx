import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/home/ContactForm'
import { contact, legalNotice } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contato | Samuel Martins Advocacia | (21) 98130-2928',
  description: 'Fale com Samuel Martins Advocacia por WhatsApp ou formulário. Atendimento em Duque de Caxias e Baixada Fluminense. OAB/RJ 234.345.',
  alternates: { canonical: '/contato' },
}

export default function ContatoPage() {
  return (
    <>
      <section className="bg-surface pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-site">
          <nav aria-label="Localização" className="text-xs text-muted mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary font-medium">Contato</span>
          </nav>
          <h1 className="text-hero text-primary">Entre em Contato</h1>
          <p className="text-muted text-lg mt-4 max-w-xl leading-relaxed">
            Atendemos em Duque de Caxias e região. Seu contato é sigiloso.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-h2 mb-4">Samuel Martins Advocacia</h2>
                <div className="gold-divider" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5" aria-hidden>📲</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted font-medium mb-1">WhatsApp</p>
                    <a
                      href={contact.whatsapp.href('Olá, encontrei o site e gostaria de orientação jurídica.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:text-gold transition-colors"
                    >
                      {contact.whatsapp.display}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5" aria-hidden>✉</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted font-medium mb-1">E-mail</p>
                    <a href={contact.email.href} className="text-primary font-medium hover:text-gold transition-colors break-all">
                      {contact.email.address}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5" aria-hidden>🕐</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted font-medium mb-1">Horário</p>
                    <p className="text-text-main">{contact.hours.display}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5" aria-hidden>📍</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted font-medium mb-1">Localização</p>
                    <p className="text-text-main">{contact.location.display}</p>
                    <p className="text-muted text-xs mt-1">
                      Atendemos: {contact.location.citiesServed.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card bg-surface border border-border shadow-none">
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-primary">Sigilo garantido.</strong>{' '}
                  As informações enviadas são tratadas com total confidencialidade
                  e utilizadas exclusivamente para retorno do contato.
                </p>
              </div>
            </div>

            {/* Formulário */}
            <div className="card">
              <h2 className="font-display text-primary font-semibold text-xl mb-6">
                Enviar mensagem
              </h2>
              <ContactForm />
            </div>
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
