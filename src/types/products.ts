export interface Products {
  id: string;
  name: string;
  category: 'corte' | 'dobra' | 'ambos';
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
  };
  features: string[];
  technicalDetails: {
    [key: string]: string;
  };
  priceRange?: string;
  deliveryTime: string;
}
