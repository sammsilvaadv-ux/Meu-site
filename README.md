# Samuel Martins Advocacia — Site Institucional

Site do escritório **Samuel Martins Advocacia** (OAB/RJ 234.345), desenvolvido em Next.js 14 com TypeScript e Tailwind CSS.

## 🛠 Tecnologias

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [Lucide React](https://lucide.dev/)
- [Resend](https://resend.com/) — envio de e-mails

## 🚀 Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Edite o .env.local com seus IDs reais

# 3. Rodar o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📋 Variáveis de ambiente

Copie `.env.local.example` para `.env.local` e preencha:

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID do Google Analytics 4 |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel |
| `NEXT_PUBLIC_SITE_URL` | URL do site em produção |
| `NEXT_PUBLIC_WHATSAPP` | Número do WhatsApp (com DDI) |
| `RESEND_API_KEY` | Chave da API Resend para e-mails |

> ⚠️ **Nunca** suba o `.env.local` para o GitHub. Ele já está no `.gitignore`.

## 🌐 Deploy no Vercel

1. Importe o repositório no [Vercel](https://vercel.com)
2. Configure o **Root Directory** como `/` (raiz do repo)
3. Adicione as variáveis de ambiente no painel do Vercel
4. Deploy automático a cada `git push`

## 📁 Estrutura

```
src/
├── app/                  # Páginas (App Router)
│   ├── page.tsx          # Home
│   ├── previdenciario/   # Direito Previdenciário
│   ├── consumidor/       # Direito do Consumidor
│   ├── contato/          # Contato
│   ├── sobre/            # Sobre o escritório
│   ├── blog/             # Conteúdos jurídicos
│   └── api/contact/      # API de envio de formulário
├── components/
│   ├── home/             # Seções da Home
│   ├── layout/           # Header, Footer, WhatsApp
│   ├── shared/           # Componentes reutilizáveis
│   └── analytics/        # GTM, cookies, tracking
└── lib/                  # Utilitários (contact, gtm, utm)
```

## ⚖️ Licença

Projeto proprietário — Samuel Martins Advocacia. Todos os direitos reservados.
