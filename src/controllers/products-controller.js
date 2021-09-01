const products = [
  {
    name: "Mochila Osprey Stratos 36L",
    price: "$21.875",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae. Quis assumenda quaerat deserunt debitis dolor iusto voluptatibus accusamus error!",
    img: "/img/osprey-mochila-stratos-36l.jpg",
    category: "montanismo",
    subcategory: "mochilas",
    discount: "30% OFF",
    starred: false,
    id: 1,
  },
  {
    name: "Arnés Petzl Fly",
    price: "$16.644",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae. Quis assumenda quaerat deserunt debitis dolor iusto voluptatibus accusamus error!",
    img: "/img/petzl-arnes-fly.jpg",
    category: "montanismo",
    subcategory: "accesorios",
    discount: "20% OFF",
    starred: false,
    id: 2,
  },
  {
    name: "Saco de Dormir Outwell Camper 0ºC",
    price: "$13.975",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae. Quis assumenda quaerat deserunt debitis dolor iusto voluptatibus accusamus error!",
    img: "/img/outwell-saco-de-dormir-camper-0-c.jpg",
    category: "camping",
    subcategory: "bolsa de dormir",
    discount: null,
    starred: true,
    id: 3,
  },
  {
    name: "Tienda de Campaña Columbus Enol 5P",
    price: "$27.790",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae. Quis assumenda quaerat deserunt debitis dolor iusto voluptatibus accusamus error!",
    img: "/img/columbus-tienda-de-campana-enol-5p-closed.jpg",
    category: "camping",
    subcategory: "carpas",
    discount: null,
    starred: true,
    id: 4,
  },
];

const productsController = {
  productDetail: (req, res) => {
    res.render("products/productDetail");
  },
  cart: (req, res) => {
    res.render("products/productCart");
  },
  fullpage: (req, res) => {
    res.render("products/fullpage");
  },
  products: products
};

module.exports = productsController;

