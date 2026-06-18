const mongoose = require("mongoose");
async function connectDB() {
  try{await mongoose.connect(
    process.env.MONGODB_URI,
  )}
  catch(error){
    console.error("Error connecting to database:", error);
  }
}
module.exports = connectDB;
