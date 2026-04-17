'use client'

import type { TrackingData } from '@/types/tracking'

const STORAGE_KEY = 'sm_tracking'
const UTM_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign',
  'utm_term', 'utm_content', 'gclid', 'fbclid',
] as const

function isClient(): boolean {
  return typeof window !== 'undefined'
}

function getStored(): TrackingData {
  if (!isClient()) return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function setStored(data: TrackingData): void {
  if (!isClient()) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // modo privado ou localStorage bloqueado — falhar silenciosamente
  }
}

export function captureAndPersistUTMs(): void {
  if (!isClient()) return

  const url = new URL(window.location.href)
  const stored = getStored()
  const urlUTMs: Partial<TrackingData> = {}
  let hasUTMs = false

  for (const key of UTM_KEYS) {
    const val = url.searchParams.get(key)
    if (val) {
      urlUTMs[key] = val
      hasUTMs = true
    }
  }

  setStored({
    ...stored,
    ...(hasUTMs ? urlUTMs : {}),                               // sobrescreve UTMs se presentes na URL
    landing_page: stored.landing_page || window.location.href, // imutável após primeira captura
    referrer:     stored.referrer ?? (document.referrer || ''),// imutável após primeira captura
    timestamp:    stored.timestamp || new Date().toISOString(),// imutável após primeira captura
    current_page: window.location.pathname,                    // sempre atualizado
  })
}

export function updateCurrentPage(pathname: string): void {
  setStored({ ...getStored(), current_page: pathname })
}

export function getTrackingParams(): TrackingData {
  return getStored()
}

export function buildTrackingPayload(): TrackingData {
  return {
    ...getStored(),
    current_page: isClient() ? window.location.pathname : getStored().current_page,
  }
}

export function clearTrackingData(): void {
  if (!isClient()) return
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* silent */ }
}
