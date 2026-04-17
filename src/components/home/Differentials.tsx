import { WhatsAppCTA } from '@/components/shared/CTAButton'
import {
  Scale, Target, MessageCircle, Search, Smartphone, ShieldCheck
} from 'lucide-react'

const icons = { Scale, Target, MessageCircle, Search, Smartphone, ShieldCheck }
type IconName = keyof typeof icons

const items: { icon: IconName; text: string }[] = [
  {
    icon: 'Scale',
    text: 'Atendimento voltado à realidade de quem está sendo injustiçado.',
  },
  {
    icon: 'Target',
    text: 'Atuação com foco definido, sem proposta genérica de "advogado para tudo".',
  },
  {
    icon: 'MessageCircle',
    text: 'Comunicação clara, para que você entenda sua situação e as opções possíveis.',
  },
  {
    icon: 'Search',
    text: 'Análise jurídica séria, com atenção ao contexto concreto de cada caso.',
  },
  {
    icon: 'Smartphone',
    text: 'Atendimento por WhatsApp e videoconferência, com praticidade e organização.',
  },
  {
    icon: 'ShieldCheck',
    text: 'Exercício profissional regular, com inscrição ativa na OAB/RJ 234.345.',
  },
]

export function Differentials() {
  return (
    <section className="section bg-surface">
      <div className="container-site">

        <div className="max-w-2xl mb-12">
          <h2 className="text-h2">
            Orientação jurídica com foco, presença local e clareza
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {items.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 w-8 h-8 rounded bg-white flex items-center justify-center shadow-sm mt-0.5">
                  <Icon size={16} className="text-gold" aria-hidden />
                </div>
                <p className="text-sm text-text-main leading-relaxed">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <WhatsAppCTA
            label="Agendar consulta pelo WhatsApp"
            message="Olá, gostaria de agendar uma consulta."
            area="geral"
          />
        </div>
      </div>
    </section>
  )
}
