import React from 'react';
import { Phone, Mail, MapPin, FileSignature } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/*<Factory className="h-8 w-8 text-blue-400" />*/}
              <img src="/logo-vsperfil.png" className='w-10 h-20' />
              <span className="text-xl font-bold">VS Perfil</span>
              <span className="text-sm text-gray-400">Tubo Galvanizado Ltda.</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Especialistas em importação de máquinas industriais de corte e dobra 
              de metalon galvanizado. Tecnologia de ponta para sua indústria.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <FileSignature className="h-4 w-4" />
                <div>CNPJ: 37.760.225/0001-56 </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(17) 98130-1284 </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>cadastro@vsperfil.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Alvares Florence - São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/machines" className="hover:text-white transition-colors">Máquinas</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Suporte</Link></li>
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
          <p>&copy; 2025 VS PERFIL TUBO GALVANIZADO LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;