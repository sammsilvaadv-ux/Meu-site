'use client'

import Link from 'next/link'
import { contact, legalNotice } from '@/lib/contact'
import { trackEmailClick, trackPhoneClick } from '@/lib/gtm'

const areaLinks = [
  { label: 'Direito Previdenciário', href: '/previdenciario' },
  { label: 'Direito do Consumidor', href: '/consumidor' },
  { label: 'Direito Imobiliário', href: '/imobiliario' },
  { label: 'Direito de Família', href: '/familia' },
]

const pageLinks = [
  { label: 'Sobre o Escritório', href: '/sobre' },
  { label: 'Conteúdos', href: '/blog' },
  { label: 'Contato', href: '/contato' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white/80">
      {/* Main footer */}
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Col 1 — Marca */}
          <div className="space-y-4">
            <div>
              <p className="font-display text-white text-xl font-semibold tracking-tight">
                Samuel Martins
              </p>
              <p className="font-body text-gold text-[10px] uppercase tracking-[0.18em] font-medium">
                Advocacia
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Advocacia especializada em Direito Previdenciário e do Consumidor, com presença na Baixada Fluminense.
            </p>
            <p className="text-xs text-white/50 uppercase tracking-wider">
              OAB/RJ 234.345
            </p>
          </div>

          {/* Col 2 — Links */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-gold font-medium">
              Áreas de Atuação
            </p>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 pt-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-gold font-medium">
              Contato
            </p>
            <div className="space-y-3">
              <div>
                <a
                  href={contact.whatsapp.href()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  onClick={() => trackPhoneClick('footer', 'whatsapp-footer')}
                >
                  <span aria-hidden>📲</span>
                  {contact.whatsapp.display}
                </a>
              </div>
              <div>
                <a
                  href={contact.email.href}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors break-all"
                  onClick={() => trackEmailClick('footer', 'email-footer')}
                >
                  <span aria-hidden>✉</span>
                  {contact.email.address}
                </a>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm text-white/70">
                  <span aria-hidden>🕐</span>
                  {contact.hours.display}
                </p>
              </div>
              <div>
                <p className="flex items-start gap-2 text-sm text-white/70">
                  <span aria-hidden className="mt-0.5">📍</span>
                  {contact.location.display}
                </p>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-white/40 leading-relaxed">
                Atendemos: {contact.location.citiesServed.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 space-y-3">
          <p className="legal-notice text-white/40">
            {legalNotice}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs text-white/30">
              © {year} Samuel Martins Advocacia | OAB/RJ 234.345
            </p>
            <Link
              href="/politica-de-privacidade"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
