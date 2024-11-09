import React from 'react';
import NavBar from '../components/NavBar';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <NavBar />
      <div className="w-full flex flex-col items-center py-10 px-4 mb-10">
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">Política de Privacidade</h1>
          <p className="text-lg text-gray-700 mb-4">
            Sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Informações Coletadas</h2>
          <p className="text-lg text-gray-700 mb-4">
            Coletamos informações pessoais fornecidas por você ao se registrar, como nome, e-mail e número de telefone. Esses dados são utilizados exclusivamente para melhorar a experiência no serviço e facilitar o atendimento ao cliente.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Uso das Informações</h2>
          <p className="text-lg text-gray-700 mb-4">
            Utilizamos as informações fornecidas para processar pedidos, oferecer suporte e enviar atualizações sobre nossos serviços. Seus dados pessoais não serão compartilhados com terceiros, exceto conforme exigido por lei ou com o seu consentimento.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Processamento de Pagamentos</h2>
          <p className="text-lg text-gray-700 mb-4">
            Para garantir a segurança das suas transações financeiras, utilizamos o <a className='text-blue-600' href='https://www.mercadopago.com.br/ajuda/Termos-e-condicoes-gerais-de-uso_1409'>Mercado Pago</a> como nosso processador de pagamentos. Todos os dados de pagamento são processados exclusivamente pelo <a className='text-blue-600' href='https://www.mercadopago.com.br/ajuda/Termos-e-condicoes-gerais-de-uso_1409'>Mercado Pago</a> e não temos acesso a nenhuma informação sensível, como número de cartão de crédito ou dados bancários.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Criptografia de Senhas</h2>
          <p className="text-lg text-gray-700 mb-4">
            Para proteger sua privacidade, todas as senhas são criptografadas. A criptografia assegura que as senhas sejam armazenadas de forma segura, e não temos acesso para visualizar nenhuma senha.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Segurança dos Dados</h2>
          <p className="text-lg text-gray-700 mb-4">
            Adotamos medidas de segurança para proteger suas informações contra acessos não autorizados e usos indevidos. Não contamos com funcionários, e o acesso aos seus dados é restrito estritamente a necessidades operacionais automatizadas.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Uso de Imagens Pessoais</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ao aceitar os termos, você autoriza o uso de sua imagem em fotos e vídeos capturados durante o retiro de jovens, que ocorrerá de 1 a 4 de março. Essas imagens poderão ser utilizadas para divulgação e promoção em nossos materiais institucionais e plataformas digitais, incluindo redes sociais e websites, com o objetivo de documentar e promover o evento.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
          <p className="text-lg text-gray-700 mb-4">
            Utilizamos cookies para melhorar a experiência do usuário em nosso site. Os cookies permitem a personalização de conteúdo e lembram preferências de navegação. Você pode desativar os cookies nas configurações do seu navegador, mas algumas funcionalidades podem ser afetadas.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Alterações na Política de Privacidade</h2>
          <p className="text-lg text-gray-700 mb-4">
            Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Qualquer mudança entrará em vigor imediatamente após a publicação da versão revisada em nosso site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contato</h2>
          <p className="text-lg text-gray-700 mb-4">
            Para mais informações sobre nossa Política de Privacidade, entre em contato pelo e-mail <a href="mailto:privacidade@joviadacoro.com.br" className="text-blue-600">privacidade@joviadacoro.com.br</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
