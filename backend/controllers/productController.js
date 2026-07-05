const Product = require("../models/Product");

const fallbackProducts = [
    {
        name: "Nike Air Max 90",
        brand: "Nike",
        price: 7999,
        category: "Lifestyle",
        description: "Classic comfort with iconic cushioning.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        stock: 20,
        rating: 4.8
    },
    {
        name: "Nike Pegasus 41",
        brand: "Nike",
        price: 8999,
        category: "Running",
        description: "Responsive cushioning for daily miles.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
        stock: 12,
        rating: 4.7
    },
    {
        name: "Nike Dunk Low",
        brand: "Nike",
        price: 7499,
        category: "Streetwear",
        description: "Low-profile style with premium texture.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        stock: 15,
        rating: 4.9
    },
    {
        name: "Nike SB Zoom",
        brand: "Nike",
        price: 6999,
        category: "Skate",
        description: "Board-ready grip and smooth impact control.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
        stock: 10,
        rating: 4.6
    },
    {
        name: "Nike Vaporfly 3",
        brand: "Nike",
        price: 12999,
        category: "Running",
        description: "Carbon-plated speed for race day.",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        stock: 8,
        rating: 4.8
    },
    {
        name: "Nike Air Jordan 1",
        brand: "Nike",
        price: 11999,
        category: "Lifestyle",
        description: "Heritage hoops style with modern comfort.",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
        stock: 9,
        rating: 5.0
    },
    {
        name: "Nike Blazer Mid",
        brand: "Nike",
        price: 7999,
        category: "Lifestyle",
        description: "Retro basketball vibe with a clean finish.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        stock: 6,
        rating: 4.5
    },
    {
        name: "Nike Air Force 1",
        brand: "Nike",
        price: 8999,
        category: "Lifestyle",
        description: "Timeless sneaker with cushioned comfort.",
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500",
        stock: 14,
        rating: 4.7
    },
    {
        name: "Nike React Infinity",
        brand: "Nike",
        price: 10999,
        category: "Running",
        description: "Supportive ride for every training day.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        stock: 7,
        rating: 4.8
    },
    {
        name: "Nike LeBron 21",
        brand: "Nike",
        price: 13999,
        category: "Basketball",
        description: "Performance engineered for explosive play.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        stock: 5,
        rating: 4.9
    },
    {
        name: "Nike Cortez",
        brand: "Nike",
        price: 6499,
        category: "Classic",
        description: "Vintage running silhouette with modern comfort.",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
        stock: 11,
        rating: 4.4
    },
    {
        name: "Nike Wildhorse 8",
        brand: "Nike",
        price: 9999,
        category: "Trail",
        description: "Tough grip for rough terrain and long miles.",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
        stock: 4,
        rating: 4.6
    }
];

// GET ALL PRODUCTS

const getProducts = async(req,res)=>{

    try{

        const products = await Product.find();

        res.status(200).json(products);

    }

    catch(error){

        res.status(200).json(fallbackProducts);

    }

};

// GET SINGLE PRODUCT

const getProductById = async(req,res)=>{

    try{

        const product = await Product.findById(req.params.id);

        if(!product){

            return res.status(404).json({
                message:"Product not found"
            });

        }

        res.json(product);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// CREATE PRODUCT

const createProduct = async(req,res)=>{

    try{

        const product = new Product(req.body);

        const savedProduct = await product.save();

        res.status(201).json(savedProduct);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// UPDATE PRODUCT

const updateProduct = async(req,res)=>{

    try{

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        if(!product){

            return res.status(404).json({
                message:"Product not found"
            });

        }

        res.json(product);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// DELETE PRODUCT

const deleteProduct = async(req,res)=>{

    try{

        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){

            return res.status(404).json({
                message:"Product not found"
            });

        }

        res.json({
            message:"Product deleted successfully"
        });

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};