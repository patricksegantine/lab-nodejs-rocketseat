const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    // const products = await Product.find();

    try {
      // Paginação utilizando o plugin mongoose-paginate
      const { page = 1 } = req.query;
      const products = await Product.paginate({}, { page, limit: 10 });
  
      return res.json(products);
    } catch (error) {
      res.json({statusOk: false, message: "Erro ao paginar os dados"});
    }
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { 
      new: true 
    });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    res.send();
  }
}
