const model = require('../model/product');
const Product = model.Product;

exports.createProduct = (req, res)=> {
    const product = new Product(req.body);
    product.save( (err, doc) => {
        if(err){
            res.json(err)
        }else{
            res.status(200).json(doc)
        }
    })
};

exports.getAllProducts =async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const productId = params.id;
    const product = await Product.find(productId);
    res.json(product);
};

exports.replaceProduct = async (req, res) => {
    const productId = params.id;
    const product = await Product.findOneAndReplace({id: productId}, req.body)
    res.json(product);
};

exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findOneAndUpdate({id:productId}, req.body);
    res.json(product);
};

exports.deleteProduct = async (req, res) =>{
    const productId = req.params.id;
    const product = await Product.findOneAndDelete(productId)
    res.json(product)
};
