import type { Metadata } from 'next'
import { AreaPageTemplate } from '@/components/shared/AreaPageTemplate'

export const metadata: Metadata = {
  title: 'Direito de Família em Duque de Caxias — Orientação com Discrição | Samuel Martins Advocacia',
  description: 'Orientação jurídica em divórcio, guarda, pensão alimentícia, inventário e outras questões familiares em Duque de Caxias e Baixada Fluminense.',
  alternates: { canonical: '/familia' },
}

export default function FamiliaPage() {
  return (
    <AreaPageTemplate
      breadcrumbs={[
        { label: 'Início', href: '/' },
        { label: 'Direito de Família', href: '/familia' },
      ]}
      h1="Direito de Família em Duque de Caxias — Orientação com Discrição e Cuidado"
      subtitle="Questões familiares exigem mais do que conhecimento técnico. Exigem escuta, organização e clareza sobre o que é possível em cada situação concreta."
      intro={`Problemas familiares raramente chegam sozinhos. Eles costumam vir acompanhados de desgaste emocional, incerteza sobre o futuro e dúvidas sobre o que a lei permite, exige ou protege em cada situação.

Nesse contexto, o papel da orientação jurídica é oferecer clareza — sobre direitos, obrigações, prazos e caminhos possíveis — sem transformar uma situação já difícil em algo ainda mais complicado do que precisa ser.

O escritório atua em questões de família com atenção ao contexto real de cada pessoa, sem pressa e sem simplificações inadequadas. Em Duque de Caxias e na Baixada Fluminense, o atendimento é direcionado a quem precisa de suporte jurídico organizado e de uma linguagem que ajude a entender o processo, não apenas a atravessá-lo.`}
      situations={[
        { text: 'Divórcio consensual e litigioso, com ou sem partilha de bens.', href: null },
        { text: 'Guarda de filhos, regulamentação de visitas e convivência familiar.', href: null },
        { text: 'Pensão alimentícia: fixação, revisão, exoneração e execução.', href: null },
        { text: 'Reconhecimento e negatória de paternidade.', href: null },
        { text: 'Inventário e partilha de bens após falecimento.', href: null },
        { text: 'União estável: reconhecimento, dissolução e efeitos patrimoniais.', href: null },
      ]}
      midCtaMessage="Olá, preciso de orientação jurídica sobre uma questão de direito de família."
      area="familia"
      educationalTitle="Quando buscar orientação jurídica em questões de família?"
      educationalText={`Nem toda questão familiar termina em disputa judicial. Muitas situações podem ser encaminhadas de forma mais tranquila quando as partes têm clareza sobre seus direitos e encontram uma estrutura jurídica que facilite o entendimento, em vez de acirrar o conflito.

Por outro lado, há casos em que a proteção jurídica precisa ser mais firme — quando há risco para filhos, quando um dos lados age de má-fé ou quando os direitos de uma das partes estão sendo sistematicamente desrespeitados.

O primeiro passo, em qualquer caso, é entender com clareza qual é a situação, o que a lei prevê e quais são as opções reais disponíveis. Isso evita decisões tomadas por pressão, desinformação ou exaustão emocional.`}
      formTitle="Tem uma questão de família?"
      formSubtitle="Seu contato é sigiloso e tratado com total discrição. Retornaremos em até 1 dia útil."
    />
  )
}
