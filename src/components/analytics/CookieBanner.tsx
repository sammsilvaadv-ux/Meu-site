'use client'

import { useState, useEffect } from 'react'
import { updateConsent } from '@/lib/gtm'
import type { CookieConsent } from '@/types/tracking'
import Link from 'next/link'

const CONSENT_KEY = 'sm_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY) as CookieConsent
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    try { localStorage.setItem(CONSENT_KEY, 'all') } catch { /* silent */ }
    updateConsent(true)
    setVisible(false)
  }

  function handleEssential() {
    try { localStorage.setItem(CONSENT_KEY, 'essential') } catch { /* silent */ }
    updateConsent(false)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg px-6 py-4 md:py-5"
    >
      <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-muted flex-1 leading-relaxed">
          Usamos cookies para analisar o tráfego e melhorar a experiência do site.{' '}
          <Link href="/politica-de-privacidade" className="underline hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleEssential}
            className="btn-outline text-xs px-4 py-2"
          >
            Apenas essenciais
          </button>
          <button
            onClick={handleAccept}
            className="btn-primary text-xs px-4 py-2"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  )
}
