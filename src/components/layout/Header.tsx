'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { contact } from '@/lib/contact'
import { trackWhatsAppClick } from '@/lib/gtm'
import { buildTrackingPayload } from '@/lib/utm'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'Áreas de Atuação',
    href: '#',
    children: [
      { label: 'Direito Previdenciário', href: '/previdenciario' },
      { label: 'Direito do Consumidor', href: '/consumidor' },
      { label: 'Direito Imobiliário', href: '/imobiliario' },
      { label: 'Direito de Família', href: '/familia' },
    ],
  },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Conteúdos', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fechar menu ao mudar de rota
  useEffect(() => { setMobileOpen(false) }, [pathname])

  function handleWhatsApp() {
    trackWhatsAppClick({
      page: pathname,
      ctaLabel: 'header',
      tracking: buildTrackingPayload(),
    })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border transition-shadow duration-200',
        scrolled && 'shadow-header'
      )}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-18">

        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display text-primary font-semibold text-lg tracking-tight group-hover:text-primary-deep transition-colors">
            Samuel Martins
          </span>
          <span className="font-body text-gold text-[10px] uppercase tracking-[0.18em] font-medium">
            Advocacia
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-sm text-text-main hover:text-primary transition-colors font-body flex items-center gap-1">
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" className="mt-0.5">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white border border-border rounded-md shadow-card-hover py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2.5 text-sm text-text-main hover:bg-surface hover:text-primary transition-colors',
                            pathname === child.href && 'text-primary font-medium bg-surface'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm text-text-main hover:text-primary transition-colors font-body',
                  pathname === link.href && 'text-primary font-medium'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + badge desktop */}
        <div className="hidden md:flex items-center gap-4">
          <span className="oab-badge">OAB/RJ 234.345</span>
          <a
            href={contact.whatsapp.href(contact.whatsapp.defaultMessage)}
            onClick={handleWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            aria-label="Falar pelo WhatsApp"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container-site py-4 flex flex-col gap-1" aria-label="Navegação mobile">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="text-xs uppercase tracking-widest text-muted font-medium px-2 pt-3 pb-1">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-text-main hover:text-primary hover:bg-surface rounded transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2.5 text-sm text-text-main hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-border mt-2">
              <a
                href={contact.whatsapp.href(contact.whatsapp.defaultMessage)}
                onClick={handleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <WhatsAppIcon />
                Falar pelo WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
