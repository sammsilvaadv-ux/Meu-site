export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  fbclid?: string
}

export interface TrackingData extends UTMParams {
  [key: string]: string | undefined
  landing_page?: string
  current_page?: string
  referrer?: string
  timestamp?: string
}

export interface GTMEvent {
  event: 'page_view' | 'whatsapp_click' | 'form_submit' | 'phone_click' | 'email_click'
  page?: string
  area?: string
  cta_label?: string
  [key: string]: unknown
}

export interface FormVisibleFields {
  name: string
  phone: string
  area: string
  message: string
}

export interface FormPayload extends FormVisibleFields {
  tracking: TrackingData
}

export type CookieConsent = 'all' | 'essential' | null
