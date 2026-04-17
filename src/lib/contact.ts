/**
 * contact.ts
 * Fonte única de verdade para dados de contato — Samuel Martins Advocacia
 * Nunca duplicar esses valores em outros arquivos.
 */

export const contact = {
  name: 'Samuel Martins Advocacia',
  oab: 'OAB/RJ 234.345',
  whatsapp: {
    number: '5521981302928',
    display: '(21) 98130-2928',
    href: (message?: string) =>
      `https://wa.me/5521981302928${
        message ? `?text=${encodeURIComponent(message)}` : ''
      }`,
    defaultMessage: 'Olá, gostaria de orientação jurídica. Pode me ajudar?',
  },
  email: {
    address: 'sam.msilva.adv@gmail.com',
    href: 'mailto:sam.msilva.adv@gmail.com',
  },
  hours: {
    display: 'Segunda a sexta, 9h às 18h',
    short: 'Seg–Sex · 9h–18h',
    schema: 'Mo-Fr 09:00-18:00',
  },
  location: {
    city: 'Duque de Caxias',
    state: 'RJ',
    region: 'Baixada Fluminense',
    display: 'Duque de Caxias — RJ',
    citiesServed: [
      'Duque de Caxias',
      'Nova Iguaçu',
      'São João de Meriti',
      'Belford Roxo',
      'Nilópolis',
      'Mesquita',
      'Queimados',
    ],
  },
} as const

export const legalNotice =
  'Este site tem caráter exclusivamente informativo. As informações aqui contidas não constituem aconselhamento jurídico individualizado. Para orientação específica sobre sua situação, entre em contato com o escritório.'
