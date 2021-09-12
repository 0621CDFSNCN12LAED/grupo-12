const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const adminController = {
  create: (req, res) => {
    res.render("admin/product-create-form.ejs");
  },
  store: (req,res) => {
    const lastProduct = products[products.length - 1]
		const biggestproductId = products.length > 0 ? lastProduct.id : 1;
    let starred = false
    if (req.body.starred == "on") {
      starred = true
    }
		const product = {
			id: biggestproductId + 1,
      name: req.body.name,
      price: Number(req.body.price),
      desc: req.body.desc,
      img: req.file ? req.file.filename : "default-image.png",
      category: req.body.category,
      subcategory: req.body.subcategory,
      discount: req.body.discount,
      starred: starred,
			//...req.body, // Esto es un spread operator. Te trae toda la info de body y te lo pone en una variable con el mismo nombre que viene.
		};
    console.log(product)
		products.push(product)
		const jsonString = JSON.stringify(products,null,4)
		fs.writeFileSync(productsFilePath,jsonString)
		res.redirect("/products")
  },
  editProduct: (req,res) => {
    //Mostrar la ventana para editar los productos
    const product = products.find((prod) => {
			return prod.id == req.params.id
		})
    res.render('admin/product-edit-form', {product})
  },
  updateProduct: (req,res) => {
    //Hacer la edicion de los productos en la base de datos
    res.send("estamos en un put de editar")
  }
};

module.exports = adminController;
