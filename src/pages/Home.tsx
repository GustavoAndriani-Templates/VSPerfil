import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Products } from '../types/products';
import ProductCard from '../components/products/ProductCard';
import {
  Factory,
  Shield,
  Clock,
  TrendingUp,
  Scissors,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { galleryImages } from '../data/gallery';

interface HomeProps {
  featuredProducts: Products[];
}

const Home: React.FC<HomeProps> = ({ featuredProducts }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Dados da linha do tempo
  const timelineEvents = [
    {
      year: "2010",
      title: "Fundação da VS Perfil",
      description: "Início das operações com foco em corte e dobra de metalon galvanizado"
    },
    {
      year: "2013",
      title: "Primeira Parceria Internacional",
      description: "Estabelecimento de parceria com fabricante alemã de equipamentos"
    },
    {
      year: "2016",
      title: "Expansão para Todo o Brasil",
      description: "Ampliação da atuação para todos os estados brasileiros"
    },
    {
      year: "2019",
      title: "Certificação ISO 9001",
      description: "Certificação de qualidade em processos e atendimento"
    },
    {
      year: "2022",
      title: "Nova Sede e Centro Técnico",
      description: "Inauguração da nova matriz com centro de treinamento"
    },
    {
      year: "2024",
      title: "Tecnologia 4.0",
      description: "Implementação de soluções de indústria 4.0 nos equipamentos"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const homeImages = [];
  for (let i = 0; i < 6; i++) {
    homeImages.push(galleryImages[i]);
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Corte e Dobra de Metalon Galvanizado de<br />
              <span className="text-blue-300">Alta Qualidade</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Soluções industriais especializadas em corte e dobra de metalon galvanizado. Tecnologia de ponta e processos automatizados para maximizar a produtividade e a qualidade dos seus projetos.
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
              Por que escolher a VS Perfil?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos especialistas em fornecer soluções em corte e dobra de metalon galvanizado, com foco em qualidade, inovação e atendimento ao cliente.
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

      {/* Company Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa História
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de uma década de excelência e inovação na área de metalon galvanizado
            </p>
          </div>

          <div className="relative">
            {/* Linha central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                  {/* Conteúdo */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Ponto na linha */}
                  <div className="relative w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Espaço vazio */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Galeria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça nossas instalações, equipamentos e equipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                    <Factory className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <img src={image.src} alt={image.alt} className="absolute w-full h-full object-cover trasition-all duration-300 ease-in-outhover:scale-110 hover:opacity-50" />
                  <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
                    <p className="font-semibold">{image.category}</p>
                    <p className="text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/gallery"
              className="md:col-start-2 col-span-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Modal da Galeria */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-4xl max-h-full">
            {galleryImages[selectedImage].src ? (
              <img src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} className="w-full h-auto object-contain rounded-lg shadow-lg" />
            ) : (
              <>
                <div className="bg-gradient-to-br from-blue-100 to-gray-100 w-full h-96 lg:h-[500px] flex items-center justify-center rounded-lg">
                  <Factory className="h-32 w-32 text-gray-400" />
                </div>
                <div className="text-white text-center mt-4">
                  <p className="font-semibold">{galleryImages[selectedImage].category}</p>
                  <p className="text-sm opacity-80">{galleryImages[selectedImage].alt}</p>
                  <p className="text-xs opacity-60 mt-2">
                    {selectedImage + 1} de {galleryImages.length}
                  </p>
                </div>
              </>
            )}

          </div>
        </div>
      )}

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
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
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
