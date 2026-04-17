import type { GTMEvent } from '@/types/tracking'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function getConsentScript(): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('consent','default',{
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'wait_for_update': 500
    });
  `
}

export function getGTMScript(gtmId: string): string {
  return `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `
}

export function pushEvent(event: GTMEvent): void {
  if (typeof window === 'undefined') return
  if (!process.env.NEXT_PUBLIC_GTM_ID) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    ...event,
    timestamp: new Date().toISOString(),
  })
}

export function updateConsent(granted: boolean): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  const status = granted ? 'granted' : 'denied'
  window.dataLayer.push({
    event: 'consent_update',
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
    analytics_storage: status,
  })
}

export function trackWhatsAppClick(p: {
  page: string
  area?: string
  ctaLabel: string
  tracking?: Record<string, unknown>
}): void {
  pushEvent({
    event: 'whatsapp_click',
    page: p.page,
    area: p.area,
    cta_label: p.ctaLabel,
    ...p.tracking,
  })
}

export function trackFormSubmit(p: {
  page: string
  area: string
  tracking?: Record<string, unknown>
}): void {
  pushEvent({
    event: 'form_submit',
    page: p.page,
    area: p.area,
    ...p.tracking,
  })
}

export function trackPhoneClick(page: string, label: string): void {
  pushEvent({ event: 'phone_click', page, cta_label: label })
}

export function trackEmailClick(page: string, label: string): void {
  pushEvent({ event: 'email_click', page, cta_label: label })
}
