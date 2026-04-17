import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const blocks = [
  {
    question: 'Seu benefício do INSS foi negado ou suspenso?',
    body: 'Nem toda negativa encerra o seu direito. Em muitos casos, é possível analisar documentos, verificar o motivo do indeferimento e avaliar o caminho administrativo ou judicial cabível.',
    href: '/previdenciario',
    area: 'previdenciario',
  },
  {
    question: 'Seu nome foi negativado indevidamente?',
    body: 'Cobranças incorretas, dívidas já pagas ou inscrições indevidas em cadastros restritivos podem exigir providências rápidas e bem documentadas.',
    href: '/consumidor/negativacao-indevida',
    area: 'consumidor',
  },
  {
    question: 'Está tentando se aposentar e não sabe por onde começar?',
    body: 'O planejamento e a análise correta da sua situação previdenciária ajudam a evitar erros, atrasos e indeferimentos desnecessários.',
    href: '/previdenciario',
    area: 'previdenciario',
  },
  {
    question: 'Seu plano de saúde recusou procedimento, exame ou internação?',
    body: 'A negativa de cobertura precisa ser analisada com cuidado, especialmente quando envolve urgência, continuidade de tratamento ou risco de agravamento.',
    href: '/consumidor/plano-de-saude',
    area: 'consumidor',
  },
]

export function ProblemSection() {
  return (
    <section className="section bg-primary">
      <div className="container-site">

        <div className="text-center mb-12">
          <h2 className="text-h2 text-white">
            Reconhece alguma dessas situações?
          </h2>
          <p className="text-white/60 mt-3 text-base">
            Se sim, pode ser o momento de buscar orientação jurídica especializada.
          </p>
          <div className="gold-divider mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blocks.map((block, i) => (
            <div
              key={i}
              className="rounded-md p-6 border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors space-y-3"
            >
              <h3 className="font-display text-white font-semibold text-lg leading-snug">
                {block.question}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                {block.body}
              </p>
              <Link
                href={block.href}
                className="inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:text-gold-light transition-colors group"
                aria-label={`Entenda seus direitos sobre: ${block.question}`}
              >
                Entenda seus direitos
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
