import type { Metadata } from 'next'
import { AreaPageTemplate } from '@/components/shared/AreaPageTemplate'

export const metadata: Metadata = {
  title: 'Advogado do Consumidor em Duque de Caxias | Samuel Martins Advocacia',
  description: 'Orientação jurídica em negativação indevida, cobranças abusivas, plano de saúde e conflitos com empresas em Duque de Caxias e Baixada Fluminense.',
  alternates: { canonical: '/consumidor' },
}

export default function ConsumidorPage() {
  return (
    <AreaPageTemplate
      breadcrumbs={[
        { label: 'Início', href: '/' },
        { label: 'Direito do Consumidor', href: '/consumidor' },
      ]}
      h1="Direito do Consumidor em Duque de Caxias — Orientação Jurídica Especializada"
      subtitle="Assessoria para quem enfrenta cobranças indevidas, negativação injusta, recusa de cobertura por plano de saúde ou falhas graves na prestação de serviços."
      intro={`Problemas de consumo costumam surgir de forma inesperada e, muitas vezes, afetam a vida prática de quem precisa resolver uma cobrança indevida, uma negativação injusta, uma falha grave de serviço ou uma recusa abusiva por parte de empresa, banco, concessionária ou plano de saúde.

Nessas situações, o consumidor geralmente já tentou resolver o problema por canais comuns e encontra dificuldade, demora ou respostas insuficientes.

O papel da orientação jurídica é analisar a situação concreta, identificar quais direitos estão envolvidos, organizar a documentação e avaliar a medida mais adequada para o caso. Em Duque de Caxias e na Baixada Fluminense, o escritório atua em demandas consumeristas com foco em clareza, objetividade e estratégia.`}
      situations={[
        { text: 'Negativação indevida em órgãos de proteção ao crédito.', href: '/consumidor/negativacao-indevida' },
        { text: 'Cobranças abusivas ou cobranças por serviço não reconhecido.', href: '/consumidor/cobrancas-abusivas' },
        { text: 'Problemas com concessionárias de energia, água ou telefonia.', href: null },
        { text: 'Conflitos com bancos, empréstimos e contratos de consumo.', href: null },
        { text: 'Recusa de procedimento, exame ou cobertura por plano de saúde.', href: '/consumidor/plano-de-saude' },
        { text: 'Falhas relevantes na prestação de serviços ou descumprimento contratual.', href: null },
      ]}
      midCtaMessage="Olá, estou com um problema relacionado ao Direito do Consumidor e gostaria de orientação."
      area="consumidor"
      educationalTitle="Quando a orientação jurídica faz diferença?"
      educationalText={`Nem todo conflito de consumo exige o mesmo caminho. Há situações que podem ser inicialmente tratadas em canais administrativos, enquanto outras pedem resposta mais técnica desde o começo, especialmente quando há urgência, risco de dano maior ou repetidas tentativas frustradas de solução.

Buscar orientação jurídica serve para separar o que é aborrecimento simples daquilo que realmente configura violação de direito e exige providência mais firme. Também ajuda a definir quais provas guardar, como organizar os fatos e quais medidas são mais adequadas para cada caso.

O mais importante é não deixar que a falta de informação leve o consumidor a desistir de um direito que pode ser buscado de forma legítima.`}
      relatedArticles={[
        {
          slug: 'negativacao-indevida-serasa',
          area: 'Consumidor',
          title: 'Negativação indevida no Serasa — entenda seus direitos',
          summary: 'Ter o nome negativado sem motivo justo é uma violação dos seus direitos. Entenda como identificar e o que a lei prevê nesses casos.',
        },
      ]}
      formTitle="Tem um problema de consumo?"
      formSubtitle="Descreva brevemente a situação. Retornaremos em até 1 dia útil."
    />
  )
}
