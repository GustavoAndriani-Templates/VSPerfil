import { Machinery } from '../types/machinery';

export const machinesData: Machinery[] = [
  {
    id: '1',
    name: 'Cortadora CNC de Alta Precisão',
    model: 'CMC-5000',
    category: 'cutting',
    shortDescription: 'Máquina de corte CNC para metalon galvanizado com precisão milimétrica',
    fullDescription: 'A cortadora CNC CMC-5000 é equipada com tecnologia de ponta para corte preciso de metalon galvanizado. Com sistema de controle numérico computadorizado, oferece repetibilidade excepcional e alta produtividade.',
    image: '/images/cnc-cutter.jpg',
    gallery: [
      '/images/cnc-cutter-1.jpg',
      '/images/cnc-cutter-2.jpg',
      '/images/cnc-cutter-3.jpg'
    ],
    specifications: {
      dimensions: {
        length: 3200,
        width: 2100,
        height: 1800
      },
      weight: 4500,
      voltage: '380V trifásico',
      power: '15kW',
      workingCapacity: '5000x2000mm',
      precision: '±0.1mm',
      productionRate: '120 cortes/hora'
    },
    features: [
      'Controle CNC avançado',
      'Sistema de refrigeração integrado',
      'Software de otimização de corte',
      'Segurança com sensores laser',
      'Manutenção preditiva'
    ],
    technicalDetails: {
      'Velocidade de Corte': '0-15m/min',
      'Precisão Posicional': '±0.05mm',
      'Tipo de Corte': 'Plasma/Oxicorte',
      'Consumo de Ar': '120L/min',
      'Software Incluído': 'MetalCut Pro'
    },
    priceRange: 'R$ 150.000 - R$ 200.000',
    deliveryTime: '45-60 dias'
  },
  {
    id: '2',
    name: 'Cortadora CNC de Alta Precisão',
    model: 'CMC-5000',
    category: 'cutting',
    shortDescription: 'Máquina de corte CNC para metalon galvanizado com precisão milimétrica',
    fullDescription: 'A cortadora CNC CMC-5000 é equipada com tecnologia de ponta para corte preciso de metalon galvanizado. Com sistema de controle numérico computadorizado, oferece repetibilidade excepcional e alta produtividade.',
    image: '/images/cnc-cutter.jpg',
    gallery: [
      '/images/cnc-cutter-1.jpg',
      '/images/cnc-cutter-2.jpg',
      '/images/cnc-cutter-3.jpg'
    ],
    specifications: {
      dimensions: {
        length: 3200,
        width: 2100,
        height: 1800
      },
      weight: 4500,
      voltage: '380V trifásico',
      power: '15kW',
      workingCapacity: '5000x2000mm',
      precision: '±0.1mm',
      productionRate: '120 cortes/hora'
    },
    features: [
      'Controle CNC avançado',
      'Sistema de refrigeração integrado',
      'Software de otimização de corte',
      'Segurança com sensores laser',
      'Manutenção preditiva'
    ],
    technicalDetails: {
      'Velocidade de Corte': '0-15m/min',
      'Precisão Posicional': '±0.05mm',
      'Tipo de Corte': 'Plasma/Oxicorte',
      'Consumo de Ar': '120L/min',
      'Software Incluído': 'MetalCut Pro'
    },
    priceRange: 'R$ 150.000 - R$ 200.000',
    deliveryTime: '45-60 dias'
  },
  {
    id: '3',
    name: 'Cortadora CNC de Alta Precisão',
    model: 'CMC-5000',
    category: 'cutting',
    shortDescription: 'Máquina de corte CNC para metalon galvanizado com precisão milimétrica',
    fullDescription: 'A cortadora CNC CMC-5000 é equipada com tecnologia de ponta para corte preciso de metalon galvanizado. Com sistema de controle numérico computadorizado, oferece repetibilidade excepcional e alta produtividade.',
    image: '/images/cnc-cutter.jpg',
    gallery: [
      '/images/cnc-cutter-1.jpg',
      '/images/cnc-cutter-2.jpg',
      '/images/cnc-cutter-3.jpg'
    ],
    specifications: {
      dimensions: {
        length: 3200,
        width: 2100,
        height: 1800
      },
      weight: 4500,
      voltage: '380V trifásico',
      power: '15kW',
      workingCapacity: '5000x2000mm',
      precision: '±0.1mm',
      productionRate: '120 cortes/hora'
    },
    features: [
      'Controle CNC avançado',
      'Sistema de refrigeração integrado',
      'Software de otimização de corte',
      'Segurança com sensores laser',
      'Manutenção preditiva'
    ],
    technicalDetails: {
      'Velocidade de Corte': '0-15m/min',
      'Precisão Posicional': '±0.05mm',
      'Tipo de Corte': 'Plasma/Oxicorte',
      'Consumo de Ar': '120L/min',
      'Software Incluído': 'MetalCut Pro'
    },
    priceRange: 'R$ 150.000 - R$ 200.000',
    deliveryTime: '45-60 dias'
  },
  {
    id: '4',
    name: 'Dobradeira Hidráulica CNC',
    model: 'DHB-3000',
    category: 'bending',
    shortDescription: 'Dobradeira hidráulica com controle CNC para dobros precisos em metalon',
    fullDescription: 'A dobradeira hidráulica DHB-3000 oferece flexibilidade e precisão no processo de dobra de metalon galvanizado. Com sistema CNC Yaskawa, garante ângulos consistentes e repetibilidade.',
    image: '/images/hydraulic-bender.jpg',
    gallery: [
      '/images/bender-1.jpg',
      '/images/bender-2.jpg',
      '/images/bender-3.jpg'
    ],
    specifications: {
      dimensions: {
        length: 4100,
        width: 2500,
        height: 2200
      },
      weight: 6800,
      voltage: '440V trifásico',
      power: '22kW',
      workingCapacity: '3000x120mm',
      precision: '±0.1°',
      productionRate: '80 dobros/hora'
    },
    features: [
      'Controle Yaskawa CNC',
      'Compensaçāo automática de abertura',
      'Sistema de segurança redundante',
      'Backgauge CNC 6 eixos',
      'Diagnóstico inteligente'
    ],
    technicalDetails: {
      'Força de Dobra': '300 ton',
      'Comprimento Máximo': '3000mm',
      'Ângulo Máximo': '135°',
      'Velocidade de Aproximação': '100mm/s',
      'Precisão Angular': '±0.1°'
    },
    priceRange: 'R$ 280.000 - R$ 350.000',
    deliveryTime: '60-75 dias'
  }
];