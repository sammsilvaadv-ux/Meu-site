import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { WhatsAppCTA } from '@/components/shared/CTAButton'
import { contact, legalNotice } from '@/lib/contact'

// ─── Conteúdo dos artigos ─────────────────────────────────────────────────────
// Em fase 2, substituir por leitura de arquivos MDX via gray-matter

const articles: Record<string, {
  title: string
  area: string
  date: string
  seoTitle: string
  seoDescription: string
  midCtaMessage: string
  finalCtaMessage: string
  internalLinks: { href: string; label: string }[]
  sections: { heading?: string; body: string }[]
}> = {
  'inss-negou-meu-beneficio': {
    title: 'O INSS negou meu benefício — o que fazer?',
    area: 'Previdenciário',
    date: '15/01/2025',
    seoTitle: 'INSS negou meu benefício: o que fazer? | Samuel Martins Advocacia',
    seoDescription: 'Entenda o que fazer quando o INSS nega um benefício. Veja os passos para recurso administrativo e via judicial em Duque de Caxias e Baixada Fluminense.',
    midCtaMessage: 'Olá, meu benefício foi indeferido pelo INSS e gostaria de orientação.',
    finalCtaMessage: 'Olá, li o artigo sobre benefício negado e gostaria de orientação sobre minha situação.',
    internalLinks: [
      { href: '/previdenciario', label: 'Direito Previdenciário' },
      { href: '/previdenciario/revisao-de-beneficios', label: 'Revisão de benefícios INSS' },
    ],
    sections: [
      {
        body: 'Receber a notícia de que um benefício foi negado pelo INSS costuma gerar insegurança, principalmente quando a pessoa já contava com aquele valor para manter despesas básicas ou atravessa um período de dificuldade de saúde, desemprego ou vulnerabilidade. A negativa, porém, não significa automaticamente que o direito não existe. Em muitos casos, o indeferimento decorre de documentação incompleta, inconsistência cadastral, ausência de comprovação suficiente ou divergência na análise do pedido. Por isso, o primeiro passo é compreender por qual motivo o benefício foi negado e avaliar, com calma, quais caminhos podem ser seguidos.',
      },
      {
        heading: 'Por que o INSS pode negar um benefício',
        body: 'O INSS pode indeferir um pedido por razões diferentes. Às vezes, o problema está em requisitos objetivos, como tempo de contribuição, qualidade de segurado, carência ou renda familiar. Em outros casos, a dificuldade está na prova documental, no laudo médico, nos vínculos registrados ou na forma como o pedido foi apresentado. Também pode acontecer de a pessoa ter direito, mas não ter conseguido demonstrá-lo adequadamente no processo administrativo.',
      },
      {
        heading: 'O que analisar depois do indeferimento',
        body: 'Depois da negativa, é importante verificar o motivo formal do indeferimento, reunir os documentos apresentados, identificar o que faltou e avaliar se o caso comporta complementação probatória, recurso administrativo ou análise judicial. Agir sem entender a razão da negativa pode fazer a pessoa repetir o erro ou perder tempo com um caminho pouco eficiente para a situação.',
      },
      {
        heading: 'Recurso administrativo: quando pode ser útil',
        body: 'Em alguns casos, o recurso administrativo pode ser um caminho adequado, especialmente quando há documentação robusta e o problema parece ter sido uma falha de análise ou enquadramento do pedido. O recurso não é solução automática, mas pode ser pertinente conforme o tipo de benefício, o motivo da negativa e a prova disponível.',
      },
      {
        heading: 'Quando a via judicial pode ser necessária',
        body: 'Há situações em que a discussão exige medida judicial, principalmente quando o indeferimento persiste, quando a prova precisa ser melhor produzida ou quando a análise do caso envolve questões que ultrapassam o procedimento administrativo. A escolha do melhor caminho depende do contexto de cada pessoa e deve ser feita com cautela.',
      },
      {
        heading: 'Prazo e organização',
        body: 'Quanto antes a pessoa entende o motivo da negativa e organiza seus documentos, melhor tende a ser a definição da estratégia. Benefícios previdenciários afetam diretamente a vida financeira e, por isso, a demora em buscar orientação pode agravar um problema que já exige atenção.',
      },
      {
        heading: 'O que fazer a partir de agora',
        body: 'Se o seu benefício foi negado, o mais importante é não tratar a decisão como ponto final sem antes compreender o que efetivamente aconteceu. Uma análise técnica pode indicar se o caminho mais adequado é complementar documentação, recorrer administrativamente ou avaliar a via judicial.',
      },
    ],
  },
  'negativacao-indevida-serasa': {
    title: 'Negativação indevida no Serasa — entenda seus direitos',
    area: 'Consumidor',
    date: '22/01/2025',
    seoTitle: 'Negativação indevida no Serasa ou SPC: o que fazer? | Samuel Martins Advocacia',
    seoDescription: 'Seu nome foi negativado sem motivo ou por dívida já paga? Saiba como agir e quais são seus direitos como consumidor em Duque de Caxias e Baixada Fluminense.',
    midCtaMessage: 'Olá, meu nome foi negativado indevidamente e gostaria de orientação.',
    finalCtaMessage: 'Olá, li o artigo sobre negativação indevida e gostaria de orientação sobre meu caso.',
    internalLinks: [
      { href: '/consumidor', label: 'Direito do Consumidor' },
      { href: '/consumidor/negativacao-indevida', label: 'Negativação indevida' },
    ],
    sections: [
      {
        body: 'Descobrir que o nome foi negativado sem motivo justo costuma causar preocupação imediata. Muitas pessoas só percebem o problema ao tentar fazer uma compra, pedir crédito, abrir conta ou resolver alguma pendência financeira. Em outros casos, a dívida já foi paga, nunca existiu ou foi lançada de forma incorreta. Quando isso acontece, é importante agir com rapidez, mas também com organização, para identificar a origem da negativação e reunir os elementos necessários para buscar solução.',
      },
      {
        heading: 'O que é negativação indevida',
        body: 'A negativação indevida ocorre quando o nome do consumidor é inscrito em cadastro restritivo sem base legítima. Isso pode acontecer por cobrança inexistente, erro de identificação, dívida quitada, fraude, manutenção irregular da inscrição ou falha na prestação do serviço. Cada situação precisa ser examinada conforme seus documentos e circunstâncias.',
      },
      {
        heading: 'Como identificar o problema',
        body: 'O consumidor deve verificar qual empresa realizou a inscrição, qual valor está sendo cobrado, qual a origem da suposta dívida e se houve comunicação prévia adequada. Também é importante guardar comprovantes de pagamento, contratos, prints, protocolos e qualquer documento que ajude a demonstrar que a negativação foi irregular.',
      },
      {
        heading: 'O que diz a legislação consumerista',
        body: 'O sistema de proteção ao consumidor não autoriza cobranças arbitrárias nem registros restritivos sem fundamento. Quando há inscrição indevida, a situação pode exigir correção rápida e responsabilização conforme o caso concreto. A análise jurídica serve justamente para verificar o enquadramento correto e a melhor medida a ser adotada.',
      },
      {
        heading: 'Procon ou advogado: qual caminho seguir?',
        body: 'Há situações que podem começar com tentativa administrativa, mas isso não significa que toda negativação indevida será resolvida de forma simples. Quando a cobrança persiste, quando há urgência, quando o consumidor já tentou resolver o problema ou quando a situação causa prejuízos mais relevantes, a orientação jurídica ajuda a organizar a resposta e definir o caminho adequado.',
      },
      {
        heading: 'O que fazer a partir de agora',
        body: 'Cada caso depende de análise concreta, mas o consumidor não precisa aceitar passivamente uma inscrição injusta. O primeiro passo é reunir as informações corretas, entender a origem do problema e avaliar a providência mais adequada.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug]
  if (!article) return {}
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/blog/${params.slug}` },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) notFound()

  const midIndex = Math.floor(article.sections.length / 2)

  return (
    <>
      {/* Hero do artigo */}
      <section className="bg-surface pt-28 pb-10 md:pt-36 md:pb-14">
        <div className="container-site max-w-3xl">
          <nav aria-label="Localização" className="text-xs text-muted mb-6 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Conteúdos</Link>
            <span>/</span>
            <span className="text-primary font-medium">{article.title}</span>
          </nav>
          <span className="area-tag mb-4 inline-block">{article.area}</span>
          <h1 className="text-hero text-primary text-balance">{article.title}</h1>
          <p className="text-muted text-sm mt-3">{article.date}</p>
          <div className="gold-divider mt-5" />
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

            {/* Texto principal */}
            <div className="prose-juridico max-w-2xl">
              {article.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && <h2>{section.heading}</h2>}
                  <p>{section.body}</p>
                  {/* CTA no meio do artigo */}
                  {i === midIndex && (
                    <div className="my-8 p-5 bg-surface rounded-md border border-border not-prose">
                      <p className="font-display text-primary font-semibold text-base mb-3">
                        Precisa de orientação sobre esse tema?
                      </p>
                      <WhatsAppCTA
                        label="Consulte pelo WhatsApp"
                        message={article.midCtaMessage}
                        area={article.area.toLowerCase()}
                        size="sm"
                      />
                    </div>
                  )}
                </div>
              ))}

              <hr />
              <p className="text-muted text-sm italic">
                Este artigo tem caráter exclusivamente informativo e não constitui aconselhamento jurídico individualizado. Para orientação específica sobre sua situação, entre em contato com o escritório.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA sticky */}
              <div className="card sticky top-24 space-y-4">
                <h3 className="font-display text-primary font-semibold text-base">
                  Precisa de orientação?
                </h3>
                <p className="text-sm text-muted">
                  Fale com Samuel Martins Advocacia pelo WhatsApp.
                </p>
                <WhatsAppCTA
                  label="Falar pelo WhatsApp"
                  message={article.finalCtaMessage}
                  area={article.area.toLowerCase()}
                  className="w-full justify-center"
                  size="sm"
                />
                <div className="text-xs text-muted space-y-1 pt-1 border-t border-border">
                  <p>OAB/RJ 234.345</p>
                  <p>{contact.hours.short}</p>
                  <p>{contact.location.display}</p>
                </div>
              </div>

              {/* Links internos */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-muted font-medium">
                  Páginas relacionadas
                </p>
                {article.internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-primary hover:text-gold transition-colors"
                  >
                    → {link.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="container-site max-w-2xl text-center space-y-4">
          <h2 className="text-h2">Precisa de orientação sobre esse tema?</h2>
          <p className="text-muted">Fale com Samuel Martins Advocacia pelo WhatsApp ou pelo formulário de contato.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppCTA
              label="Falar pelo WhatsApp"
              message={article.finalCtaMessage}
              area={article.area.toLowerCase()}
            />
            <Link href="/contato" className="btn-outline">
              Formulário de contato
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white border-t border-border">
        <div className="container-site py-4">
          <p className="legal-notice">{legalNotice}</p>
        </div>
      </div>
    </>
  )
}
