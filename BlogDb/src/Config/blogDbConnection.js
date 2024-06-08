const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.URI;

const blogDataBaseConnection =  async (req ,res) =>{
    try{
        await mongoose.connect(uri);
        console.log(`Connected to blogs database successfully`);
    }catch(e){
        console.log(`Error : ${e}`);
    }
}

module.exports = blogDataBaseConnection;