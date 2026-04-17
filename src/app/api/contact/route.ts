import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  phone:   z.string().min(8),
  area:    z.string().min(1),
  message: z.string().min(10),
  // tracking
  utm_source:   z.string().optional(),
  utm_medium:   z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term:     z.string().optional(),
  utm_content:  z.string().optional(),
  gclid:        z.string().optional(),
  fbclid:       z.string().optional(),
  landing_page: z.string().optional(),
  current_page: z.string().optional(),
  referrer:     z.string().optional(),
  timestamp:    z.string().optional(),
})

function translateMedium(medium?: string): string | null {
  const map: Record<string, string> = {
    cpc:      'Google / Anúncio pago',
    organic:  'Google / Busca orgânica',
    social:   'Redes sociais',
    email:    'E-mail marketing',
    referral: 'Indicação / link externo',
  }
  return medium ? (map[medium] ?? medium) : null
}

function translateArea(area: string): string {
  const map: Record<string, string> = {
    previdenciario: 'Direito Previdenciário',
    consumidor:     'Direito do Consumidor',
    imobiliario:    'Direito Imobiliário',
    familia:        'Direito de Família',
    outro:          'Outro',
  }
  return map[area] ?? area
}

function formatDate(iso?: string): string {
  if (!iso) return 'não registrado'
  try {
    return new Date(iso).toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  } catch { return iso }
}

function buildEmailText(data: z.infer<typeof schema>): string {
  const canal = translateMedium(data.utm_medium)
  const source = data.utm_source
  const canalFull = canal && source ? `${source} / ${canal}` : canal || source || null

  const lines: (string | null)[] = [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'NOVO LEAD — Samuel Martins Advocacia',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    'CONTATO',
    `Nome:     ${data.name}`,
    `Telefone: ${data.phone}`,
    `Área:     ${translateArea(data.area)}`,
    `Mensagem: ${data.message}`,
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'ORIGEM DO LEAD',
    canalFull ? `Canal:      ${canalFull}` : null,
    data.utm_campaign ? `Campanha:   ${data.utm_campaign}` : null,
    data.utm_term ? `Palavra:    ${data.utm_term}` : null,
    data.gclid ? `Google ID:  ${data.gclid}` : null,
    data.fbclid ? `Meta ID:    ${data.fbclid}` : null,
    !canalFull && !data.utm_campaign ? 'Canal:      Acesso direto ou não rastreado' : null,
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'JORNADA',
    data.landing_page ? `Entrada:    ${data.landing_page}` : null,
    data.current_page ? `Conversão:  ${data.current_page}` : null,
    data.referrer ? `Referrer:   ${data.referrer}` : null,
    `Horário:    ${formatDate(data.timestamp)}`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
  ]

  return lines.filter(Boolean).join('\n')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const emailText = buildEmailText(data)
    const subject = `Novo lead — ${translateArea(data.area)} — Samuel Martins Advocacia`
    const to = 'sam.msilva.adv@gmail.com'

    // ── Opção 1: Resend ────────────────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'site@samuel-martins-advocacia.com.br',
          to,
          subject,
          text: emailText,
        }),
      })
      if (!res.ok) throw new Error('Resend error')
      return NextResponse.json({ ok: true })
    }

    // ── Opção 2: Nodemailer / SMTP ─────────────────────────────────────────
    // FASE 2: adicionar webhook para Google Sheets aqui
    // FASE 2: adicionar integração com CRM aqui
    // const payload = { contact: { name, phone, area, message }, tracking: { ... } }

    // Fallback: log no servidor se nenhuma config de email
    console.log('[LEAD]', emailText)
    return NextResponse.json({ ok: true })

  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Dados inválidos', issues: err.issues }, { status: 422 })
    }
    console.error('[contact/route]', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
