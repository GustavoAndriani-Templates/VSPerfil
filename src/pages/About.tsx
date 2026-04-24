import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre a VS Perfil</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 5 anos de experiência em corte e dobra de metalon galvanizado de alta qualidade
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
            <p className="text-gray-700 leading-relaxed">
              Fornecer soluções industriais de ponta através
              da produção e prestação de serviços de corte e dobra de metalon galvanizado,
              contribuindo para o aumento da produtividade, precisão e competitividade de nossos clientes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser referência nacional em serviços de corte e dobra de metalon galvanizado,
              reconhecida pela qualidade, precisão dos processos, excelência no atendimento e
              compromisso com a satisfação dos clientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Todos os equipamentos passam por rigoroso controle de qualidade
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Parceria com Clientes</h3>
              <p className="text-gray-600">
                Desenvolvemos relacionamentos duradouros baseados na confiança
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excelência Técnica</h3>
              <p className="text-gray-600">
                Equipe altamente qualificada e atualizada com as últimas tecnologias
              </p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500t+</div>
              <div className="text-blue-200">Metalon Vendido</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;