import type { Metadata } from 'next'
import { AreaPageTemplate } from '@/components/shared/AreaPageTemplate'

export const metadata: Metadata = {
  title: 'Advogado Previdenciário em Duque de Caxias | Samuel Martins Advocacia',
  description: 'Assessoria jurídica em aposentadoria, benefício por incapacidade, BPC/LOAS, pensão por morte e revisão de benefícios INSS em Duque de Caxias e Baixada Fluminense.',
  alternates: { canonical: '/previdenciario' },
}

export default function PrevidenciarioPage() {
  return (
    <AreaPageTemplate
      breadcrumbs={[
        { label: 'Início', href: '/' },
        { label: 'Direito Previdenciário', href: '/previdenciario' },
      ]}
      h1="Advocacia em Direito Previdenciário em Duque de Caxias e Baixada Fluminense"
      subtitle="Orientação jurídica para quem enfrenta problemas com benefícios do INSS ou precisa planejar sua aposentadoria com segurança."
      intro={`O Direito Previdenciário envolve situações que impactam diretamente a renda, a segurança e a estabilidade de quem depende de benefício previdenciário ou assistencial. Em muitos casos, o problema surge quando o INSS nega um pedido, suspende um benefício, concede valor inferior ao devido ou gera dúvidas sobre o melhor momento de requerer aposentadoria.

Nessas horas, uma análise jurídica cuidadosa ajuda a entender o que aconteceu, quais documentos são relevantes e quais caminhos podem ser avaliados, seja na esfera administrativa, seja na via judicial.

Em Duque de Caxias e na Baixada Fluminense, o escritório atua com orientação clara e técnica para pessoas que precisam compreender sua situação previdenciária com mais segurança.`}
      situations={[
        { text: 'Pedido de aposentadoria com dúvida sobre tempo, requisitos ou documentação.', href: '/previdenciario/aposentadoria-por-incapacidade' },
        { text: 'Benefício por incapacidade negado, cessado ou suspenso.', href: '/previdenciario/aposentadoria-por-incapacidade' },
        { text: 'BPC/LOAS indeferido ou com exigências que precisam de análise.', href: '/previdenciario/bpc-loas' },
        { text: 'Pensão por morte negada ou concedida com questionamentos.', href: '/previdenciario/pensao-por-morte' },
        { text: 'Revisão de benefício com suspeita de cálculo incorreto.', href: '/previdenciario/revisao-de-beneficios' },
        { text: 'Necessidade de avaliar documentos e histórico contributivo antes do requerimento.', href: null },
      ]}
      midCtaMessage="Olá, gostaria de orientação sobre minha situação junto ao INSS."
      area="previdenciario"
      educationalTitle="Quando buscar orientação jurídica?"
      educationalText={`Nem toda questão previdenciária se resolve apenas com um novo pedido no INSS, e nem todo indeferimento significa perda definitiva do direito. Muitas vezes, o problema está na documentação apresentada, no enquadramento do pedido, na forma como o caso foi analisado ou na ausência de elementos que precisavam ser melhor demonstrados.

Buscar orientação jurídica não significa judicializar tudo; significa, antes de tudo, compreender a sua situação com clareza. Em alguns casos, o caminho pode passar por ajuste documental ou novo requerimento. Em outros, a via judicial pode ser necessária.

O ponto central é não agir no escuro, especialmente quando o benefício tem impacto direto no sustento da pessoa ou da família.`}
      relatedArticles={[
        {
          slug: 'inss-negou-meu-beneficio',
          area: 'Previdenciário',
          title: 'O INSS negou meu benefício — o que fazer?',
          summary: 'O INSS pode negar benefícios por razões formais ou de mérito. Saiba quais são os caminhos disponíveis para quem teve o pedido indeferido.',
        },
      ]}
      formTitle="Tem uma dúvida sobre benefício ou aposentadoria?"
      formSubtitle="Descreva brevemente a situação. Retornaremos em até 1 dia útil."
    />
  )
}
