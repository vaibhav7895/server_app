const mongoose = require('mongoose');

const url = `mongodb+srv://vaibhav7895:12345@cluster0.dpjtu57.mongodb.net/`;

const connection=mongoose.connect("mongodb+srv://vaibhav7895:12345@cluster0.dpjtu57.mongodb.net/")

module.exports={connection}