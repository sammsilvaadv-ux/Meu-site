import Link from 'next/link'
import { Scale, ShieldCheck, Home, Users } from 'lucide-react'

const areas = [
  {
    slug: 'previdenciario',
    icon: Scale,
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, benefícios por incapacidade, BPC/LOAS, pensão por morte e revisão de benefícios junto ao INSS.',
    href: '/previdenciario',
  },
  {
    slug: 'consumidor',
    icon: ShieldCheck,
    title: 'Direito do Consumidor',
    description:
      'Negativação indevida, cobranças abusivas, falhas na prestação de serviços, conflitos com bancos, concessionárias e planos de saúde.',
    href: '/consumidor',
  },
  {
    slug: 'imobiliario',
    icon: Home,
    title: 'Direito Imobiliário',
    description:
      'Questões envolvendo contratos, regularização, conflitos sobre imóveis, construtoras e situações patrimoniais relevantes.',
    href: '/imobiliario',
  },
  {
    slug: 'familia',
    icon: Users,
    title: 'Direito de Família',
    description:
      'Divórcio, guarda, pensão, convivência, inventário e outras questões familiares que exigem orientação com discrição e firmeza.',
    href: '/familia',
  },
]

export function AreasGrid() {
  return (
    <section id="areas" className="section bg-white">
      <div className="container-site">

        <div className="text-center mb-12">
          <h2 className="text-h2">Como podemos orientar você?</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <Link
                key={area.slug}
                href={area.href}
                className="area-card group"
                aria-label={`Ver mais sobre ${area.title}`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded bg-surface flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Icon
                      size={20}
                      className="text-gold"
                      aria-hidden
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-primary font-semibold text-lg leading-snug group-hover:text-gold transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {area.description}
                    </p>
                    <p className="text-xs text-gold font-medium uppercase tracking-wide pt-1">
                      Saiba mais →
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
