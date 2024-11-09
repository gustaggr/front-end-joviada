import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <NavBar />
      <div className="w-full flex flex-col items-center py-10 px-4 mb-10">
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">Termos de Serviço</h1>
          <p className="text-lg text-gray-700 mb-4">
            Ao utilizar nossos serviços, você concorda com os seguintes termos. Recomendamos a leitura atenta antes de continuar.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ao acessar ou utilizar nossos serviços, você concorda em seguir e estar legalmente vinculado a estes Termos de Serviço.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Alterações nos Termos</h2>
          <p className="text-lg text-gray-700 mb-4">
            Reservamo-nos o direito de atualizar estes Termos a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação da versão revisada.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Uso dos Serviços</h2>
          <p className="text-lg text-gray-700 mb-4">
            Você concorda em utilizar nossos serviços de maneira responsável, abstendo-se de atividades que possam comprometer ou interromper a integridade do serviço.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Política de Privacidade</h2>
          <p className="text-lg text-gray-700 mb-4">
            A coleta e o uso de suas informações pessoais estão detalhados em nossa <Link to="/policy" className="text-blue-600">Política de Privacidade</Link>, que recomendamos revisar.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitação de Responsabilidade</h2>
          <p className="text-lg text-gray-700 mb-4">
            Não nos responsabilizamos por danos diretos ou indiretos que possam resultar do uso de nossos serviços, exceto nos casos previstos por lei.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Direito de Desistência e Reembolso</h2>
          <p className="text-lg text-gray-700 mb-4">
            Você pode desistir e solicitar um reembolso integral em até 7 dias após a confirmação da compra. Após esse prazo, não serão aceitos pedidos de reembolso.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Para solicitar o reembolso, entre em contato pelo e-mail <a href="mailto:reembolso@joviadacoro.com.br" className="text-blue-600">reembolso@joviadacoro.com.br</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Uso de Imagens</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ao participar do evento, você concorda com o uso de imagens e vídeos capturados para divulgação em materiais promocionais e nossas plataformas digitais, como redes sociais e sites.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Rescisão</h2>
          <p className="text-lg text-gray-700 mb-4">
            Reservamo-nos o direito de suspender ou encerrar sua conta sem aviso prévio caso você viole algum dos termos aqui estabelecidos.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contato</h2>
          <p className="text-lg text-gray-700 mb-4">
            Para dúvidas ou mais informações, entre em contato conosco pelo e-mail <a href="mailto:suporte@joviadacoro.com.br" className="text-blue-600">suporte@joviadacoro.com.br</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
