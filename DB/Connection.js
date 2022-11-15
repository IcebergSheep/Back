const mongoose = require('mongoose');

const URI = "mongodb+srv://Lavacat:*********@cluster0.ya05snu.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected..');
};

module.exports = connectDB;
