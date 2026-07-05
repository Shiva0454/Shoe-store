const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/soleai";
        await mongoose.connect(mongoURI);

        console.log("MongoDB Connected");

    }

    catch(error){

        console.warn("MongoDB not available, continuing with fallback product data:", error.message);

    }

}

module.exports = connectDB;