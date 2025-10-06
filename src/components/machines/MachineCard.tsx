import React from 'react';
import { Link } from 'react-router-dom';
import { Machinery } from '../../types/machinery';
import { Ruler, Zap, Calendar } from 'lucide-react';

interface MachineCardProps {
  machine: Machinery;
}

const MachineCard: React.FC<MachineCardProps> = ({ machine }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={machine.image}
          alt={machine.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            machine.category === 'cutting' 
              ? 'bg-red-100 text-red-800'
              : machine.category === 'bending'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-purple-100 text-purple-800'
          }`}>
            {machine.category === 'cutting' ? 'Corte' : 
             machine.category === 'bending' ? 'Dobra' : 'Combinada'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{machine.name}</h3>
        <p className="text-gray-600 mb-4">{machine.shortDescription}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Ruler className="h-4 w-4 text-blue-600" />
            <span>{machine.specifications.dimensions.length}x{machine.specifications.dimensions.width}mm</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Zap className="h-4 w-4 text-blue-600" />
            <span>{machine.specifications.weight}kg</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Zap className="h-4 w-4 text-blue-600" />
            <span>{machine.specifications.voltage}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span>{machine.deliveryTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {machine.priceRange && (
            <span className="text-lg font-bold text-blue-600">
              {machine.priceRange}
            </span>
          )}
          <Link
            to={`/machines/${machine.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MachineCard;