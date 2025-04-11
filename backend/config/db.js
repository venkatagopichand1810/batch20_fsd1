// mongodb connection configuration 

const mongoose = require("mongoose");

// create the function to connect to the mongodb

const connectDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connected successfully")

    } catch(error) {
        console.log("connection error")
    }
}

module.exports = connectDB
