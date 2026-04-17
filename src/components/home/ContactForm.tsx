'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { usePathname } from 'next/navigation'
import { contact } from '@/lib/contact'
import { buildTrackingPayload } from '@/lib/utm'
import { trackFormSubmit, trackWhatsAppClick } from '@/lib/gtm'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const schema = z.object({
  name:     z.string().min(2, 'Informe seu nome completo'),
  phone:    z.string().min(8, 'Informe um telefone válido'),
  area:     z.string().min(1, 'Selecione a área de interesse'),
  message:  z.string().default(''),
  // campos ocultos — não validados mas enviados
  utm_source:    z.string().optional(),
  utm_medium:    z.string().optional(),
  utm_campaign:  z.string().optional(),
  utm_term:      z.string().optional(),
  utm_content:   z.string().optional(),
  gclid:         z.string().optional(),
  fbclid:        z.string().optional(),
  landing_page:  z.string().optional(),
  current_page:  z.string().optional(),
  referrer:      z.string().optional(),
  timestamp:     z.string().optional(),
})

type FormData = z.infer<typeof schema>

const HIDDEN_FIELDS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'fbclid', 'landing_page', 'current_page', 'referrer', 'timestamp',
] as const

interface ContactFormProps {
  defaultArea?: string
  compact?: boolean
}

export function ContactForm({ defaultArea, compact = false }: ContactFormProps) {
  const pathname = usePathname()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { area: defaultArea || '' },
  })

  // Preencher campos ocultos com dados de tracking
  useEffect(() => {
    const payload = buildTrackingPayload()
    for (const key of HIDDEN_FIELDS) {
      const val = payload[key as keyof typeof payload]
      if (val) setValue(key, val)
    }
    setValue('timestamp', new Date().toISOString())
    setValue('current_page', pathname)
  }, [setValue, pathname])

  async function onSubmit(data: FormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Erro no envio')
      trackFormSubmit({ page: pathname, area: data.area, tracking: buildTrackingPayload() })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card text-center py-12 space-y-3">
        <div className="text-4xl" aria-hidden>✅</div>
        <h3 className="font-display text-primary text-xl font-semibold">
          Mensagem enviada
        </h3>
        <p className="text-muted text-sm">
          Recebemos seu contato. Retornaremos em até 1 dia útil.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn('space-y-4', compact && 'space-y-3')}
    >
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1.5">
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome completo"
          {...register('name')}
          className={cn('form-input', errors.name && 'border-red-400 focus:border-red-400 focus:ring-red-400')}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-1.5">
          Telefone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(21) 9 0000-0000"
          {...register('phone')}
          className={cn('form-input', errors.phone && 'border-red-400 focus:border-red-400 focus:ring-red-400')}
        />
        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
      </div>

      {/* Área */}
      <div>
        <label htmlFor="area" className="block text-sm font-medium text-text-main mb-1.5">
          Área de interesse
        </label>
        <select
          id="area"
          {...register('area')}
          className={cn('form-input', errors.area && 'border-red-400 focus:border-red-400 focus:ring-red-400')}
        >
          <option value="">Selecione a área</option>
          <option value="previdenciario">Direito Previdenciário</option>
          <option value="consumidor">Direito do Consumidor</option>
          <option value="imobiliario">Direito Imobiliário</option>
          <option value="familia">Direito de Família</option>
          <option value="outro">Outro</option>
        </select>
        {errors.area && <p className="text-xs text-red-500 mt-1">{errors.area.message}</p>}
      </div>

      {/* Mensagem */}
      {!compact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1.5">
            Descreva sua situação
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Descreva brevemente o que está acontecendo."
            {...register('message')}
            className={cn('form-input resize-none', errors.message && 'border-red-400 focus:border-red-400 focus:ring-red-400')}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>
      )}

      {/* Campos ocultos de tracking */}
      {HIDDEN_FIELDS.map((f) => (
        <input key={f} type="hidden" {...register(f)} />
      ))}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <><Loader2 size={16} className="animate-spin" aria-hidden /> Enviando...</>
        ) : (
          'Enviar mensagem'
        )}
      </button>

      {status === 'error' && (
        <p className="text-xs text-red-500 text-center">
          Ocorreu um erro. Tente novamente ou{' '}
          <a
            href={contact.whatsapp.href()}
            className="underline hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            use o WhatsApp
          </a>
          .
        </p>
      )}

      {/* Link WhatsApp alternativo */}
      <p className="text-center text-xs text-muted pt-1">
        Prefere o WhatsApp?{' '}
        <a
          href={contact.whatsapp.href('Olá, encontrei o site e gostaria de orientação jurídica.')}
          onClick={() => trackWhatsAppClick({ page: pathname, ctaLabel: 'form-whatsapp-fallback', tracking: buildTrackingPayload() })}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-gold transition-colors"
        >
          Clique aqui
        </a>
      </p>
    </form>
  )
}
