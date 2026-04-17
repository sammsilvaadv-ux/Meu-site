import type { Metadata } from 'next'
import Link from 'next/link'
import { contact } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Samuel Martins Advocacia',
  description: 'Saiba como Samuel Martins Advocacia coleta, utiliza e protege seus dados pessoais.',
  alternates: { canonical: '/politica-de-privacidade' },
  robots: { index: false },
}

export default function PoliticaPrivacidadePage() {
  const year = new Date().getFullYear()

  return (
    <>
      <section className="bg-surface pt-28 pb-10 md:pt-36 md:pb-14">
        <div className="container-site max-w-3xl">
          <nav aria-label="Localização" className="text-xs text-muted mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary font-medium">Política de Privacidade</span>
          </nav>
          <h1 className="text-hero text-primary">Política de Privacidade</h1>
          <p className="text-muted text-sm mt-3">Última atualização: janeiro de {year}</p>
          <div className="gold-divider mt-5" />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site max-w-3xl prose-juridico space-y-10">

          <div className="space-y-4">
            <h2>Quem somos</h2>
            <p>Samuel Martins Advocacia, inscrito na OAB/RJ sob o nº 234.345, com sede em {contact.location.display}. Este site é operado exclusivamente pelo escritório para fins de apresentação institucional e captação de contatos de pessoas interessadas em orientação jurídica.</p>
          </div>

          <div className="space-y-4">
            <h2>Quais dados coletamos</h2>
            <p>Coletamos apenas os dados que você fornece voluntariamente ao entrar em contato conosco pelo formulário do site:</p>
            <ul>
              <li>Nome completo</li>
              <li>Telefone</li>
              <li>Área de interesse jurídico selecionada</li>
              <li>Mensagem com descrição da situação</li>
            </ul>
            <p>Além disso, coletamos automaticamente dados de navegação para fins analíticos:</p>
            <ul>
              <li>Páginas visitadas e origem do acesso (canal, campanha, palavra-chave)</li>
              <li>Tipo de dispositivo e navegador</li>
              <li>Dados agregados de comportamento no site</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2>Para que usamos seus dados</h2>
            <ul>
              <li><strong>Dados do formulário:</strong> exclusivamente para retornar seu contato e prestar orientação jurídica solicitada.</li>
              <li><strong>Dados de navegação:</strong> para entender quais canais e conteúdos geram mais procura, melhorar o site e, futuramente, configurar campanhas de anúncios.</li>
            </ul>
            <p>Não vendemos, cedemos ou compartilhamos seus dados com terceiros para fins comerciais.</p>
          </div>

          <div className="space-y-4">
            <h2>Ferramentas utilizadas</h2>
            <ul>
              <li><strong>Google Tag Manager:</strong> gerenciamento centralizado de ferramentas de análise e marketing.</li>
              <li><strong>Google Analytics 4:</strong> análise de tráfego e comportamento no site. Os dados são processados pelo Google conforme sua política de privacidade.</li>
              <li><strong>Meta Pixel:</strong> ferramenta instalada e preparada para campanhas futuras no Facebook e Instagram. Inativo até o início de campanhas pagas.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2>Cookies</h2>
            <p>Utilizamos cookies para funcionamento do site e para as ferramentas analíticas acima descritas. Ao acessar o site pela primeira vez, você verá um aviso de consentimento com a opção de aceitar todos os cookies ou apenas os essenciais.</p>
            <p>Você pode alterar suas preferências a qualquer momento clicando em "Preferências de cookies" no rodapé do site.</p>
          </div>

          <div className="space-y-4">
            <h2>Retenção dos dados</h2>
            <ul>
              <li><strong>Dados do formulário:</strong> mantidos por até 2 anos para fins de histórico de atendimento.</li>
              <li><strong>Dados de analytics:</strong> conforme a política de retenção do Google Analytics (padrão: 14 meses).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2>Seus direitos (LGPD — Lei 13.709/2018)</h2>
            <p>Você tem direito a:</p>
            <ul>
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Solicitar correção de dados incompletos ou incorretos</li>
              <li>Solicitar exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p>Para exercer qualquer desses direitos, entre em contato por e-mail: <a href={contact.email.href} className="text-primary hover:text-gold transition-colors">{contact.email.address}</a></p>
          </div>

          <div className="space-y-4">
            <h2>Contato</h2>
            <p>Samuel Martins Advocacia — OAB/RJ 234.345<br />
            {contact.location.display}<br />
            {contact.email.address}<br />
            {contact.whatsapp.display}<br />
            {contact.hours.display}</p>
          </div>

        </div>
      </section>
    </>
  )
}
