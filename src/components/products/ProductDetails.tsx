import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Products } from "../../types/products";
import {
  Ruler,
  ArrowLeft,
  Target,
  Shield,
  Dumbbell,
  Proportions,
  Send,
} from "lucide-react";
import TableDimensions from "./TableDimensions";

interface TableColumn {
  title: string;
  dataIndex: string;
  key: number;
}

interface TableRow {
  id: number;
  [key: string]: string | number;
}

interface TableInfosData {
  columns: TableColumn[];
  dataSource: TableRow[];
}

interface ProductDetailsProps {
  products: Products[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [tableDimensions, setTableDimensions] = useState<TableInfosData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const product = products.find((m) => m.id === id);
  
  const [formData, setFormData] = useState({
    name: "",
    type: product!.category,
    material: "",
  });


  const dominarRolagem = () => {
    document
      .getElementById("tabela-dimensoes")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const circleTableDimensions = {
      columns: [
        { title: "Bitola", dataIndex: "bitola", key: 0 },
        { title: "0.35", dataIndex: "0.35", key: 1 },
        { title: "0.4", dataIndex: "0.4", key: 2 },
        { title: "0.5", dataIndex: "0.5", key: 3 },
        { title: "0.6", dataIndex: "0.6", key: 4 },
        { title: "0.7", dataIndex: "0.7", key: 5 },
        { title: "0.75", dataIndex: "0.75", key: 6 },
        { title: "0.8", dataIndex: "0.8", key: 7 },
        { title: "0.9", dataIndex: "0.9", key: 8 },
        { title: "1.2", dataIndex: "1.2", key: 9 },
        { title: "1.5", dataIndex: "1.5", key: 10 },
      ],
      dataSource: [
        {
          id: 0,
          bitola: "1/2''",
          "0.35": "",
          "0.4": "",
          "0.5": "",
          "0.6": "1.18 kg",
          "0.7": "",
          "0.75": "1.39 kg",
          "0.8": "",
          "0.9": "",
          "1.2": "",
          "1.5": "",
        },
        {
          id: 1,
          bitola: "5/8",
          "0.35": "",
          "0.4": "0.98 g",
          "0.5": "1.21 kg",
          "0.6": "1.42 kg",
          "0.7": "1.71 kg",
          "0.75": "1.83 kg",
          "0.8": "1.96 kg",
          "0.9": "2.2 kg",
          "1.2": "",
          "1.5": "",
        },
        {
          id: 2,
          bitola: "3/4",
          "0.35": "0.99 g",
          "0.4": "1.1 kg",
          "0.5": "1.4 kg",
          "0.6": "1.68 kg",
          "0.7": "1.96 kg",
          "0.75": "2.1 kg",
          "0.8": "2.24 kg",
          "0.9": "2.52 kg",
          "1.2": "3.36 kg",
          "1.5": "",
        },
        {
          id: 3,
          bitola: "7/8",
          "0.35": "",
          "0.4": "",
          "0.5": "1.69 kg",
          "0.6": "2.03 kg",
          "0.7": "2.37 kg",
          "0.75": "2.45 kg",
          "0.8": "2.71 kg",
          "0.9": "3.05 kg",
          "1.2": "4.7 kg",
          "1.5": "",
        },
        {
          id: 4,
          bitola: "1''",
          "0.35": "",
          "0.4": "",
          "0.5": "1.86 kg",
          "0.6": "2.23 kg",
          "0.7": "2.6 kg",
          "0.75": "2.79 kg",
          "0.8": "2.98 kg",
          "0.9": "3.35 kg",
          "1.2": "4.47 kg",
          "1.5": "",
        },
        {
          id: 5,
          bitola: "1.1/8",
          "0.35": "",
          "0.4": "",
          "0.5": "",
          "0.6": "2.57 kg",
          "0.7": "3 kg",
          "0.75": "3.21 kg",
          "0.8": "3.3 kg",
          "0.9": "3.86 kg",
          "1.2": "5.14 kg",
          "1.5": "",
        },
        {
          id: 6,
          bitola: "1.1/4",
          "0.35": "",
          "0.4": "",
          "0.5": "",
          "0.6": "2.82 kg",
          "0.7": "3.3 kg",
          "0.75": "3.53 kg",
          "0.8": "3.77 kg",
          "0.9": "4.24 kg",
          "1.2": "5.65 kg",
          "1.5": "",
        },
        {
          id: 7,
          bitola: "1.1/2",
          "0.35": "",
          "0.4": "",
          "0.5": "",
          "0.6": "3.42 kg",
          "0.7": "3.99 kg",
          "0.75": "4.27 kg",
          "0.8": "4.56 kg",
          "0.9": "5.13 kg",
          "1.2": "6.85 kg",
          "1.5": "",
        },
        {
          id: 8,
          bitola: "2''",
          "0.35": "",
          "0.4": "",
          "0.5": "",
          "0.6": "4.55 kg",
          "0.7": "5.31 kg",
          "0.75": "5.7 kg",
          "0.8": "6.07 kg",
          "0.9": "6.84 kg",
          "1.2": "9.12 kg",
          "1.5": "",
        },
      ],
    };

    const squareTableDimensions = {
      columns: [
        { title: "Bitola", dataIndex: "bitola", key: 0 },
        { title: "0.35", dataIndex: "0.35", key: 1 },
        { title: "0.4", dataIndex: "0.4", key: 2 },
        { title: "0.5", dataIndex: "0.5", key: 3 },
        { title: "0.6", dataIndex: "0.6", key: 4 },
        { title: "0.7", dataIndex: "0.7", key: 5 },
        { title: "0.75", dataIndex: "0.75", key: 6 },
        { title: "0.8", dataIndex: "0.8", key: 7 },
        { title: "0.9", dataIndex: "0.9", key: 8 },
        { title: "1.2", dataIndex: "1.2", key: 9 },
        { title: "1.5", dataIndex: "1.5", key: 10 },
      ],
      dataSource: [
        {
          id: 0,
          bitola: "13x13",
          "0.35": "0.858 g",
          "0.4": "0.980 g",
          "0.5": "",
          "0.6": "1.47 kg",
          "0.7": "",
          "0.75": "",
          "0.8": "",
          "0.9": "",
          "1.2": "",
          "1.5": "",
        },
        {
          id: 1,
          bitola: "15x15",
          "0.35": "0.99 g",
          "0.4": "1.13 kg",
          "0.5": "1.41 kg",
          "0.6": "1.7 kg",
          "0.7": "1.98 kg",
          "0.75": "2.12 kg",
          "0.8": "2.27 kg",
          "0.9": "2.55 kg",
          "1.2": "3.4 kg",
          "1.5": "",
        },
        {
          id: 2,
          bitola: "18x18",
          "0.35": "1.18 kg",
          "0.4": "1.35 kg",
          "0.5": "1.69 kg",
          "0.6": "2.03 kg",
          "0.7": "2.37 kg",
          "0.75": "2.55 kg",
          "0.8": "2.72 kg",
          "0.9": "3.05 kg",
          "1.2": "4.07 kg",
          "1.5": "",
        },
        {
          id: 3,
          bitola: "20x20",
          "0.35": "1.32 kg",
          "0.4": "1.5 kg",
          "0.5": "1.88 kg",
          "0.6": "2.26 kg",
          "0.7": "2.64 kg",
          "0.75": "2.83 kg",
          "0.8": "3.02 kg",
          "0.9": "3.4 kg",
          "1.2": "2.72 kg",
          "1.5": "",
        },
        {
          id: 4,
          bitola: "30x20",
          "0.35": "",
          "0.4": "",
          "0.5": "2.35 kg",
          "0.6": "2.83 kg",
          "0.7": "3.3 kg",
          "0.75": "3.54 kg",
          "0.8": "3.77 kg",
          "0.9": "4.25 kg",
          "1.2": "5.66 kg",
          "1.5": "",
        },
        {
          id: 5,
          bitola: "30x30",
          "0.35": "",
          "0.4": "",
          "0.5": "2.83 kg",
          "0.6": "3.4 kg",
          "0.7": "3.96 kg",
          "0.75": "4.24 kg",
          "0.8": "4.52 kg",
          "0.9": "5.09 kg",
          "1.2": "6.79 kg",
          "1.5": "8.48 kg",
        },
        {
          id: 6,
          bitola: "40x20",
          "0.35": "",
          "0.4": "",
          "0.5": "2.85 kg",
          "0.6": "3.42 kg",
          "0.7": "3.99 kg",
          "0.75": "4.28 kg",
          "0.8": "4.56 kg",
          "0.9": "5.13 kg",
          "1.2": "6.85 kg",
          "1.5": "8.55 kg",
        },
        {
          id: 7,
          bitola: "40x40",
          "0.35": "",
          "0.4": "",
          "0.5": "",
          "0.6": "4.55 kg",
          "0.7": "5.31 kg",
          "0.75": "5.7 kg",
          "0.8": "6.07 kg",
          "0.9": "6.83 kg",
          "1.2": "9.11 kg",
          "1.5": "11.40 kg",
        },
        {
          id: 8,
          bitola: "50x30",
          "0.35": "",
          "0.4": "",
          "0.5": "",
          "0.6": "4.55 kg",
          "0.7": "5.31 kg",
          "0.75": "5.7 kg",
          "0.8": "6.07 kg",
          "0.9": "6.83 kg",
          "1.2": "9.11 kg",
          "1.5": "11.40 kg",
        },
      ],
    };

    if (product?.category === "redondo")
      setTableDimensions(circleTableDimensions);
    if (product?.category === "quadrado" || product?.category === "retangular")
      setTableDimensions(squareTableDimensions);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const whatsappNumber = "5517981301284";
    const whatsappNumber = "5516996192224";

    const text = `
        *NOVA SOLICITAÇÃO DE ORÇAMENTO PELO SITE*
  
        *Nome:* ${formData.name}
        *Tubo:* ${formData.type}
        *Material:* ${formData.material}
      `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Máquina não encontrada
          </h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
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
            to="/products"
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
                  src={
                    selectedImage === 0
                      ? product.image
                      : product.gallery?.[selectedImage - 1]
                  }
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[product.image, ...(product.gallery || [])].map(
                  (img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-md overflow-hidden border-2 ${
                        selectedImage === index
                          ? "border-blue-600"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    product.category === "redondo"
                      ? "bg-red-100 text-red-800"
                      : product.category === "quadrado"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {product.category === "redondo"
                    ? "Tubo Redondo"
                    : product.category === "quadrado"
                      ? "Tubo Quadrado"
                      : "Tubo Retangular"}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                {/* <p className="text-xl text-gray-600 mb-4">{product.shortDescription}</p> */}
                <p className="text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Specifications */}
              {product.specifications ? (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Ruler className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Dimensões</p>
                      {typeof product.specifications.dimensions!.height ===
                      "string" ? (
                        <p className="font-semibold">
                          {product.specifications.dimensions!.length} ×{" "}
                          {product.specifications.dimensions!.width}{" "}
                          {product.specifications.dimensions!.height}
                        </p>
                      ) : (
                        <p className="font-semibold">
                          {product.specifications.dimensions!.length} ×{" "}
                          {product.specifications.dimensions!.width} ×{" "}
                          {product.specifications.dimensions!.height}mm
                        </p>
                      )}
                      <small>
                        Também disponível em medidas personalizadas mediante
                        consulta.
                      </small>
                    </div>
                  </div>
                  {product.specifications.weight ? (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Dumbbell className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Peso</p>
                        <p className="font-semibold">
                          {product.specifications.weight} kg
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {product.specifications.dimensions!.thickness ? (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Proportions className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Espessura</p>
                        <p className="font-semibold">
                          {product.specifications.dimensions!.thickness}
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {/* <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Voltagem</p>
                    <p className="font-semibold">{product.specifications.voltage}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Precisão</p>
                    <p className="font-semibold">{product.specifications.precision}</p>
                  </div>
                </div> */}
                </div>
              ) : null}

              {/* Price and Delivery */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  {/* {product.priceRange && (
                    <div>
                      <p className="text-sm text-gray-600">Investimento</p>
                      <p className="text-2xl font-bold text-blue-600">{product.priceRange}</p>
                    </div>
                  )}
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Prazo de Entrega</p>
                    <p className="text-lg font-semibold flex items-center justify-end">
                      <Calendar className="h-5 w-5 mr-2 text-green-600" />
                      {product.deliveryTime}
                    </p>
                  </div> */}
                </div>
                <button
                  className="w-full border-2 border-blue-600 mb-5 text-black py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={dominarRolagem}
                >
                  Ver tabela de dimensões
                </button>
                <button
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Especificações Técnicas
              </h2>

              {product.features ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Technical Details */}
                  <div>
                    <div className="space-y-3">
                      {Object.entries(product.technicalDetails).map(
                        ([key, value]: [string, string]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b border-gray-100"
                          >
                            <span className="text-gray-600">{key}:</span>
                            <span className="font-semibold">{value}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-blue-600" />
                      Funcionalidades
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature: any, index: any) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8">
                  {/* Technical Details */}
                  <div>
                    <div className="space-y-3">
                      {Object.entries(product.technicalDetails).map(
                        ([key, value]: [string, string]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b border-gray-100"
                          >
                            <span className="text-gray-600">{key}:</span>
                            <span className="font-semibold">{value}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div id="tabela-dimensoes" className="px-8 pt-24 pb-8">
              {/* Dimensions Table */}
              {tableDimensions ? (
                <TableDimensions tableInfos={tableDimensions} />
              ) : null}
            </div>
          </div>

          {/* Renderização Condicional do Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              {/* Card do Modal */}
              <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl relative">
                {/* Botão de Fechar (X) no topo */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>

                {/* Conteúdo do Modal */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Solicitar Orçamento
                </h3>

                <p className="text-gray-600 mb-6">
                  Preencha os dados abaixo ou insira o formulário aqui para
                  receber sua cotação.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="material"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Material *
                    </label>
                    <select
                      id="material"
                      name="material"
                      required
                      value={formData.material}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Selecione um tipo de material</option>
                      <option value="Fina Frio">Fina Frio</option>
                      <option value="Aço Carbono">Aço Carbono</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition cursor-pointer"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
