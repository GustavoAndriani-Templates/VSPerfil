import React from 'react';
import { Factory, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Factory className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">MetalTech Import</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Especialistas em importação de máquinas industriais de corte e dobra 
              de metalon galvanizado. Tecnologia de ponta para sua indústria.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@metaltechimport.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo - SP, Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/machines" className="hover:text-white transition-colors">Máquinas</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Importação</li>
              <li>Instalação</li>
              <li>Treinamento</li>
              <li>Manutenção</li>
              <li>Peças de Reposição</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MetalTech Import. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;