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
          <p className="text-muted text-sm mt-3">Última atualização: outubro de 2026</p>
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
            <h2>Instagram e atendimento de comentários</h2>
            <p>O escritório utiliza o aplicativo <strong>Samuel Martins Atendimento</strong>, integrado à API do Instagram (Meta), para receber e responder comentários feitos nas publicações do perfil <strong>@samuelmartins.adv</strong>. Por esse canal, tratamos:</p>
            <ul>
              <li>Nome de usuário e identificador público da conta que comentou</li>
              <li>Texto do comentário, publicação comentada e data e hora</li>
              <li>Conteúdo de mensagens que você nos enviar por mensagem direta</li>
            </ul>
            <p>Esses dados são usados apenas para responder ao seu comentário ou mensagem, atender pedidos de contato (inclusive encaminhando a conversa para o WhatsApp do escritório, quando você solicitar) e moderar spam ou conteúdo ofensivo. As bases legais são os procedimentos preliminares a contrato a pedido do titular e o legítimo interesse do escritório (art. 7º, V e IX, da LGPD).</p>
            <p>Os comentários podem ser organizados e ter respostas redigidas com o auxílio de um assistente de inteligência artificial (Claude, da Anthropic), sob supervisão do advogado responsável. Nenhuma decisão com efeitos jurídicos sobre você é tomada de forma exclusivamente automatizada, e orientação jurídica só é prestada pelo advogado, em canal reservado.</p>
            <p>Para essa finalidade, os dados são tratados pela Meta (plataforma Instagram), pela Anthropic (assistente de inteligência artificial) e por provedores de conexão segura da aplicação, alguns deles com servidores fora do Brasil, nas hipóteses do art. 33 da LGPD. As cópias usadas no atendimento são mantidas por no máximo 90 dias, salvo início de relação contratual ou obrigação legal.</p>
            <p>Comentários no Instagram são públicos. Por isso, pedimos que você <strong>não descreva detalhes do seu caso nos comentários</strong>: o atendimento jurídico acontece em canal reservado e protegido pelo sigilo profissional.</p>
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

          <div id="exclusao-de-dados" className="space-y-4 scroll-mt-28">
            <h2>Exclusão de dados</h2>
            <p>Para pedir a exclusão dos seus dados tratados pelo escritório, inclusive os recebidos pelo Instagram:</p>
            <ul>
              <li>Envie um e-mail para <a href={contact.email.href} className="text-primary hover:text-gold transition-colors">{contact.email.address}</a> com o assunto <strong>&quot;Exclusão de dados&quot;</strong>, ou uma mensagem pelo WhatsApp {contact.whatsapp.display}.</li>
              <li>Se o pedido for sobre o Instagram, informe o seu nome de usuário e, se possível, o comentário ou a mensagem em questão.</li>
              <li>Responderemos em até 15 dias, confirmando a exclusão dos registros mantidos pelo escritório.</li>
            </ul>
            <p>Comentários publicados no Instagram também podem ser apagados por você diretamente no aplicativo, ou removidos por nós das nossas publicações, a seu pedido. Só manteremos dados cuja guarda seja exigida por lei, e informaremos isso na resposta.</p>
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
