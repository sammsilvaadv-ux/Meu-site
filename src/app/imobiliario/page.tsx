import type { Metadata } from 'next'
import { AreaPageTemplate } from '@/components/shared/AreaPageTemplate'

export const metadata: Metadata = {
  title: 'Assessoria Jurídica Imobiliária em Duque de Caxias | Samuel Martins Advocacia',
  description: 'Orientação jurídica em contratos de compra e venda, regularização de imóveis, locação e questões patrimoniais em Duque de Caxias e Baixada Fluminense.',
  alternates: { canonical: '/imobiliario' },
}

export default function ImobiliarioPage() {
  return (
    <AreaPageTemplate
      breadcrumbs={[
        { label: 'Início', href: '/' },
        { label: 'Direito Imobiliário', href: '/imobiliario' },
      ]}
      h1="Assessoria Jurídica Imobiliária em Duque de Caxias"
      subtitle="Orientação para quem precisa de suporte jurídico em contratos, regularização de imóveis, conflitos patrimoniais e questões envolvendo compra, venda ou locação."
      intro={`Negócios envolvendo imóveis costumam representar decisões de grande impacto na vida das pessoas. Um contrato mal elaborado, uma irregularidade documental ou um conflito não resolvido a tempo podem gerar consequências relevantes — tanto para quem compra e vende quanto para quem loca, herda ou divide um bem imóvel.

A orientação jurídica nessa área tem como função analisar contratos, identificar riscos, verificar a situação documental do imóvel e definir a medida mais adequada para cada caso — antes que o problema se agrave ou que a decisão seja tomada sem as informações necessárias.

Em Duque de Caxias e na Baixada Fluminense, o escritório atua com atenção às particularidades da região, incluindo questões de regularização que são frequentes em áreas de ocupação consolidada.`}
      situations={[
        { text: 'Análise e elaboração de contratos de compra e venda de imóveis.', href: null },
        { text: 'Regularização de imóveis sem escritura, com documentação incompleta ou em situação irregular.', href: null },
        { text: 'Conflitos entre locador e locatário, inadimplência e rescisão contratual.', href: null },
        { text: 'Problemas com construtoras: atraso na entrega, vícios de construção ou distrato.', href: null },
        { text: 'Usucapião e outras formas de reconhecimento de posse.', href: null },
        { text: 'Partilha de bens imóveis em divórcio ou inventário.', href: null },
      ]}
      midCtaMessage="Olá, preciso de orientação jurídica sobre uma questão imobiliária."
      area="imobiliario"
      educationalTitle="Por que buscar orientação jurídica antes de assinar?"
      educationalText={`Decisões imobiliárias costumam envolver valores altos e consequências de longo prazo. Um contrato assinado sem análise adequada pode conter cláusulas desequilibradas, prazos prejudiciais ou ausência de proteções básicas para quem compra ou aluga.

Da mesma forma, imóveis com documentação irregular — situação frequente em muitas regiões da Baixada Fluminense — exigem atenção jurídica para identificar o caminho correto de regularização e evitar que o bem fique em situação de difícil transmissão ou uso.

Buscar orientação antes de assinar, antes de fechar negócio ou antes de iniciar uma disputa é sempre mais eficiente do que tentar corrigir um problema depois que ele já está instalado.`}
      formTitle="Tem uma questão imobiliária?"
      formSubtitle="Descreva brevemente a situação. Retornaremos em até 1 dia útil."
    />
  )
}
