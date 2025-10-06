import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Machinery } from '../../types/machinery';
import { 
  Ruler,
  Zap, 
  Calendar, 
  ArrowLeft,
  Target,
  Shield
} from 'lucide-react';

interface MachineDetailsProps {
  machines: Machinery[];
}

const MachineDetails: React.FC<MachineDetailsProps> = ({ machines }) => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const machine = machines.find(m => m.id === id);

  if (!machine) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Máquina não encontrada</h2>
          <Link to="/machines" className="text-blue-600 hover:text-blue-700">
            Voltar para a lista de máquinas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/machines" 
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para máquinas
          </Link>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={machine.gallery?.[selectedImage] || machine.image}
                  alt={machine.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[machine.image, ...(machine.gallery || [])].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${machine.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  machine.category === 'cutting' 
                    ? 'bg-red-100 text-red-800'
                    : machine.category === 'bending'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {machine.category === 'cutting' ? 'Máquina de Corte' : 
                   machine.category === 'bending' ? 'Máquina de Dobra' : 'Máquina Combinada'}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{machine.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{machine.model}</p>
                <p className="text-gray-700 leading-relaxed">{machine.fullDescription}</p>
              </div>

              {/* Key Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Ruler className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Dimensões</p>
                    <p className="font-semibold">
                      {machine.specifications.dimensions.length} × {machine.specifications.dimensions.width} × {machine.specifications.dimensions.height}mm
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Peso</p>
                    <p className="font-semibold">{machine.specifications.weight} kg</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Voltagem</p>
                    <p className="font-semibold">{machine.specifications.voltage}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Precisão</p>
                    <p className="font-semibold">{machine.specifications.precision}</p>
                  </div>
                </div>
              </div>

              {/* Price and Delivery */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  {machine.priceRange && (
                    <div>
                      <p className="text-sm text-gray-600">Investimento</p>
                      <p className="text-2xl font-bold text-blue-600">{machine.priceRange}</p>
                    </div>
                  )}
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Prazo de Entrega</p>
                    <p className="text-lg font-semibold flex items-center justify-end">
                      <Calendar className="h-5 w-5 mr-2 text-green-600" />
                      {machine.deliveryTime}
                    </p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Especificações Técnicas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600" />
                    Características Técnicas
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(machine.technicalDetails).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-blue-600" />
                    Funcionalidades
                  </h3>
                  <ul className="space-y-2">
                    {machine.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineDetails;