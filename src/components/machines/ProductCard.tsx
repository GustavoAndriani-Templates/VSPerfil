import React from 'react';
import { Link } from 'react-router-dom';
// import { Ruler, Calendar, Dumbbell } from '@vitejs/plugin-react';
import { Products } from '../../types/products';

interface productCardProps {
  product: Products;
}

const ProductCard: React.FC<productCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.category === 'corte'
            ? 'bg-red-100 text-red-800'
            : product.category === 'dobra'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-purple-100 text-purple-800'
            }`}>
            {product.category === 'corte' ? 'Corte' :
              product.category === 'dobra' ? 'Dobra' : 'Combinada'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.shortDescription}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            {/*a<Ruler className="h-4 w-4 text-blue-600" />*/}
            <span>{product.specifications.dimensions.length}x{product.specifications.dimensions.width}mm</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            {/*<Dumbbell className="h-4 w-4 text-blue-600" />*/}
            <span>{product.specifications.weight}kg</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            {/*<Calendar className="h-4 w-4 text-blue-600" />*/}
            <span>{product.deliveryTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {product.priceRange && (
            <span className="text-lg font-bold text-blue-600">
              {product.priceRange}
            </span>
          )}
          <Link
            to={`/product/${product.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
