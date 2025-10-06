export interface Machinery {
  id: string;
  name: string;
  model: string;
  category: 'cutting' | 'bending' | 'both';
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  specifications: {
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    weight: number;
    voltage: string;
    power: string;
    workingCapacity: string;
    precision: string;
    productionRate: string;
  };
  features: string[];
  technicalDetails: {
    [key: string]: string;
  };
  priceRange?: string;
  deliveryTime: string;
}