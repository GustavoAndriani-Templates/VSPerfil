import React, { useState, useMemo } from 'react';
import { Machinery } from '../types/machinery';
import MachineCard from '../components/machines/MachineCard';
import { Search, Filter } from 'lucide-react';

interface MachinesProps {
  machines: Machinery[];
}

const Machines: React.FC<MachinesProps> = ({ machines }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cutting' | 'bending' | 'both'>('all');

  const filteredMachines = useMemo(() => {
    return machines.filter(machine => {
      const matchesSearch = machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          machine.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          machine.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || machine.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [machines, searchTerm, selectedCategory]);

  const categories = [
    { value: 'all', label: 'Todas as Máquinas', count: machines.length },
    { value: 'cutting', label: 'Corte', count: machines.filter(m => m.category === 'cutting').length },
    { value: 'bending', label: 'Dobra', count: machines.filter(m => m.category === 'bending').length },
    { value: 'both', label: 'Combinadas', count: machines.filter(m => m.category === 'both').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossas Máquinas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossa linha completa de máquinas industriais para corte e dobra de metalon galvanizado
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar máquinas por nome, modelo ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredMachines.length} máquina{filteredMachines.length !== 1 ? 's' : ''} encontrada{filteredMachines.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Machines Grid */}
        {filteredMachines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <p className="text-gray-600 mb-4">Nenhuma máquina encontrada com os filtros selecionados.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Limpar filtros
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Machines;