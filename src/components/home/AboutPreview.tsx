import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Elemento decorativo */}
          <div className="flex justify-center lg:justify-start" aria-hidden>
            <div className="relative flex items-center gap-6">
              {/* Linha vertical dourada */}
              <div className="w-px h-48 bg-gradient-to-b from-transparent via-gold to-transparent" />
              {/* Monograma */}
              <div className="space-y-2">
                <p
                  className="font-display text-primary select-none leading-none"
                  style={{ fontSize: '6rem', fontWeight: 700, opacity: 0.08 }}
                >
                  SM
                </p>
                <div className="space-y-1">
                  <p className="font-display text-primary font-semibold text-2xl">
                    Samuel Martins
                  </p>
                  <p className="font-body text-gold text-xs uppercase tracking-[0.18em] font-medium">
                    Advocacia
                  </p>
                  <span className="oab-badge mt-2 inline-flex">
                    OAB/RJ 234.345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
                Sobre o escritório
              </p>
              <h2 className="text-h2 text-balance">
                Advocacia com foco definido e presença local
              </h2>
              <div className="gold-divider mt-4" />
            </div>
            <p className="text-muted leading-relaxed">
              Samuel Martins Advocacia atua com foco em Direito Previdenciário
              e Direito do Consumidor, sem perder de vista áreas estratégicas
              como Direito Imobiliário e Direito de Família. A proposta do
              escritório é oferecer orientação jurídica clara, ética e
              comprometida, com linguagem acessível e análise séria da situação
              concreta de cada cliente.
            </p>
            <p className="text-muted leading-relaxed">
              Com presença na Baixada Fluminense e atuação voltada à realidade
              de Duque de Caxias e região, o escritório busca unir proximidade
              no atendimento, organização técnica e respeito às particularidades
              de cada caso.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-gold transition-colors group"
            >
              Conheça o escritório
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
