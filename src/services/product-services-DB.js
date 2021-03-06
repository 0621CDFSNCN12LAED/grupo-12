// ***** Global requires *****
const session = require('express-session');
const db = require('../database/models');
const moment = require('moment');
const PDF = require('pdfkit-construct');

const productServices = {
  async findAll() {
    const filteredProducts = await db.Product.findAll({
      where: {
        deleted: false,
      },
    });

    return filteredProducts;
  },

  async findCategory(payload) {
    const selectedCategory = await db.Category.findOne({
      where: {
        name: payload.category,
      },
    });
    return selectedCategory;
  },

  async findSubcategory(payload) {
    const selectedSubcategory = await db.Subcategory.findOne({
      where: {
        name: payload.subcategory,
      },
    });
    return selectedSubcategory;
  },

  async productsByCategory(payload) {
    const productsByCategory = await db.Product.findAll({
      include: [{ association: 'categories' }],
      where: {
        category_id: payload.id,
        deleted: false,
      },
    });
    return productsByCategory;
  },

  async findOneById(id) {
    const product = await db.Product.findByPk(id);
    return product;
  },

  async createOne(payload, file) {
    const category = await this.findCategory(payload);

    const subcategory = await this.findSubcategory(payload);

    const product = await db.Product.create({
      name: payload.name,
      image: file ? file.filename : 'default-img.jpg',
      price: Number(payload.price),
      description: payload.description,
      discount: Number(payload.discount),
      stock: Number(payload.stock),
      starred: payload.starred == 'on' ? (payload.starred = true) : (payload.starred = false),
      deleted: false,
      category_id: category.id,
      subcategory_id: subcategory.id,
    });

    return product;
  },

  async editOne(params, payload, file) {
    let newImage;
    if (file) {
      const image = file.filename;
      newImage = image;
    } else {
      const oldImage = await db.Product.findByPk(params);
      newImage = oldImage.image;
    }

    const category = await this.findCategory(payload);

    const subcategory = await this.findSubcategory(payload);

    await db.Product.update(
      {
        name: payload.name,
        image: newImage,
        price: Number(payload.price),
        description: payload.description,
        discount: Number(payload.discount),
        stock: Number(payload.stock),
        starred: payload.starred == 'on' ? (payload.starred = true) : (payload.starred = false),
        deleted: payload.deleted == 'on' ? (payload.deleted = true) : (payload.deleted = false),
        category_id: category.id,
        subcategory_id: subcategory.id,
      },
      {
        where: {
          id: params,
        },
      }
    );
  },

  async addToCart(payload, params, session) {
    let product = await db.UserProduct.findOne({
      where: {
        user_id: session.usuarioLogueado.id,
        product_id: params,
      },
    });

    if (product) {
      const newQuantity = (product.quantity += Number(payload.quantity));
      const productInCart = await db.UserProduct.update(
        {
          quantity: newQuantity,
        },
        {
          where: {
            user_id: session.usuarioLogueado.id,
            product_id: params,
          },
        }
      );
      return productInCart;
    } else {
      const productInCart = await db.UserProduct.create({
        quantity: payload.quantity,
        product_id: params,
        user_id: session.usuarioLogueado.id,
      });
      return productInCart;
    }
  },

  async getCartByUser(user_id) {
    const cartByUser = await db.UserProduct.findAll({
      include: [{ association: 'products' }],
      where: {
        user_id: user_id,
      },
    });
    return cartByUser;
  },

  async getAddresses(user_id) {
    const addresses = await db.Address.findAll({
      where: {
        user_id: user_id,
      },
    });
    return addresses;
  },

  async checkout(payload, user_id, cartInfo) {
    // Obtain PO
    const totalOrders = await db.Order.max('id');
    const initialPO = 45002000;
    let PO;

    if (totalOrders == 0) {
      PO = initialPO;
    } else {
      PO = initialPO + totalOrders;
    }

    // Obtain total amount of order
    let total_amount = 0;
    for (product of cartInfo) {
      let itemPrice = product.products.price * product.quantity;
      total_amount = total_amount + itemPrice;
    }
    // Create Order in DB
    const order = await db.Order.create({
      user_id: user_id,
      order_number: PO,
      purchase_date: Date.now(),
      external_reference: 'MercadoPago ref: xxxxxxx',
      address_id: payload.address,
      total_amount: total_amount,
    });

    for (const product of cartInfo) {
      // Create 1 entry per product in 'order_product' table
      await db.OrderProduct.create({
        order_id: order.id,
        product_id: product.product_id,
        quantity: product.quantity,
      });
      // Update stock in 'products' table
      db.Product.update(
        {
          stock: product.products.stock - product.quantity,
        },
        {
          where: {
            id: product.product_id,
          },
        }
      );
    }

    return order;
  },

  async restoreCart(user_id) {
    // Eliminate products in cart
    await db.UserProduct.destroy({
      where: {
        user_id: user_id,
      },
    });
  },

  async createPDF(params, response) {
    // Get order information
    const order = await db.Order.findOne({
      where: {
        id: params,
      },
    });

    // Get user information
    const user = await db.User.findOne({
      where: {
        id: order.user_id,
      },
    });

    // Get delivery address information
    const address = await db.Address.findOne({
      where: {
        id: order.address_id,
      },
    });

    const inputAddress = `${address.street_name} ${address.street_number}, ${address.city}, ${address.province}, ${address.country}`;

    // Get corresponding items for the order
    const productsInOrder = await db.OrderProduct.findAll({
      include: [{ association: 'orders' }],
      where: {
        order_id: params,
      },
    });
    // Get the detail of each item
    // Map method returns a promise for each item
    const promises = productsInOrder.map(async (item) => {
      const product = await db.Product.findOne({
        include: [{ association: 'orders' }],
        where: {
          id: item.product_id,
        },
      });
      return {
        name: product.name,
        description: `${product.description.substr(0, 70)}...`,
        price: product.price,
        quantity: item.quantity,
        total: item.quantity * product.price,
      };
    });

    // Save products to be printed in PDF
    const productsInTable = await Promise.all(promises);

    // PDFKit page configuration
    const doc = new PDF({
      size: 'A4',
      margins: { top: 20, left: 40, right: 40, bottom: 30 },
      bufferPages: true,
    });

    const filename = `Orden-de-compra-${Date.now()}.pdf`;
    const stream = response.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-disposition': `attachment;filename=${filename}`,
    });

    doc.on('data', (data) => {
      stream.write(data);
    });
    doc.on('end', () => {
      stream.end();
    });

    // set the header to render in every page
    doc.setDocumentHeader(
      {
        height: '25%',
      },
      () => {
        doc.fontSize(30).text('DeCamping.com', {
          align: 'center',
        });

        doc.lineCap('butt').moveTo(100, 50).lineTo(495, 50).stroke();

        doc.moveDown();

        // set the user details
        doc.fontSize(20).text('ORDEN DE COMPRA', {
          align: 'left',
        });

        doc.fontSize(12);

        doc.moveDown();

        doc.text(`Nro: ${order.order_number}`, {
          align: 'left',
        });

        doc.text(`Solicitada por: ${user.first_name} ${user.last_name}`, {
          align: 'left',
        });

        doc.text(`Direcci??n de env??o: ${inputAddress}`, {
          align: 'left',
        });

        doc.text(`E-mail: ${user.email}`, {
          align: 'left',
        });

        doc.text(`Fecha de compra: ${order.purchase_date}`, {
          align: 'left',
        });
      }
    );

    doc.addTable(
      [
        { key: 'name', label: 'Nombre', align: 'left' },
        { key: 'description', label: 'Descrici??n', align: 'left' },
        { key: 'price', label: 'Precio', align: 'left' },
        { key: 'quantity', label: 'Un..', align: 'left' },
        { key: 'total', label: 'Total', align: 'right' },
      ],
      productsInTable,
      {
        border: null,
        width: 'auto',
        striped: true,
        stripedColors: ['#CED4DA', '#F8F9FA'],
        cellsPadding: 8,
        marginLeft: 0,
        marginRight: 0,
        headAlign: 'left',
        cellsAlign: 'left',
        headBackground: '#495057',
        headFontSize: 12,
        headHeight: 12,
        cellsFontSize: 11,
        cellsMaxWidth: 170,
      }
    );

    doc.render();

    doc.moveDown(2);

    doc.fontSize(13).text(`$${order.total_amount}`);

    doc.fontSize(12).text('T??rminos y condiciones', 40, 690);
    doc.moveDown(0.5);
    doc
      .fontSize(11)
      .text(
        '1. Esta orden de compra no es una factura. Recibir?? la factura por e-mail cuando se realice el env??o correspondiente.'
      );
    doc.text('2. Los gastos de env??o estar??n incluidos en su factura.');
    doc.font('Times-BoldItalic').fontSize(14).text('Muchas gracias por su compra!', 410, 760);

    doc.end();
  },

  async destroyOne(params) {
    await db.Product.update(
      {
        deleted: true,
      },
      {
        where: {
          id: params,
        },
      }
    );
  },
};

module.exports = productServices;
