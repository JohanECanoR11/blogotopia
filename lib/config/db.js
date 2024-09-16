import mongoose from "mongoose";

const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://johanecanor:johanecanor@cluster0.a4g8v.mongodb.net/blogtopia-db')
  console.log("¡Base de datos conectada!");
}