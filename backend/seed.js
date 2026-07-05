const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Nike Air Max",
    brand: "Nike",
    price: 5999,
    category: "Running",
    description: "Premium running shoe",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    stock: 20,
    rating: 4.8
  },
  {
    name: "Adidas Ultraboost",
    brand: "Adidas",
    price: 6999,
    category: "Running",
    description: "Comfortable everyday shoe",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    stock: 15,
    rating: 4.7
  },
  {
    name: "Puma RS-X",
    brand: "Puma",
    price: 4999,
    category: "Casual",
    description: "Stylish casual sneaker",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
    stock: 18,
    rating: 4.5
  },
  {
    name: "New Balance 550",
    brand: "New Balance",
    price: 7499,
    category: "Lifestyle",
    description: "Classic everyday sneaker",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500",
    stock: 10,
    rating: 4.9
  }
];

async function seedDB() {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products Added Successfully!");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDB();