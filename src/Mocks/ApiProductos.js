//Array de obj
const productos = [
  {
    id: 1,
    category: "gamer",
    title: "HP PAVILION",
    image: "https://i.postimg.cc/DJqKMyRf/hp1.jpg",
    stock: 33,
    description: ["8 GB RAM", " COLOR PLATEADO", " 256 GB DISCO SSD"],
    price: "150500,00",
  },
  {
    id: 2,
    category: "gamer",
    title: "ACER",
    image: "https://i.postimg.cc/JzC0bBWc/acer.jpg",
    stock: 30,
    description: ["16 GB RAM", " COLOR NEGRO", " 1 TB HD"],
    price: "180500,00",
  },
  {
    id: 3,
    category: "office",
    title: "LENOVO",
    image: "https://i.postimg.cc/sGmC3HVt/lenovo.jpg",
    stock: 7,
    description: ["4 GB RAM", " COLOR PLATEADO", " 1 TB HD"],
    price: "250500,00",
  },
  {
    id: 4,
    category: "school",
    title: "APPLE",
    image: "https://i.postimg.cc/LJX28Sgv/apple.jpg",
    stock: 44,
    description: ["8 GB RAM", " COLOR GOLD", " 128 GB HD"],
    price: "190500,00",
  },
  {
    id: 5,
    category: "school",
    title: "HUAWEI",
    image: "https://i.postimg.cc/1VsZh1ZG/huawei.jpg",
    stock: 65,
    description: ["8 GB RAM", " COLOR NEGRO", " 256 GB HD"],
    price: "110500,00",
  },
  {
    id: 6,
    category: "gamer",
    title: "SAMSUNG",
    image: "https://i.postimg.cc/s1rBDBjc/samsung.jpg",
    stock: 67,
    description: ["4 GB RAM", " COLOR BLANCO", " 64 GB HD"],
    price: "130500,00",
  },
  {
    id: 7,
    category: "office",
    title: "LG",
    image: "https://i.postimg.cc/Fdt4pJWn/lg.jpg",
    stock: 98,
    description: ["8 GB RAM", " COLOR PLATEADO", " 256 GB HD"],
    price: "200500,00",
  },
  {
    id: 8,
    category: "school",
    title: "ADVANCE",
    image: "https://i.postimg.cc/7CJ4SNV2/advance.jpg",
    stock: 43,
    description: ["3 GB RAM", " COLOR NEGRO", " 64 GB HD"],
    price: "85500,00",
  },
  {
    id: 9,
    category: "office",
    title: "DELL",
    image: "https://i.postimg.cc/rDPcdHST/dell.jpg",
    stock: 77,
    description: ["8 GB RAM", " COLOR NEGRO", " 1 TB HD"],
    price: "150900,00",
  },
  {
    id: 10,
    category: "school",
    title: "HP2",
    image: "https://i.postimg.cc/wvxnzmFD/hp2.jpg",
    stock: 25,
    description: ["16 GB RAM", " COLOR NEGRO", " 2 TB HD"],
    price: "150000,00",
  },
  {
    id: 11,
    category: "gamer",
    title: "HAIWA",
    image: "https://i.postimg.cc/9FwKcVPg/aiwa.png",
    stock: 25,
    description: ["16 GB RAM", " COLOR NEGRO", " 2 TB HD"],
    price: "110500,00",
  },
  {
    id: 12,
    category: "gamer",
    title: "KLX",
    image: "https://i.postimg.cc/RFPyZZby/klx.jpg",
    stock: 25,
    description: ["16 GB RAM", " COLOR NEGRO", " 2 TB HD"],
    price: "150500,00",
  },
  {
    id: 13,
    category: "office",
    title: "NSX",
    image: "https://i.postimg.cc/gjn5XbCJ/nsx.jpg",
    stock: 25,
    description: ["16 GB RAM", " COLOR NEGRO", " 2 TB HD"],
    price: "90500,00",
  },
  {
    id: 14,
    category: "school",
    title: "DNQP",
    image: "https://i.postimg.cc/BvBRRg5q/dnqp.jpg",
    stock: 25,
    description: ["16 GB RAM", " COLOR NEGRO", " 2 TB HD"],
    price: "210500,00",
  },
];

export const getProds = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.category === categoryId
    );
    setTimeout(() => {
      categoryId ? resolve(productosFiltrados) : resolve(productos);
    }, 1000);
  });
};

export const getProd = (id) => {
  return new Promise((resolve, reject) => {
    const productoEncontrado = productos.find((prod) => prod.id === Number(id));
    setTimeout(() => {
      resolve(productoEncontrado);
    }, 1000);
  });
};
