import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Filter, Grid, List } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  tags: string[];
  date: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const imagesPerPage = 9;

  // Dados da galeria - expandidos com mais imagens
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/gallery/fabrica-1.jpg",
      alt: "Nossa fábrica - área de produção principal",
      category: "Instalações",
      tags: ["fábrica", "produção", "instalações"],
      date: "2024-01-15"
    },
    {
      id: 2,
      src: "/images/gallery/equipamento-1.jpg",
      alt: "Máquina de corte CNC em operação",
      category: "Equipamentos",
      tags: ["cnc", "corte", "operação"],
      date: "2024-01-20"
    },
    {
      id: 3,
      src: "/images/gallery/equipe-1.jpg",
      alt: "Nossa equipe técnica especializada",
      category: "Equipe",
      tags: ["equipe", "técnicos", "especialistas"],
      date: "2024-01-25"
    },
    {
      id: 4,
      src: "/images/gallery/instalacao-1.jpg",
      alt: "Processo de instalação em cliente",
      category: "Instalações",
      tags: ["instalação", "cliente", "montagem"],
      date: "2024-02-01"
    },
    {
      id: 5,
      src: "/images/gallery/treinamento-1.jpg",
      alt: "Sessão de treinamento técnico",
      category: "Treinamento",
      tags: ["treinamento", "capacitação", "técnica"],
      date: "2024-02-10"
    },
    {
      id: 6,
      src: "/images/gallery/qualidade-1.jpg",
      alt: "Controle de qualidade dos equipamentos",
      category: "Qualidade",
      tags: ["qualidade", "controle", "inspeção"],
      date: "2024-02-15"
    },
    {
      id: 7,
      src: "/images/gallery/manutencao-1.jpg",
      alt: "Serviço de manutenção preventiva",
      category: "Serviços",
      tags: ["manutenção", "preventiva", "serviço"],
      date: "2024-02-20"
    },
    {
      id: 8,
      src: "/images/gallery/tecnologia-1.jpg",
      alt: "Sistema de automação industrial",
      category: "Tecnologia",
      tags: ["automação", "tecnologia", "industria-4.0"],
      date: "2024-02-25"
    },
    {
      id: 9,
      src: "/images/gallery/entrega-1.jpg",
      alt: "Processo de entrega e logística",
      category: "Logística",
      tags: ["entrega", "logística", "transporte"],
      date: "2024-03-01"
    },
    {
      id: 10,
      src: "/images/gallery/clientes-1.jpg",
      alt: "Reunião com clientes estratégicos",
      category: "Clientes",
      tags: ["clientes", "reunião", "parceria"],
      date: "2024-03-05"
    },
    {
      id: 11,
      src: "/images/gallery/innovacao-1.jpg",
      alt: "Laboratório de pesquisa e inovação",
      category: "Inovação",
      tags: ["inovação", "pesquisa", "laboratório"],
      date: "2024-03-10"
    },
    {
      id: 12,
      src: "/images/gallery/certificacao-1.jpg",
      alt: "Certificações e premiações",
      category: "Certificações",
      tags: ["certificação", "qualidade", "prêmios"],
      date: "2024-03-15"
    },
    {
      id: 13,
      src: "/images/gallery/evento-1.jpg",
      alt: "Participação em feira internacional",
      category: "Eventos",
      tags: ["feira", "evento", "internacional"],
      date: "2024-03-20"
    },
    {
      id: 14,
      src: "/images/gallery/projeto-1.jpg",
      alt: "Projeto customizado para cliente",
      category: "Projetos",
      tags: ["projeto", "customizado", "solução"],
      date: "2024-03-25"
    },
    {
      id: 15,
      src: "/images/gallery/expansao-1.jpg",
      alt: "Workshop de expansão de capacidade",
      category: "Capacitação",
      tags: ["workshop", "expansão", "capacitação"],
      date: "2024-04-01"
    },
    {
      id: 16,
      src: "/images/gallery/sustentabilidade-1.jpg",
      alt: "Projetos de sustentabilidade ambiental",
      category: "Sustentabilidade",
      tags: ["sustentabilidade", "meio-ambiente", "ecológico"],
      date: "2024-04-05"
    },
    {
      id: 17,
      src: "/images/gallery/seguranca-1.jpg",
      alt: "Treinamento de segurança no trabalho",
      category: "Segurança",
      tags: ["segurança", "treinamento", "epi"],
      date: "2024-04-10"
    },
    {
      id: 18,
      src: "/images/gallery/desenvolvimento-1.jpg",
      alt: "Programa de desenvolvimento contínuo",
      category: "Desenvolvimento",
      tags: ["desenvolvimento", "crescimento", "aprendizado"],
      date: "2024-04-15"
    }
  ];

  // Filtra imagens por categoria
  const filteredImages = selectedCategory === 'Todas' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Calcula paginação
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);

  // Categorias únicas para filtro
  const categories = ['Todas', ...new Set(galleryImages.map(img => img.category))];

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll para o topo da galeria
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset para primeira página ao mudar categoria
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Galeria MetalTech
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa estrutura, equipamentos e todo o processo que nos torna referência no mercado
          </p>
        </div>

        {/* Filtros e Controles */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Filtro por Categoria */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <select 
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-600">
                {filteredImages.length} {filteredImages.length === 1 ? 'imagem' : 'imagens'}
              </span>
            </div>

            {/* Modo de Visualização */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid de Imagens */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            : "space-y-6 mb-8"
        }>
          {currentImages.map((image, index) => (
            <div 
              key={image.id}
              className={`group relative bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-lg ${
                viewMode === 'grid' 
                  ? 'hover:scale-105' 
                  : 'flex items-center space-x-6 p-4'
              }`}
              onClick={() => setSelectedImage(galleryImages.findIndex(img => img.id === image.id))}
            >
              {/* Thumbnail */}
              <div className={`${
                viewMode === 'grid' 
                  ? 'aspect-w-16 aspect-h-12' 
                  : 'w-48 h-32 flex-shrink-0'
              } bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full p-3 mx-auto mb-2">
                    <Filter className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-gray-500">Imagem {image.id}</span>
                </div>
              </div>

              {/* Informações */}
              <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(image.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {image.alt}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {image.tags.map(tag => (
                    <span 
                      key={tag}
                      className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay no hover (apenas grid) */}
              {viewMode === 'grid' && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
                    <p className="font-semibold">Clique para ampliar</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Informações da Paginação */}
        <div className="text-center text-gray-600">
          Mostrando {startIndex + 1}-{Math.min(startIndex + imagesPerPage, filteredImages.length)} de {filteredImages.length} imagens
          {selectedCategory !== 'Todas' && ` na categoria "${selectedCategory}"`}
        </div>
      </div>

      {/* Modal da Galeria */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
          >
            <X className="h-6 w-6" />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="max-w-4xl max-h-full w-full">
            <div className="bg-gradient-to-br from-blue-100 to-gray-100 w-full h-96 lg:h-[500px] flex items-center justify-center rounded-lg mb-4">
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full p-4 mx-auto mb-4">
                  <Filter className="h-8 w-8" />
                </div>
                <p className="text-gray-600">Imagem {galleryImages[selectedImage].id}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
                    {galleryImages[selectedImage].category}
                  </span>
                  <p className="text-sm text-gray-500">
                    {new Date(galleryImages[selectedImage].date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  {selectedImage + 1} de {galleryImages.length}
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {galleryImages[selectedImage].alt}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {galleryImages[selectedImage].tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;