import React from 'react';
import { Link } from 'react-router-dom';
import { Machinery } from '../types/machinery';
import MachineCard from '../components/machines/MachineCard';
import { 
  Factory, 
  Shield, 
  Clock, 
  TrendingUp,
  Scissors
} from 'lucide-react';

interface HomeProps {
  featuredMachines: Machinery[];
}

const Home: React.FC<HomeProps> = ({ featuredMachines }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Máquinas Industriais de 
              <span className="text-blue-300"> Alto Desempenho</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Importação especializada em equipamentos de corte e dobra de metalon galvanizado. 
              Tecnologia alemã e japonesa para maximizar sua produtividade.
            </p>
            <Link
              to="/machines"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
            >
              Ver Catálogo Completo
              <TrendingUp className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a MetalTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos especialistas em fornecer soluções completas para sua indústria metalúrgica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garantia e Qualidade</h3>
              <p className="text-gray-600">
                Todas as máquinas possuem certificação internacional e garantia de 2 anos
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suporte Técnico</h3>
              <p className="text-gray-600">
                Equipe especializada disponível 24/7 para suporte e manutenção
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instalação Completa</h3>
              <p className="text-gray-600">
                Fornecemos instalação, treinamento e suporte pós-venda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossas Especialidades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Scissors className="h-8 w-8 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Máquinas de Corte</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Cortadoras CNC de alta precisão para metalon galvanizado, com tecnologia 
                de ponta e máxima eficiência energética.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Precisão milimétrica</li>
                <li>• Alta velocidade de produção</li>
                <li>• Baixo consumo energético</li>
                <li>• Manutenção simplificada</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Scissors className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Máquinas de Dobra</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Dobradeiras hidráulicas e CNC para formatos complexos em metalon, 
                com controle digital e repetibilidade garantida.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Controle CNC avançado</li>
                <li>• Ângulos precisos</li>
                <li>• Sistema de segurança</li>
                <li>• Backgauge digital</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Machines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Máquinas em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Conheça nossos equipamentos mais populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMachines.slice(0, 3).map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/machines"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Ver Todas as Máquinas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;