import Link from 'next/link'
import { WhatsAppCTA } from '@/components/shared/CTAButton'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-bg">
      <div className="container-site text-center space-y-6 py-20">
        <p className="font-display text-gold font-bold" style={{ fontSize: '6rem', lineHeight: 1 }} aria-hidden>
          404
        </p>
        <h1 className="text-h2 text-primary">Página não encontrada</h1>
        <p className="text-muted max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida. Navegue pelo menu ou entre em contato pelo WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-outline">← Voltar ao início</Link>
          <WhatsAppCTA
            label="Falar pelo WhatsApp"
            message="Olá, gostaria de orientação jurídica."
          />
        </div>
      </div>
    </section>
  )
}
