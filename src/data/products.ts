import { Products } from "../types/products";


export const productsData: Products[] = [
  {
    id: '1',
    name: 'Tubo Quadrado 15x15mm - Galvanizado',
    category: 'quadrado',
    shortDescription: 'Tubo quadrado de aço galvanizado, ideal para estruturas metálicas e projetos de construção civil',
    fullDescription: 'O tubo quadrado de aço galvanizado é fabricado com aço de alta qualidade e revestido com uma camada de zinco para proteção contra corrosão. Com dimensões de 15x15mm, é perfeito para aplicações que exigem resistência e durabilidade, como estruturas metálicas, suportes, grades e projetos de construção civil. Sua superfície galvanizada garante longa vida útil mesmo em ambientes externos, tornando-o uma escolha confiável para diversos tipos de projetos.',
    image: '/productsImages/tubo_quadrado_15x15/tubo_quadrado_15x15.jpeg',
    gallery: [
      '/productsImages/tubo_quadrado_15x15/tubo_quadrado_15x15__01.jpg',
      '/productsImages/tubo_quadrado_15x15/tubo_quadrado_15x15__02.jpg',
      '/productsImages/tubo_quadrado_15x15/tubo_quadrado_15x15__03.jpg',
    ],
    specifications: {
      dimensions: {
        length: 6000,
        width: 15,
        height: 15,
        thickness: '0.6mm',
      },
    },
    technicalDetails: {
      'Composição do Feixe': '256 barras',
      'Espessura da Parede': '0.6mm',
    }
  },
  {
    id: '2',
    name: 'Tubo Redondo 1 1/8" - Aço Carbono',
    category: 'redondo',
    shortDescription: 'Tubo redondo de aço carbono, ideal para aplicações estruturais e projetos de construção civil',
    fullDescription: 'O tubo redondo de aço carbono é fabricado com aço de alta qualidade e revestido com uma camada de zinco para proteção contra corrosão. Com diâmetro de 1 1/8", é perfeito para aplicações que exigem resistência e durabilidade, como estruturas metálicas, suportes, grades e projetos de construção civil. Sua superfície galvanizada garante longa vida útil mesmo em ambientes externos, tornando-o uma escolha confiável para diversos tipos de projetos.',
    image: '/productsImages/tubo_redondo_1_1-8/tubo_redondo_1_1-8.jpeg',
    gallery: [
      '/productsImages/tubo_redondo_1_1-8/tubo_redondo_1_1-8__01.jpg',
      '/productsImages/tubo_redondo_1_1-8/tubo_redondo_1_1-8__02.jpg',
      '/productsImages/tubo_redondo_1_1-8/tubo_redondo_1_1-8__03.jpg',
    ],
    specifications: {
      dimensions: {
        length: 6000,
        width: 1,
        height: '1/8"',
        thickness: '0.6mm'
      },
    },
    technicalDetails: {
      'Material': 'Aço Carbono',
      'Composição do Feixe': '??? barras',
      'Espessura da Parede': '0.4mm',
    }
  },
  {
    id: '3',
    name: 'Tubo Redondo 3/4" - Aço Carbono',
    category: 'redondo',
    shortDescription: 'Tubo redondo de aço carbono, ideal para aplicações estruturais e projetos de construção civil',
    fullDescription: 'O tubo redondo de aço carbono é fabricado com aço de alta qualidade e revestido com uma camada de zinco para proteção contra corrosão. Com diâmetro de 3/4", é perfeito para aplicações que exigem resistência e durabilidade, como estruturas metálicas, suportes, grades e projetos de construção civil. Sua superfície galvanizada garante longa vida útil mesmo em ambientes externos, tornando-o uma escolha confiável para diversos tipos de projetos.',
    image: '/productsImages/tubo_redondo_3-4/tubo_redondo_3-4.jpeg',
    gallery: [
      '/productsImages/tubo_redondo_3-4/tubo_redondo_3-4__01.jpg',
      '/productsImages/tubo_redondo_3-4/tubo_redondo_3-4__02.jpg',
      '/productsImages/tubo_redondo_3-4/tubo_redondo_3-4__03.jpg',
    ],
    specifications: {
      dimensions: {
        length: 6000,
        height: '3/4"',
        thickness: '0.6mm'
      },
    },
    technicalDetails: {
      'Material': 'Aço Carbono',
      'Composição do Amarrado': '271 barras',
      'Espessura da Parede': '0.6mm',
    }
  },
  {
    id: '4',
    name: 'Tubo Redondo 5/8"',
    category: 'redondo',
    shortDescription: 'Tubo redondo de aço carbono, ideal para aplicações estruturais e projetos de construção civil',
    fullDescription: 'O tubo redondo de aço carbono é fabricado com aço de alta qualidade e revestido com uma camada de zinco para proteção contra corrosão. Com diâmetro de 5/8", é perfeito para aplicações que exigem resistência e durabilidade, como estruturas metálicas, suportes, grades e projetos de construção civil. Sua superfície galvanizada garante longa vida útil mesmo em ambientes externos, tornando-o uma escolha confiável para diversos tipos de projetos.',
    image: '/productsImages/tubo_redondo_5-8/tubo_redondo_5-8.jpeg',
    gallery: [
      '/productsImages/tubo_redondo_5-8/tubo_redondo_5-8__01.jpg',
      '/productsImages/tubo_redondo_5-8/tubo_redondo_5-8__02.jpg',
      '/productsImages/tubo_redondo_5-8/tubo_redondo_5-8__03.jpg',
    ],
    specifications: {
      dimensions: {
        length: 6000,
        height: '5/8"',
        thickness: '0.4 à 1.2mm'
      },
    },
    technicalDetails: {
      'Material': 'Fina Frio',
      'Composição do Amarrado': '397 barras',
      'Espessura da Parede': '0.4 à 1.2mm',
    }
  },
  {
    id: '5',
    name: 'Tubo Redondo 3/4" - Fina Frio',
    category: 'redondo',
    shortDescription: 'Tubo redondo de aço, ideal para aplicações estruturais e projetos de construção civil',
    fullDescription: 'O tubo redondo de aço é fabricado com aço de alta qualidade e revestido com uma camada de zinco para proteção contra corrosão. Com diâmetro de 3/4", é perfeito para aplicações que exigem resistência e durabilidade, como estruturas metálicas, suportes, grades e projetos de construção civil. Sua superfície galvanizada garante longa vida útil mesmo em ambientes externos, tornando-o uma escolha confiável para diversos tipos de projetos.',
    image: '/productsImages/tubo_redondo_3-4_fina_frio/tubo_redondo_3-4_fina_frio.jpeg',
    gallery: [
      '/productsImages/tubo_redondo_3-4_fina_frio/tubo_redondo_3-4_fina_frio__01.jpg',
      '/productsImages/tubo_redondo_3-4_fina_frio/tubo_redondo_3-4_fina_frio__02.jpg',
      '/productsImages/tubo_redondo_3-4_fina_frio/tubo_redondo_3-4_fina_frio__03.jpg',
    ],
    specifications: {
      dimensions: {
        length: 6000,
        height: '3/4"',
        thickness: '0.6mm'
      },
    },
    technicalDetails: {
      'Material': 'Fina Frio',
      'Composição do Amarrado': '271 barras',
      'Espessura da Parede': '0.6mm',
    }
  },
  {
    id: '10',
    name: 'Tubo Retangular 30x20mm - Aço Carbono',
    category: 'retangular',
    shortDescription: 'Tubo retangular de aço carbono, ideal para estruturas metálicas e projetos de construção civil',
    fullDescription: 'O tubo retangular de aço carbono é fabricado com aço de alta qualidade e revestido com uma camada de zinco para proteção contra corrosão. Com dimensões de 30x20mm, é perfeito para aplicações que exigem resistência e durabilidade, como estruturas metálicas, suportes, grades e projetos de construção civil. Sua superfície galvanizada garante longa vida útil mesmo em ambientes externos, tornando-o uma escolha confiável para diversos tipos de projetos.',
    image: '/productsImages/tubo_retangular_30x20/tubo_retangular_30x20.jpeg',
    gallery: [
      '/productsImages/tubo_retangular_30x20/tubo_retangular_30x20__01.jpg',
      '/productsImages/tubo_retangular_30x20/tubo_retangular_30x20__02.jpg',
      '/productsImages/tubo_retangular_30x20/tubo_retangular_30x20__03.jpg',
    ],
    specifications: {
      dimensions: {
        length: 6000,
        width: 30,
        height: 20,
        thickness: '0.6mm'
      },
    },
    technicalDetails: {
      'Material': 'Aço Carbono',
      'Composição do Feixe': '224 barras',
      'Espessura da Parede': '0.6mm',
    }
  },
];
